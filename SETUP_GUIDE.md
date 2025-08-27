# StageWise Quiz Platform - Setup Guide

## Prerequisites
- Node.js 18+
- Supabase account
- Git

## 1. Clone and Setup Project

```bash
# Create new project
npm create vite@latest stagewise-quiz --template react-ts
cd stagewise-quiz

# Replace package.json with the provided one
# Install dependencies
npm install
```

## 2. Setup Supabase Database

1. Create a new project at [supabase.com](https://supabase.com)
2. Run the SQL schema from the provided code in the Supabase SQL editor
3. Get your project URL and anon key from Settings > API

## 3. Configure Environment Variables

```bash
# Copy environment template
cp .env.example .env.local

# Edit .env.local with your Supabase credentials
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_APP_ENV=development
```

## 4. Project Structure Setup

Create the following folder structure in your `src/` directory:

```
src/
├── components/
│   ├── ui/
│   ├── layout/
│   ├── auth/
│   └── quiz/
├── pages/
│   ├── auth/
│   ├── admin/
│   ├── teacher/
│   └── student/
├── store/
│   ├── slices/
│   └── api/
├── lib/
├── hooks/
├── types/
└── utils/
```

## 5. Copy Provided Files

Copy all the TypeScript files from the provided structure into their respective directories, maintaining the folder structure.

## 6. Build and Test

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run type checking
npm run type-check

# Run linting
npm run lint
```

## 7. Deployment

### Netlify
```bash
npm run deploy:netlify
```

### Vercel
```bash
npm run deploy:vercel
```

### Docker
```bash
# Build Docker image
docker build -t stagewise-quiz .

# Run container
docker run -p 3000:80 stagewise-quiz
```

## 8. Initial Data Setup

1. Create your first admin user through the Supabase Auth UI
2. Update the user role to 'admin' in the users table
3. Create test schools, classes, and quizzes

## Features Included

✅ Complete authentication system with role-based access
✅ Quiz builder with multiple question types
✅ Admin dashboard with analytics
✅ Teacher dashboard for class management
✅ Student quiz taking interface
✅ Real-time progress tracking
✅ PWA capabilities for offline use
✅ Responsive design with Tailwind CSS
✅ TypeScript throughout for type safety
✅ Form validation with Zod
✅ State management with Redux Toolkit
✅ Database integration with Supabase
✅ Production deployment configurations

## Support

For issues or questions, check the console logs and ensure:
- Supabase environment variables are correctly set
- Database schema matches the provided SQL
- User roles are properly assigned
