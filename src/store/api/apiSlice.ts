import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { School, Class, User, Quiz, QuizAttempt } from '@/types'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
    prepareHeaders: (headers) => {
      // Add auth headers if needed
      return headers
    }
  }),
  tagTypes: ['Schools', 'Classes', 'Users', 'Quizzes', 'Attempts'],
  endpoints: (builder) => ({
    // Schools
    getSchools: builder.query<School[], void>({
      query: () => '/schools',
      providesTags: ['Schools']
    }),
    createSchool: builder.mutation<School, Partial<School>>({
      query: (school) => ({
        url: '/schools',
        method: 'POST',
        body: school
      }),
      invalidatesTags: ['Schools']
    }),
    updateSchool: builder.mutation<School, { id: string; updates: Partial<School> }>({
      query: ({ id, updates }) => ({
        url: `/schools/${id}`,
        method: 'PUT',
        body: updates
      }),
      invalidatesTags: ['Schools']
    }),

    // Classes
    getClasses: builder.query<Class[], string>({
      query: (schoolId) => `/schools/${schoolId}/classes`,
      providesTags: ['Classes']
    }),
    createClass: builder.mutation<Class, Partial<Class>>({
      query: (classData) => ({
        url: '/classes',
        method: 'POST',
        body: classData
      }),
      invalidatesTags: ['Classes']
    }),

    // Users
    getUsers: builder.query<User[], { schoolId?: string; role?: string }>({
      query: (params) => {
        const searchParams = new URLSearchParams()
        if (params.schoolId) searchParams.append('schoolId', params.schoolId)
        if (params.role) searchParams.append('role', params.role)
        return `/users?${searchParams.toString()}`
      },
      providesTags: ['Users']
    }),
    updateUser: builder.mutation<User, { id: string; updates: Partial<User> }>({
      query: ({ id, updates }) => ({
        url: `/users/${id}`,
        method: 'PUT',
        body: updates
      }),
      invalidatesTags: ['Users']
    }),

    // Quizzes
    getQuizzes: builder.query<Quiz[], { keyStage?: string; subject?: string }>({
      query: (params) => {
        const searchParams = new URLSearchParams()
        if (params.keyStage) searchParams.append('keyStage', params.keyStage)
        if (params.subject) searchParams.append('subject', params.subject)
        return `/quizzes?${searchParams.toString()}`
      },
      providesTags: ['Quizzes']
    }),
    createQuiz: builder.mutation<Quiz, Partial<Quiz>>({
      query: (quiz) => ({
        url: '/quizzes',
        method: 'POST',
        body: quiz
      }),
      invalidatesTags: ['Quizzes']
    }),

    // Quiz Attempts
    getQuizAttempts: builder.query<QuizAttempt[], { studentId?: string; quizId?: string }>({
      query: (params) => {
        const searchParams = new URLSearchParams()
        if (params.studentId) searchParams.append('studentId', params.studentId)
        if (params.quizId) searchParams.append('quizId', params.quizId)
        return `/quiz-attempts?${searchParams.toString()}`
      },
      providesTags: ['Attempts']
    }),
    submitQuizAttempt: builder.mutation<QuizAttempt, Partial<QuizAttempt>>({
      query: (attempt) => ({
        url: '/quiz-attempts',
        method: 'POST',
        body: attempt
      }),
      invalidatesTags: ['Attempts']
    })
  })
})

export const {
  useGetSchoolsQuery,
  useCreateSchoolMutation,
  useUpdateSchoolMutation,
  useGetClassesQuery,
  useCreateClassMutation,
  useGetUsersQuery,
  useUpdateUserMutation,
  useGetQuizzesQuery,
  useCreateQuizMutation,
  useGetQuizAttemptsQuery,
  useSubmitQuizAttemptMutation
} = apiSlice
