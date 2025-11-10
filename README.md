# AI Receptionist + Smart Website Starter

Production-ready starter kit for building AI receptionist experiences and lead-capturing marketing sites for local businesses. Built with Next.js 14, Prisma, PostgreSQL, and Tailwind CSS.

## Project structure

```
.
├── app/
│   ├── api/
│   │   └── leads/route.ts          # Lead capture API endpoint
│   ├── dashboard/                  # Password-protected admin dashboard
│   │   ├── LoginForm.tsx
│   │   ├── LogoutButton.tsx
│   │   ├── actions.ts
│   │   └── page.tsx
│   ├── globals.css                 # Tailwind base styles
│   ├── layout.tsx                  # Root layout with navigation and footer
│   └── page.tsx                    # Marketing landing page
├── components/                     # Shared UI components
│   ├── Button.tsx
│   ├── Footer.tsx
│   ├── Input.tsx
│   ├── Navbar.tsx
│   ├── SectionHeading.tsx
│   └── Textarea.tsx
├── lib/
│   ├── prisma.ts                   # Prisma client helper
│   └── validation.ts               # Zod schemas and types
├── prisma/
│   └── schema.prisma               # Database models
├── sections/                       # Marketing page sections
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   └── Testimonials.tsx
├── public/                         # Static assets (favicons, OG images, etc.)
├── .env.example
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Environment variables

Copy `.env.example` to `.env.local` and update the values for your environment.

```
cp .env.example .env.local
```

- `DATABASE_URL`: PostgreSQL connection string.
- `NEXT_PUBLIC_DEMO_BUSINESS_ID`: Business ID used by the public marketing form.
- `DEFAULT_BUSINESS_ID`: Optional fallback business ID for API and dashboard queries.
- `NEXT_PUBLIC_DEMO_TIMEZONE`: Displayed in the marketing contact section.
- `DASHBOARD_PASSWORD`: Password required to access `/dashboard`.

## Getting started

### 1. Install dependencies

```
npm install
```

### 2. Generate Prisma client

```
npx prisma generate
```

### 3. Run database migrations

Update `prisma/schema.prisma` if needed, then create and apply a migration:

```
npx prisma migrate dev --name init
```

Seed your database with at least one `Business` record so the contact form can associate leads with a business. Example using Prisma Studio:

```
npx prisma studio
```

### 4. Start the development server

```
npm run dev
```

Visit `http://localhost:3000` for the marketing site and `http://localhost:3000/dashboard` for the admin dashboard (enter the password configured in `.env.local`).

### 5. Build for production

```
npm run build
```

Then run the optimized production server:

```
npm start
```

Ensure your production environment sets all required environment variables and runs `prisma migrate deploy` during deployment.
