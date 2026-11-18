# Posts App -- A Next.js app for React and TypeScript related blog posts.

## Features

- Frontend built with Turbopack, TypeScript, TailwindCSS and Next.js RSCs. Next.js App Router is used for deciding routes and navigation.
- Backend API created using "@libsql/client" module.
- Database created via script in createDatabase.mjs. The database is based on "@libsql/client" module.

# Quick start

## Prerequisites

- Node.js v24.12.0

## Installations

1. Clone repository

`git clone https://github.com/Martin80451/martinnextapp.git`

2. Install dependencies

`npm install`

3. Setup environment

Create the .env file and add the DB_URL variable with the value of the database path.

Start the development server using Turbopack.

```bash
npm run dev
```

Other helpful commands:

For building the application for production.

```bash
npm run build
```

For running the ESLint scan.

```bash
npm run lint
```

For starting the production server.

```bash
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
