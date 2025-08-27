# StageWise Quiz Platform - Project Structure Analysis

## 📊 Core Architecture Overview

### 🎯 Application Purpose
A comprehensive educational quiz platform for UK schools supporting Key Stages 1-4 with role-based access control (Admin, Teacher, Student).

### 🛠️ Technology Stack
- **Frontend Framework**: React 18 + TypeScript
- **Build Tool**: Vite with PWA support
- **Styling**: Tailwind CSS with custom design system
- **State Management**: Redux Toolkit + RTK Query
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth with custom user management
- **Form Handling**: React Hook Form + Zod validation
- **UI Components**: Custom component library + Radix UI primitives
- **Charts**: Recharts for analytics
- **Icons**: Lucide React
- **Notifications**: React Hot Toast

## 📁 Detailed File Structure

### 1. Configuration Files
```
package.json          # Dependencies and build scripts
vite.config.ts        # Vite configuration with PWA plugin
tailwind.config.js    # Tailwind CSS with custom colors and themes
tsconfig.json         # TypeScript configuration
.env.example          # Environment variables template
```

### 2. Source Code Structure (`src/`)
```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Base UI components (Button, etc.)
│   ├── layout/          # Layout components (Navbar, etc.)
│   ├── auth/            # Authentication components
│   └── quiz/            # Quiz-specific components
├── pages/               # Page components
│   ├── auth/            # Authentication pages
│   ├── admin/           # Admin dashboard and features
│   ├── teacher/         # Teacher dashboard
│   └── student/         # Student dashboard
├── store/               # Redux state management
│   ├── slices/          # Redux slices (auth, quiz, ui)
│   └── api/             # RTK Query API slices
├── lib/                 # Third-party integrations
│   └── supabase.ts      # Supabase database client
├── hooks/               # Custom React hooks
│   └── useAuth.ts       # Authentication hook
├── types/               # TypeScript type definitions
│   └── index.ts         # Core application types
└── utils/               # Utility functions
    └── index.ts         # Common utilities
```

## 🔐 Authentication System

### User Roles
- **Admin**: Full platform access, curriculum management
- **Teacher**: Class management, quiz creation, progress tracking
- **Student**: Quiz taking, progress viewing

### Auth Flow
1. Supabase Auth handles authentication
2. Custom users table stores role and profile data
3. Protected routes with role-based access control
4. Automatic redirect to appropriate dashboard

## 🎓 Quiz System Features

### Quiz Creation
- Multiple question types (MCQ, True/False, Short Answer)
- Curriculum alignment (Key Stages 1-4)
- Difficulty levels (Beginner, Intermediate, Advanced)
- Marking scheme and explanations
- Time estimation

### Quiz Management
- Curriculum quizzes (Admin created, school-wide)
- Custom quizzes (Teacher created, class-specific)
- Assignment system with due dates
- Progress tracking and analytics

## 🗄️ Database Schema

### Core Tables
- `schools`: School information and subscriptions
- `users`: User profiles with roles
- `classes`: Class organization
- `quizzes`: Quiz content and metadata
- `quiz_attempts`: Student quiz results
- `quiz_assignments`: Quiz-to-class assignments

### Security Features
- Row Level Security (RLS) policies
- Role-based data access
- Secure authentication flows

## 🎨 UI/UX Design System

### Color Palette
- **Primary**: Blue shades for main actions
- **Success**: Green for positive actions
- **Warning**: Yellow for warnings
- **Danger**: Red for errors/destructive actions

### Component Library
- Custom Button component with variants
- Responsive design with Tailwind
- Accessibility features
- Consistent spacing and typography

## 📊 Analytics & Reporting

### Admin Dashboard
- School statistics
- Teacher/student counts
- Quiz completion rates
- Platform engagement metrics

### Teacher Dashboard
- Class performance
- Individual student progress
- Quiz analytics
- Assignment tracking

## 🚀 Deployment & DevOps

### Build Configuration
- Vite for fast development and building
- PWA support for offline capability
- Code splitting and optimization

### Deployment Options
- **Netlify**: Static site hosting
- **Vercel**: Edge deployment
- **Docker**: Containerized deployment
- **Traditional**: Any static hosting service

### Environment Setup
- Development, staging, production environments
- Supabase project configuration
- Environment-specific variables

## 🔧 Development Features

### Type Safety
- Comprehensive TypeScript definitions
- Zod schema validation
- Runtime type checking

### Code Quality
- ESLint configuration
- Prettier formatting
- TypeScript strict mode

### Developer Experience
- Hot module replacement
- Type checking in dev mode
- Source maps for debugging

## 📈 Scalability Considerations

### Database Design
- Efficient indexing for large datasets
- Proper relationship management
- Query optimization

### Frontend Performance
- Code splitting and lazy loading
- Efficient state management
- Optimized asset loading

### Infrastructure
- CDN for static assets
- Database connection pooling
- Caching strategies

## 🛡️ Security Measures

### Authentication
- Secure password handling
- Session management
- Role-based access control

### Data Protection
- Row-level security in database
- Input validation and sanitization
- XSS protection

### API Security
- Rate limiting
- CORS configuration
- Secure headers

This architecture provides a solid foundation for an educational platform that can scale to support multiple schools, thousands of users, and comprehensive quiz management while maintaining security and performance.
