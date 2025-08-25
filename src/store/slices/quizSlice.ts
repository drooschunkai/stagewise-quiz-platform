import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { supabase } from '@/lib/supabase'
import type { Quiz, QuizAttempt } from '@/types'

interface QuizState {
  quizzes: Quiz[]
  currentQuiz: Quiz | null
  attempts: QuizAttempt[]
  loading: boolean
  error: string | null
}

const initialState: QuizState = {
  quizzes: [],
  currentQuiz: null,
  attempts: [],
  loading: false,
  error: null
}

export const fetchQuizzes = createAsyncThunk(
  'quiz/fetchQuizzes',
  async (filters?: { keyStage?: string; subject?: string }) => {
    let query = supabase.from('quizzes').select('*').eq('isActive', true)
    
    if (filters?.keyStage) {
      query = query.eq('keyStage', filters.keyStage)
    }
    
    if (filters?.subject) {
      query = query.eq('subject', filters.subject)
    }
    
    const { data, error } = await query.order('createdAt', { ascending: false })
    
    if (error) throw error
    return data
  }
)

export const createQuiz = createAsyncThunk(
  'quiz/createQuiz',
  async (quizData: Partial<Quiz>) => {
    const { data, error } = await supabase
      .from('quizzes')
      .insert(quizData)
      .select()
      .single()
    
    if (error) throw error
    return data
  }
)

export const updateQuiz = createAsyncThunk(
  'quiz/updateQuiz',
  async ({ id, updates }: { id: string; updates: Partial<Quiz> }) => {
    const { data, error } = await supabase
      .from('quizzes')
      .update(updates)
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  }
)

export const deleteQuiz = createAsyncThunk(
  'quiz/deleteQuiz',
  async (id: string) => {
    const { error } = await supabase
      .from('quizzes')
      .update({ isActive: false })
      .eq('id', id)
    
    if (error) throw error
    return id
  }
)

export const submitQuizAttempt = createAsyncThunk(
  'quiz/submitAttempt',
  async (attemptData: Omit<QuizAttempt, 'id' | 'completedAt'>) => {
    const { data, error } = await supabase
      .from('quiz_attempts')
      .insert({
        ...attemptData,
        completedAt: new Date().toISOString(),
        isCompleted: true
      })
      .select()
      .single()
    
    if (error) throw error
    return data
  }
)

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setCurrentQuiz: (state, action: PayloadAction<Quiz | null>) => {
      state.currentQuiz = action.payload
    },
    clearError: (state) => {
      state.error = null
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch Quizzes
      .addCase(fetchQuizzes.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchQuizzes.fulfilled, (state, action) => {
        state.loading = false
        state.quizzes = action.payload
      })
      .addCase(fetchQuizzes.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch quizzes'
      })
      
      // Create Quiz
      .addCase(createQuiz.fulfilled, (state, action) => {
        state.quizzes.unshift(action.payload)
      })
      
      // Update Quiz
      .addCase(updateQuiz.fulfilled, (state, action) => {
        const index = state.quizzes.findIndex(q => q.id === action.payload.id)
        if (index !== -1) {
          state.quizzes[index] = action.payload
        }
      })
      
      // Delete Quiz
      .addCase(deleteQuiz.fulfilled, (state, action) => {
        state.quizzes = state.quizzes.filter(q => q.id !== action.payload)
      })
      
      // Submit Attempt
      .addCase(submitQuizAttempt.fulfilled, (state, action) => {
        state.attempts.push(action.payload)
      })
  }
})

export const { setCurrentQuiz, clearError } = quizSlice.actions
export default quizSlice.reducer
