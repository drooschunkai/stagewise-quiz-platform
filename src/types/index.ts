export type UserRole = 'admin' | 'teacher' | 'student'

export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  schoolId?: string
  classIds?: string[]
  avatar?: string
  createdAt: string
  updatedAt: string
}

export interface School {
  id: string
  name: string
  address: string
  subscriptionPlan: 'basic' | 'pro' | 'enterprise'
  maxStudents: number
  maxTeachers: number
  isActive: boolean
  createdAt: string
}

export interface Quiz {
  id: string
  title: string
  description: string
  subject: string
  keyStage: 'KS1' | 'KS2' | 'KS3' | 'KS4'
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  questions: Question[]
  createdBy: string
  creatorRole: UserRole
  isPublic: boolean
  schoolId?: string
  classIds?: string[]
  estimatedTime: number
  totalMarks: number
  passingScore: number
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface Question {
  id: string
  type: 'multiple-choice' | 'true-false' | 'short-answer' | 'drag-drop'
  question: string
  options?: string[]
  correctAnswer: string | number
  explanation?: string
  marks: number
  tags: string[]
  curriculumCodes?: string[]
}

export interface QuizAttempt {
  id: string
  quizId: string
  studentId: string
  answers: Record<string, any>
  score: number
  percentage: number
  timeSpent: number
  completedAt: string
  isCompleted: boolean
}

export interface Class {
  id: string
  name: string
  teacherId: string
  schoolId: string
  yearGroup: number
  subject: string
  studentIds: string[]
  description?: string
  isActive: boolean
  createdAt: string
}
