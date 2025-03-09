# Rentiful

## Description
Rentiful is a robust property rental management application designed to streamline the rental process for both tenants and property managers. Built with a modern stack, it integrates advanced mapping, real-time state management, seamless forms, and secure authentication to enhance user experience and operational efficiency.

## Features

### Frontend
- **Next.js Framework:** Server-side rendering and static website generation for optimal performance.
- **Mapbox Integration:** Interactive maps for visual property exploration and location-based functionalities.
- **Shadcn UI:** Sleek, responsive, and customizable UI components.
- **Sonner Notifications:** Lightweight toast notifications to enhance user engagement.
- **React Hook Form & Zod:** Robust form validation and efficient form management.
- **Redux Toolkit & RTK Query:** State management with efficient data fetching and caching.
- **React Hook Form:** Streamlined form handling with validation.
- **Zod Validation:** Ensures data integrity and robust schema definitions.

### Backend
- **Node.js & Express:** Robust backend server with efficient routing.
- **Prisma ORM:** Simplified database interactions and migrations.
- **PostgreSQL & PostGIS:** Relational database enhanced with powerful spatial queries.
- **AWS Services:** Deployed using AWS EC2 for scalable infrastructure.
- **AWS Cognito:** Secure user authentication and management.
- **AWS CLI & Billing Management:** Efficient AWS service management and monitoring.
- **Nominatim:** Geocoding services for accurate address handling.

## Project Structure

### Frontend Structure
```
prish20-rentiful/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── app/
│   │   │   ├── (auth)/
│   │   │   └── authProvider.tsx
│   │   │   ├── (dashboard)/
│   │   │   └── (nondashboard)/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── state/
│   │   └── types/
│   ├── next.config.ts
│   ├── tailwind.config.ts
│   └── tsconfig.json
```

### Backend Structure
```
prish20-rentiful/
└── server/
    ├── aws-ec2-instructions.md
    ├── ecosystem.config.js
    ├── package-lock.json
    ├── package.json
    ├── tsconfig.json
    ├── prisma/
    │   ├── schema.prisma
    │   ├── seed.ts
    │   ├── migrations/
    │   │   ├── migration_lock.toml
    │   │   └── 20250303072730_init/
    │   │       └── migration.sql
    │   └── seedData/
    │       ├── application.json
    │       ├── lease.json
    │       ├── location.json
    │       ├── manager.json
    │       ├── payment.json
    │       ├── property.json
    │       └── tenant.json
    └── src/
        ├── index.ts
        ├── controllers/
        │   ├── application.controllers.ts
        │   ├── lease.controllers.ts
        │   ├── manager.controllers.ts
        │   ├── property.controllers.ts
        │   └── tenant.controllers.ts
        ├── middleware/
        │   └── authMiddleware.ts
        └── routes/
            ├── application.Routes.ts
            ├── lease.Routes.ts
            ├── manager.Routes.ts
            ├── property.Routes.ts
            └── tenant.Routes.ts
```

## Getting Started

### Frontend Setup
Navigate to the `client` directory:
```bash
cd client
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

### Backend Setup
Navigate to the `server` directory:

```bash
npm install
npm run dev
```

Configure your environment variables and database connections before running migrations:
```bash
npx prisma migrate dev
```

Seed your database:
```bash
npx prisma db seed
```

### AWS Setup
- Install [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html).
- Configure AWS Cognito for authentication following these [AWS Cognito Docs](https://docs.amplify.aws/react/build-a-backend/auth/set-up-auth).

### Deployment
Deploy the frontend using [AWS Amplify](https://aws.amazon.com/amplify/) for easy continuous integration and deployment. Host the backend on AWS EC2 following instructions provided in `aws-ec2-instructions.md`.

## Tech Stack

- **Frontend:** Next.js, Mapbox, React Hook Form, Shadcn UI, Zod, Redux Toolkit
- **Backend:** Node.js, Express, Prisma, PostgreSQL, PostGIS
- **Cloud Services:** AWS EC2, AWS Cognito
- **Database:** PostgreSQL with PostGIS extension

## Contributions
Feel free to contribute by opening a pull request or an issue for improvements and suggestions.

## License
This project is licensed under the MIT License.
