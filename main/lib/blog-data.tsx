export interface BlogPost {
  id: string
  title: string
  description: string
  date: string
  readTime: string
  tags: string[]
  content: string
}

// Blog data - in a real app, this would come from a CMS or database
export const blogPosts: BlogPost[] = [
  {
    id: "getting-started-with-ai",
    title: "Getting Started with AI Development",
    description: "A comprehensive guide to building your first AI application using modern tools and frameworks.",
    date: "March 15, 2024",
    readTime: "8 min read",
    tags: ["AI", "Development", "Tutorial"],
    content: `
# Getting Started with AI Development

Artificial Intelligence is transforming the way we build applications. In this comprehensive guide, we'll explore the fundamentals of AI development and walk through building your first AI-powered application.

## What You'll Learn

- Setting up your AI development environment
- Understanding machine learning basics
- Building your first AI model
- Integrating AI into web applications

## Prerequisites

Before we dive in, make sure you have:
- Basic programming knowledge (Python or JavaScript)
- Understanding of web development concepts
- Curiosity and patience for learning

## Setting Up Your Environment

First, let's set up the necessary tools and libraries. We'll be using Python for this tutorial, as it has excellent AI/ML libraries.

\`\`\`bash
# Install Python dependencies
pip install tensorflow scikit-learn pandas numpy matplotlib
\`\`\`

## Understanding Machine Learning Basics

Machine learning is a subset of AI that enables computers to learn and make decisions from data without being explicitly programmed for every scenario.

### Types of Machine Learning

1. **Supervised Learning**: Learning with labeled examples
2. **Unsupervised Learning**: Finding patterns in unlabeled data
3. **Reinforcement Learning**: Learning through trial and error

## Building Your First Model

Let's build a simple image classifier using TensorFlow:

\`\`\`python
import tensorflow as tf
from tensorflow import keras

# Load and preprocess data
(x_train, y_train), (x_test, y_test) = keras.datasets.cifar10.load_data()
x_train, x_test = x_train / 255.0, x_test / 255.0

# Build the model
model = keras.Sequential([
    keras.layers.Flatten(input_shape=(32, 32, 3)),
    keras.layers.Dense(128, activation='relu'),
    keras.layers.Dropout(0.2),
    keras.layers.Dense(10, activation='softmax')
])

# Compile and train
model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])

model.fit(x_train, y_train, epochs=5)
\`\`\`

## Integrating AI into Web Applications

Once you have a trained model, you can integrate it into web applications using frameworks like Flask or FastAPI for Python, or use TensorFlow.js for client-side inference.

## Next Steps

- Experiment with different algorithms
- Learn about deep learning frameworks
- Explore computer vision and NLP applications
- Build projects that solve real problems

AI development is an exciting journey. Start with simple projects and gradually work your way up to more complex applications. The key is to keep learning and experimenting!
    `,
  },
  {
    id: "full-stack-best-practices",
    title: "Full Stack Development Best Practices",
    description: "Essential patterns and practices for building scalable full-stack applications in 2024.",
    date: "March 10, 2024",
    readTime: "12 min read",
    tags: ["Full Stack", "Best Practices", "Architecture"],
    content: `
# Full Stack Development Best Practices

Building scalable full-stack applications requires careful consideration of architecture, code organization, and development practices. Here are the essential patterns every developer should know in 2024.

## Architecture Principles

### 1. Separation of Concerns

Keep your frontend, backend, and database layers clearly separated. This makes your application easier to maintain, test, and scale.

\`\`\`
Frontend (React/Next.js) ↔ API Layer ↔ Business Logic ↔ Database
\`\`\`

### 2. API Design

Design your APIs with consistency and scalability in mind:

- Use RESTful conventions or GraphQL
- Implement proper error handling
- Add rate limiting and authentication
- Version your APIs from the start

\`\`\`javascript
// Good API design
GET /api/v1/users
POST /api/v1/users
GET /api/v1/users/:id
PUT /api/v1/users/:id
DELETE /api/v1/users/:id
\`\`\`

## Frontend Best Practices

### Component Architecture

- Keep components small and focused
- Use composition over inheritance
- Implement proper prop types/TypeScript interfaces
- Follow the single responsibility principle

### State Management

Choose the right tool for your needs:
- **Local state**: useState, useReducer
- **Global state**: Context API, Zustand, Redux Toolkit
- **Server state**: React Query, SWR

### Performance Optimization

- Implement code splitting and lazy loading
- Optimize images and assets
- Use proper caching strategies
- Monitor Core Web Vitals

## Backend Best Practices

### Database Design

- Normalize your data structure
- Use proper indexing
- Implement database migrations
- Consider read replicas for scaling

### Security

- Always validate and sanitize input
- Use parameterized queries to prevent SQL injection
- Implement proper authentication and authorization
- Keep dependencies updated

### Error Handling

\`\`\`javascript
// Proper error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  
  if (err.type === 'validation') {
    return res.status(400).json({ error: 'Invalid input' })
  }
  
  res.status(500).json({ error: 'Internal server error' })
})
\`\`\`

## DevOps and Deployment

### Environment Management

- Use environment variables for configuration
- Never commit secrets to version control
- Implement proper staging environments

### Monitoring and Logging

- Set up application monitoring
- Implement structured logging
- Use error tracking services
- Monitor performance metrics

## Testing Strategy

### Frontend Testing

- Unit tests for utility functions
- Component tests for UI logic
- Integration tests for user flows
- End-to-end tests for critical paths

### Backend Testing

- Unit tests for business logic
- Integration tests for API endpoints
- Database tests for data operations
- Load tests for performance

## Code Quality

### Linting and Formatting

- Use ESLint and Prettier
- Implement pre-commit hooks
- Enforce consistent code style
- Use TypeScript for type safety

### Code Reviews

- Review all code before merging
- Focus on logic, security, and maintainability
- Use automated checks where possible
- Document architectural decisions

## Conclusion

Following these best practices will help you build maintainable, scalable applications. Remember that practices evolve with technology, so stay updated with the latest developments in the full-stack ecosystem.

The key is to start with solid foundations and iterate based on your specific needs and constraints.
    `,
  },
  {
    id: "computer-vision-projects",
    title: "Computer Vision Projects That Matter",
    description: "Exploring real-world applications of computer vision and how to get started with your own projects.",
    date: "March 5, 2024",
    readTime: "10 min read",
    tags: ["Computer Vision", "OpenCV", "Projects"],
    content: `
# Computer Vision Projects That Matter

Computer vision is one of the most exciting fields in AI, with applications ranging from medical imaging to autonomous vehicles. Let's explore some impactful projects you can build and the real-world problems they solve.

## Real-World Applications

### Medical Image Analysis

Computer vision is revolutionizing healthcare by helping doctors analyze medical images more accurately and quickly.

**Project Ideas:**
- Skin cancer detection from dermatoscopy images
- X-ray analysis for pneumonia detection
- Retinal image analysis for diabetic retinopathy

**Impact:** Early detection of diseases can save lives and reduce healthcare costs.

### Autonomous Systems

From self-driving cars to delivery drones, computer vision enables machines to understand their environment.

**Key Technologies:**
- Object detection and tracking
- Depth estimation
- Semantic segmentation
- Motion planning

### Agricultural Innovation

Computer vision helps farmers optimize crop yields and reduce waste.

**Applications:**
- Crop health monitoring via drone imagery
- Automated pest detection
- Yield prediction and harvest optimization

## Getting Started: Essential Tools

### OpenCV

OpenCV is the most popular computer vision library. Here's a simple example:

\`\`\`python
import cv2
import numpy as np

# Load and process an image
image = cv2.imread('input.jpg')
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

# Apply edge detection
edges = cv2.Canny(gray, 50, 150)

# Display results
cv2.imshow('Original', image)
cv2.imshow('Edges', edges)
cv2.waitKey(0)
cv2.destroyAllWindows()
\`\`\`

### Deep Learning Frameworks

For more advanced projects, use frameworks like:
- **TensorFlow/Keras**: Great for beginners
- **PyTorch**: Preferred by researchers
- **YOLO**: Excellent for real-time object detection

## Project Walkthrough: Face Detection System

Let's build a real-time face detection system:

### Step 1: Setup

\`\`\`python
import cv2
import numpy as np

# Load the face detection classifier
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
\`\`\`

### Step 2: Video Capture

\`\`\`python
# Initialize video capture
cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()
    if not ret:
        break
    
    # Convert to grayscale
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    
    # Detect faces
    faces = face_cascade.detectMultiScale(gray, 1.1, 4)
    
    # Draw rectangles around faces
    for (x, y, w, h) in faces:
        cv2.rectangle(frame, (x, y), (x+w, y+h), (255, 0, 0), 2)
    
    # Display the frame
    cv2.imshow('Face Detection', frame)
    
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
\`\`\`

## Advanced Project Ideas

### 1. Smart Security System

Build a system that can:
- Detect and recognize authorized personnel
- Alert on suspicious activities
- Track movement patterns

### 2. Quality Control in Manufacturing

Create a system for:
- Defect detection in products
- Automated sorting and classification
- Real-time quality metrics

### 3. Augmented Reality Applications

Develop AR experiences with:
- Marker-based tracking
- SLAM (Simultaneous Localization and Mapping)
- 3D object overlay

## Best Practices

### Data Collection and Preparation

- Collect diverse, representative datasets
- Implement proper data augmentation
- Ensure data quality and labeling accuracy
- Consider privacy and ethical implications

### Model Development

- Start with pre-trained models when possible
- Use transfer learning for faster training
- Implement proper validation strategies
- Monitor for overfitting

### Deployment Considerations

- Optimize models for target hardware
- Consider edge computing for real-time applications
- Implement proper error handling
- Plan for model updates and maintenance

## Ethical Considerations

Computer vision applications can have significant societal impact:

- **Privacy**: Respect user privacy and data protection
- **Bias**: Ensure fair representation across demographics
- **Transparency**: Make AI decisions explainable
- **Consent**: Obtain proper consent for data usage

## Getting Started Today

1. **Learn the Basics**: Start with OpenCV tutorials
2. **Practice with Datasets**: Use public datasets like COCO, ImageNet
3. **Build Simple Projects**: Start with basic image processing
4. **Join Communities**: Participate in computer vision forums and competitions
5. **Stay Updated**: Follow research papers and industry trends

Computer vision is a rapidly evolving field with endless possibilities. The key is to start with simple projects and gradually work your way up to more complex applications that can make a real difference in the world.

Remember: the best computer vision project is one that solves a real problem for real people.
    `,
  },
  {
    id: "building-saas-with-nextjs",
    title: "Building a SaaS Application with Next.js",
    description: "Step-by-step guide to creating a production-ready SaaS application using Next.js and modern tools.",
    date: "February 28, 2024",
    readTime: "15 min read",
    tags: ["Next.js", "SaaS", "React"],
    content: `
# Building a SaaS Application with Next.js

Next.js has become the go-to framework for building modern web applications. In this comprehensive guide, we'll build a complete SaaS application from scratch, covering everything from authentication to payments.

## Project Overview

We'll be building a project management SaaS with the following features:
- User authentication and authorization
- Team collaboration tools
- Real-time updates
- Payment integration
- Admin dashboard

## Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma
- **Authentication**: NextAuth.js
- **Payments**: Stripe
- **Deployment**: Vercel

## Setting Up the Foundation

### 1. Initialize the Project

\`\`\`bash
npx create-next-app@latest my-saas-app
cd my-saas-app
npm install prisma @prisma/client next-auth stripe
\`\`\`

### 2. Database Setup

Create your Prisma schema:

\`\`\`prisma
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  // Relations
  teams     TeamMember[]
  projects  Project[]
}

model Team {
  id        String   @id @default(cuid())
  name      String
  createdAt DateTime @default(now())
  
  // Relations
  members   TeamMember[]
  projects  Project[]
}

model Project {
  id          String   @id @default(cuid())
  title       String
  description String?
  status      String   @default("active")
  createdAt   DateTime @default(now())
  
  // Relations
  teamId      String
  team        Team     @relation(fields: [teamId], references: [id])
  ownerId     String
  owner       User     @relation(fields: [ownerId], references: [id])
  tasks       Task[]
}
\`\`\`

## Authentication System

### NextAuth.js Configuration

\`\`\`javascript
// app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '@/lib/prisma'

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.sub!
      }
      return session
    },
  },
})

export { handler as GET, handler as POST }
\`\`\`

### Protected Routes

\`\`\`javascript
// middleware.ts
import { withAuth } from 'next-auth/middleware'

export default withAuth(
  function middleware(req) {
    // Add any additional middleware logic here
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
)

export const config = {
  matcher: ['/dashboard/:path*', '/api/protected/:path*']
}
\`\`\`

## Building the Dashboard

### Main Dashboard Layout

\`\`\`jsx
// app/dashboard/layout.tsx
import { Sidebar } from '@/components/sidebar'
import { Header } from '@/components/header'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
\`\`\`

### Project Management Features

\`\`\`jsx
// app/dashboard/projects/page.tsx
import { getServerSession } from 'next-auth'
import { prisma } from '@/lib/prisma'
import { ProjectCard } from '@/components/project-card'

export default async function ProjectsPage() {
  const session = await getServerSession()
  
  const projects = await prisma.project.findMany({
    where: {
      ownerId: session?.user?.id,
    },
    include: {
      team: true,
      _count: {
        select: { tasks: true }
      }
    }
  })

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
\`\`\`

## Real-time Features

### WebSocket Integration

\`\`\`javascript
// lib/websocket.ts
import { Server } from 'socket.io'

export function initializeWebSocket(server: any) {
  const io = new Server(server)
  
  io.on('connection', (socket) => {
    console.log('User connected:', socket.id)
    
    socket.on('join-project', (projectId) => {
      socket.join(\`project-\${projectId}\`)
    })
    
    socket.on('task-update', (data) => {
      socket.to(\`project-\${data.projectId}\`).emit('task-updated', data)
    })
    
    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id)
    })
  })
  
  return io
}
\`\`\`

## Payment Integration

### Stripe Setup

\`\`\`javascript
// app/api/create-checkout-session/route.ts
import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: NextRequest) {
  try {
    const { priceId, userId } = await req.json()
    
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: \`\${process.env.NEXTAUTH_URL}/dashboard?success=true\`,
      cancel_url: \`\${process.env.NEXTAUTH_URL}/pricing?canceled=true\`,
      client_reference_id: userId,
    })
    
    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    return NextResponse.json({ error: 'Error creating checkout session' }, { status: 500 })
  }
}
\`\`\`

### Subscription Management

\`\`\`jsx
// components/subscription-manager.tsx
'use client'

import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export function SubscriptionManager({ userId }: { userId: string }) {
  const [loading, setLoading] = useState(false)
  
  const handleSubscribe = async (priceId: string) => {
    setLoading(true)
    
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId, userId }),
      })
      
      const { sessionId } = await response.json()
      const stripe = await stripePromise
      
      await stripe?.redirectToCheckout({ sessionId })
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <div className="space-y-4">
      <button
        onClick={() => handleSubscribe('price_1234567890')}
        disabled={loading}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg disabled:opacity-50"
      >
        {loading ? 'Processing...' : 'Subscribe to Pro Plan'}
      </button>
    </div>
  )
}
\`\`\`

## Performance Optimization

### Caching Strategy

\`\`\`javascript
// lib/cache.ts
import { unstable_cache } from 'next/cache'

export const getCachedProjects = unstable_cache(
  async (userId: string) => {
    return await prisma.project.findMany({
      where: { ownerId: userId },
      include: { team: true }
    })
  },
  ['user-projects'],
  { revalidate: 300 } // 5 minutes
)
\`\`\`

### Image Optimization

\`\`\`jsx
import Image from 'next/image'

export function ProjectThumbnail({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      width={300}
      height={200}
      className="rounded-lg object-cover"
      priority
    />
  )
}
\`\`\`

## Testing Strategy

### Unit Tests

\`\`\`javascript
// __tests__/project.test.ts
import { createProject } from '@/lib/projects'

describe('Project Management', () => {
  it('should create a new project', async () => {
    const projectData = {
      title: 'Test Project',
      description: 'A test project',
      teamId: 'team-123',
      ownerId: 'user-123'
    }
    
    const project = await createProject(projectData)
    
    expect(project.title).toBe('Test Project')
    expect(project.status).toBe('active')
  })
})
\`\`\`

## Deployment

### Environment Variables

\`\`\`bash
# .env.local
DATABASE_URL="postgresql://..."
NEXTAUTH_SECRET="your-secret"
NEXTAUTH_URL="http://localhost:3000"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
STRIPE_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
\`\`\`

### Vercel Deployment

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
\`\`\`

## Monitoring and Analytics

### Error Tracking

\`\`\`javascript
// lib/monitoring.ts
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
})

export function captureError(error: Error, context?: any) {
  Sentry.captureException(error, { extra: context })
}
\`\`\`

## Conclusion

Building a SaaS application with Next.js provides a solid foundation for scalable, modern web applications. Key takeaways:

1. **Start with a solid architecture** - Plan your data models and API structure early
2. **Implement authentication properly** - Use established solutions like NextAuth.js
3. **Focus on user experience** - Real-time features and responsive design matter
4. **Plan for scale** - Implement caching, optimization, and monitoring from the start
5. **Test thoroughly** - Both automated tests and user testing are crucial

The SaaS landscape is competitive, but with the right technical foundation and focus on solving real problems, you can build successful applications that users love.

Remember: the technology is just the foundation—focus on solving real problems for your users.
    `,
  },
  {
    id: "devops-automation-strategies",
    title: "DevOps Automation Strategies for Modern Teams",
    description: "Implementing CI/CD pipelines and automation practices that scale with your development team.",
    date: "February 20, 2024",
    readTime: "11 min read",
    tags: ["DevOps", "CI/CD", "Automation"],
    content: `
# DevOps Automation Strategies for Modern Teams

Effective DevOps practices can dramatically improve your team's productivity and code quality. Let's explore automation strategies that actually work in real-world development environments.

## The DevOps Mindset

DevOps isn't just about tools—it's about culture, collaboration, and continuous improvement. The goal is to break down silos between development and operations teams while automating repetitive tasks.

### Core Principles

1. **Automation First**: If you do it more than twice, automate it
2. **Fail Fast**: Catch issues early in the development cycle
3. **Continuous Feedback**: Monitor everything and learn from data
4. **Collaboration**: Foster communication between all stakeholders

## Essential Automation Areas

### 1. Continuous Integration

Automate your testing and build processes to catch issues early:

\`\`\`yaml
# .github/workflows/ci.yml
name: CI Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run linting
      run: npm run lint
    
    - name: Run tests
      run: npm run test:coverage
    
    - name: Upload coverage
      uses: codecov/codecov-action@v3
      with:
        file: ./coverage/lcov.info
\`\`\`

### 2. Deployment Pipelines

Create reliable, repeatable deployment processes:

\`\`\`yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment: production
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Build application
      run: |
        npm ci
        npm run build
    
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: \${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: \${{ secrets.ORG_ID }}
        vercel-project-id: \${{ secrets.PROJECT_ID }}
        vercel-args: '--prod'
\`\`\`

### 3. Infrastructure as Code

Manage your infrastructure with version control:

\`\`\`hcl
# terraform/main.tf
provider "aws" {
  region = var.aws_region
}

resource "aws_ecs_cluster" "main" {
  name = "\${var.project_name}-cluster"
  
  setting {
    name  = "containerInsights"
    value = "enabled"
  }
}

resource "aws_ecs_service" "app" {
  name            = "\${var.project_name}-service"
  cluster         = aws_ecs_cluster.main.id
  task_definition = aws_ecs_task_definition.app.arn
  desired_count   = var.app_count
  
  deployment_configuration {
    maximum_percent         = 200
    minimum_healthy_percent = 100
  }
}
\`\`\`

## Monitoring and Observability

### Application Monitoring

\`\`\`javascript
// lib/monitoring.js
import { createPrometheusMetrics } from 'prom-client'

const httpRequestDuration = new Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status_code'],
  buckets: [0.1, 0.5, 1, 2, 5]
})

export function trackRequest(req, res, next) {
  const start = Date.now()
  
  res.on('finish', () => {
    const duration = (Date.now() - start) / 1000
    httpRequestDuration
      .labels(req.method, req.route?.path || req.url, res.statusCode)
      .observe(duration)
  })
  
  next()
}
\`\`\`

### Log Aggregation

\`\`\`javascript
// lib/logger.js
import winston from 'winston'

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'app.log' })
  ]
})

export function logError(error, context = {}) {
  logger.error('Application error', {
    error: error.message,
    stack: error.stack,
    ...context
  })
}
\`\`\`

## Security Automation

### Dependency Scanning

\`\`\`yaml
# .github/workflows/security.yml
name: Security Scan

on:
  schedule:
    - cron: '0 2 * * *'  # Daily at 2 AM
  push:
    branches: [ main ]

jobs:
  security:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Run Snyk to check for vulnerabilities
      uses: snyk/actions/node@master
      env:
        SNYK_TOKEN: \${{ secrets.SNYK_TOKEN }}
      with:
        args: --severity-threshold=high
\`\`\`

### Secret Management

\`\`\`bash
# Use tools like HashiCorp Vault or AWS Secrets Manager
# Never commit secrets to version control

# Example: Retrieving secrets in CI/CD
aws secretsmanager get-secret-value \
  --secret-id prod/myapp/database \
  --query SecretString --output text
\`\`\`

## Database Operations

### Automated Migrations

\`\`\`javascript
// scripts/migrate.js
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import { db } from './db'

async function runMigrations() {
  try {
    await migrate(db, { migrationsFolder: './migrations' })
    console.log('Migrations completed successfully')
  } catch (error) {
    console.error('Migration failed:', error)
    process.exit(1)
  }
}

runMigrations()
\`\`\`

### Backup Automation

\`\`\`bash
#!/bin/bash
# scripts/backup-db.sh

DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="backup_\${DATE}.sql"

pg_dump \$DATABASE_URL > \$BACKUP_FILE

# Upload to S3
aws s3 cp \$BACKUP_FILE s3://my-backups/database/

# Clean up local file
rm \$BACKUP_FILE

echo "Backup completed: \$BACKUP_FILE"
\`\`\`

## Performance Optimization

### Automated Performance Testing

\`\`\`javascript
// tests/performance.test.js
import { check } from 'k6'
import http from 'k6/http'

export let options = {
  stages: [
    { duration: '2m', target: 100 },
    { duration: '5m', target: 100 },
    { duration: '2m', target: 200 },
    { duration: '5m', target: 200 },
    { duration: '2m', target: 0 },
  ],
}

export default function () {
  let response = http.get('https://myapp.com/api/health')
  
  check(response, {
    'status is 200': (r) => r.status === 200,
    'response time < 500ms': (r) => r.timings.duration < 500,
  })
}
\`\`\`

### Caching Strategies

\`\`\`javascript
// lib/cache.js
import Redis from 'ioredis'

const redis = new Redis(process.env.REDIS_URL)

export async function getCachedData(key, fetchFunction, ttl = 3600) {
  try {
    const cached = await redis.get(key)
    if (cached) {
      return JSON.parse(cached)
    }
    
    const data = await fetchFunction()
    await redis.setex(key, ttl, JSON.stringify(data))
    
    return data
  } catch (error) {
    console.error('Cache error:', error)
    return await fetchFunction()
  }
}
\`\`\`

## Team Collaboration Tools

### Automated Code Reviews

\`\`\`yaml
# .github/workflows/code-review.yml
name: Automated Code Review

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  review:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Run CodeClimate
      uses: codeclimate/codeclimate-action@v1
      with:
        coverageCommand: npm run test:coverage
        debug: true
\`\`\`

### Documentation Generation

\`\`\`javascript
// scripts/generate-docs.js
import { generateApiDocs } from './api-doc-generator'
import { generateComponentDocs } from './component-doc-generator'

async function generateDocs() {
  await generateApiDocs('./src/api', './docs/api')
  await generateComponentDocs('./src/components', './docs/components')
  
  console.log('Documentation generated successfully')
}

generateDocs()
\`\`\`

## Scaling Automation

### Auto-scaling Configuration

\`\`\`yaml
# k8s/hpa.yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: myapp-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: myapp
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
\`\`\`

## Best Practices

### 1. Start Small

Begin with basic CI/CD and gradually add more automation:
- Automated testing
- Deployment automation
- Monitoring setup
- Security scanning

### 2. Measure Everything

Track metrics that matter:
- Deployment frequency
- Lead time for changes
- Mean time to recovery
- Change failure rate

### 3. Continuous Improvement

Regularly review and optimize your processes:
- Conduct post-mortems for incidents
- Gather feedback from team members
- Experiment with new tools and practices
- Document lessons learned

### 4. Security First

Integrate security throughout your pipeline:
- Scan dependencies for vulnerabilities
- Use secrets management tools
- Implement proper access controls
- Regular security audits

## Common Pitfalls to Avoid

1. **Over-automation**: Don't automate everything at once
2. **Ignoring feedback**: Monitor your automation and fix issues quickly
3. **Poor testing**: Ensure your automation is well-tested
4. **Lack of documentation**: Document your processes and tools
5. **Vendor lock-in**: Choose tools that allow flexibility

## Conclusion

Effective DevOps automation is about finding the right balance between speed, quality, and reliability. Start with the basics, measure your progress, and continuously improve your processes.

Remember that automation is a means to an end—the goal is to deliver value to your users faster and more reliably. Focus on automating the tasks that provide the most value and gradually expand your automation coverage.

The key to successful DevOps automation is to treat it as an ongoing journey, not a destination. Keep learning, experimenting, and adapting to new challenges and opportunities.
    `,
  },
]

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id)
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
