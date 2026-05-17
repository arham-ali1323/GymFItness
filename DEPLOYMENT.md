# GymFitness Monorepo - Vercel Deployment Guide

## Project Structure

```
GymFitness/
├── frontend/          # Next.js frontend application
│   ├── app/          # Next.js app directory
│   ├── components/   # React components
│   ├── lib/          # Utility functions
│   ├── prisma/       # Prisma schema and migrations
│   ├── public/       # Static assets
│   ├── package.json  # Frontend dependencies
│   └── next.config.ts # Next.js configuration
├── backend/          # Express.js backend API
│   ├── api/          # Vercel serverless functions
│   │   └── index.js  # Main serverless function entry point
│   ├── config/       # Backend configuration
│   ├── controllers/  # API controllers
│   ├── middleware/   # Express middleware
│   ├── models/       # Database models
│   ├── routes/       # Express routes
│   ├── server.js     # Local development server
│   └── package.json  # Backend dependencies
├── package.json      # Root package.json with workspaces
└── vercel.json       # Vercel deployment configuration
```

## File Placement

### vercel.json
- **Location**: Root directory (`./vercel.json`)
- **Purpose**: Configures Vercel deployment settings
- **Key Settings**:
  - Routes all `/api/*` requests to backend serverless function
  - Configures function memory and duration limits

### Backend Entry File
- **Location**: `backend/api/index.js`
- **Purpose**: Main entry point for Vercel serverless function
- **Exports**: Express app wrapped as serverless function handler
- **Local Development**: Can also run standalone with `node backend/api/index.js`

### API Routes
- **Location**: `backend/routes/`
- **Purpose**: Express route definitions
- **Mounting**: All routes mounted in `backend/api/index.js`
- **Access**: Available at `/api/*` via Vercel rewrite rules

## Environment Variables

### Frontend Environment Variables
- **Location**: `frontend/.env.local` (local) or Vercel dashboard (production)
- **Required Variables**:
  - `DATABASE_URL` - Database connection string
  - `NEXTAUTH_SECRET` - NextAuth secret key
  - `NEXTAUTH_URL` - NextAuth URL
  - `GOOGLE_CLIENT_ID` - Google OAuth client ID (optional)
  - `GOOGLE_CLIENT_SECRET` - Google OAuth client secret (optional)

### Backend Environment Variables
- **Location**: Root `.env` (local) or Vercel dashboard (production)
- **Required Variables**:
  - `MONGODB_URI` - MongoDB connection string
  - `JWT_SECRET` - JWT secret key
  - `NODE_ENV` - Environment (development/production)

## Deployment Steps

### 1. Install Dependencies

```bash
npm install
```

This will install dependencies for both frontend and backend workspaces.

### 2. Configure Environment Variables

Set up environment variables in:
- **Local**: `.env` file in root directory
- **Vercel**: Project settings in Vercel dashboard

### 3. Deploy to Vercel

#### Option A: Via Vercel CLI
```bash
vercel
```

#### Option B: Via Vercel Dashboard
1. Connect your GitHub repository
2. Import the project
3. Configure environment variables
4. Deploy

### 4. Build and Test Locally

```bash
# Build both frontend and backend
npm run build

# Run frontend locally
npm run dev:frontend

# Run backend locally
npm run dev:backend

# Run both concurrently
npm run dev
```

## Route Configuration

### Frontend Routes
- All frontend pages are handled by Next.js
- Static pages: `/`, `/about`, `/contact`, etc.
- Dynamic pages: `/news/[id]`, `/trainers/[id]`, etc.
- User dashboard: `/user/*`
- Admin dashboard: `/admin/*`

### Backend API Routes
- All API routes are prefixed with `/api`
- Authentication: `/api/auth/*`
- Products: `/api/products/*`
- Cart: `/api/cart/*`
- Orders: `/api/orders/*`
- Contact: `/api/contact/*`
- Health check: `/api/health`

### Vercel Rewrite Rules

The `vercel.json` configuration rewrites all `/api/*` requests to the backend serverless function:

```json
{
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "/backend/api/index"
    }
  ]
}
```

## Best Practices

### Next.js Deployment
- ✅ Use static generation where possible
- ✅ Optimize images with Next.js Image component
- ✅ Use environment variables for sensitive data
- ✅ Enable caching for API routes
- ✅ Use incremental static regeneration (ISR) for dynamic content

### Express API Deployment
- ✅ Use serverless functions for stateless operations
- ✅ Keep function execution time under limits
- ✅ Use connection pooling for database
- ✅ Implement proper error handling
- ✅ Use rate limiting to prevent abuse

### Environment Variables
- ✅ Never commit `.env` files
- ✅ Use different variables for development and production
- ✅ Rotate secrets regularly
- ✅ Use Vercel's environment variable management

## Troubleshooting

### Build Errors
- Ensure all dependencies are installed: `npm install`
- Check for TypeScript errors: `npm run lint`
- Verify Prisma schema: `npm run prisma:generate`

### Deployment Issues
- Check Vercel deployment logs
- Verify environment variables are set correctly
- Ensure database connections are configured
- Check function timeout and memory limits

### API Route Issues
- Verify rewrite rules in `vercel.json`
- Check backend serverless function logs
- Ensure routes are properly mounted
- Test API endpoints locally first

## Scripts

### Root Scripts
- `npm run dev` - Run both frontend and backend concurrently
- `npm run dev:frontend` - Run frontend only
- `npm run dev:backend` - Run backend only
- `npm run build` - Build both frontend and backend
- `npm run build:frontend` - Build frontend only
- `npm run build:backend` - Build backend only

### Frontend Scripts
- `npm run dev` - Start Next.js development server
- `npm run build` - Build Next.js for production
- `npm run start` - Start Next.js production server
- `npm run lint` - Run ESLint
- `npm run prisma:generate` - Generate Prisma client
- `npm run prisma:push` - Push schema to database
- `npm run prisma:seed` - Seed database
- `npm run prisma:studio` - Open Prisma Studio

### Backend Scripts
- `npm run dev` - Start Express development server with nodemon
- `npm run start` - Start Express server
- `npm run build` - Build (no-op for Express)
- `npm run vercel-build` - Vercel build hook

## Additional Resources

- [Vercel Monorepo Documentation](https://vercel.com/docs/concepts/monorepos)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Vercel Serverless Functions](https://vercel.com/docs/concepts/functions/serverless-functions)
- [Express on Vercel](https://vercel.com/guides/using-express-with-vercel)
