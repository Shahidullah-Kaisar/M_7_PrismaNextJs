# Next Blog Starter

A simple **Blog Application Starter Pack** built with **TypeScript and Express.js**.  
This project is designed to help learners practice Prisma hands-on by building a blog platform.

---

## Features
- TypeScript + Express.js setup
- Modular project structure
- Environment configuration with `dotenv`
- Ready to extend with blog modules (Posts, Users, etc.)

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Apollo-Level2-Web-Dev/next-blog-starter.git
cd next-blog-starter
```

Install dependencies:

```bash
# using npm
npm install

# using yarn
yarn install

# using pnpm
pnpm install
```

Setup environment variables:

```bash
cp .env.example .env
```

Run the development server:

```bash
# using npm
npm run dev

# using yarn
yarn dev

# using pnpm
pnpm dev
```

---

## Folder Structure

```
Prisma-Blog/
│── node_modules/          # Dependencies
│── src/
│   ├── app.ts             # Express app configuration
│   ├── server.ts          # Server entry point
│   ├── config/            # Environment & configuration files
│   └── modules/           # Application modules (posts, users, etc.)
│── package.json           # Project metadata & scripts
│── pnpm-lock.yaml         # Lockfile (pnpm)
│── tsconfig.json          # TypeScript configuration
│── README.md              # Documentation
```

---

## Scripts

```bash
# Run in development mode
pnpm dev

# Build for production
pnpm build

# Run production build
pnpm start
```

---

## Learning Objectives

This starter pack is part of the **Next Level Web Development Bootcamp** curriculum.  
By using this project, students will learn how to:

* Connect a Node.js app with Prisma ORM
* Build modular APIs
* Manage environment variables
* Structure scalable backend projects

---

## Date Example: `lastWeek`

This project includes a simple **JavaScript Date example** to calculate the date 7 days ago:

```ts
const lastWeek = new Date();
lastWeek.setDate(lastWeek.getDate() - 7);
```

### Step-by-Step Explanation

#### 1. Create a new Date object
```ts
const lastWeek = new Date();
```
- `new Date()` creates a Date object with the **current date and time**.  
- Example:
```ts
const today = new Date();
console.log(today); // 2025-10-06T03:45:00.000Z
```

#### 2. Get the current day of the month
```ts
lastWeek.getDate();
```
- `getDate()` returns the **day of the month** for the Date object.  
- Example: If today is 6th October → `lastWeek.getDate() = 6`

#### 3. Set the date to 7 days ago
```ts
lastWeek.setDate(lastWeek.getDate() - 7);
```
- `setDate()` updates the day of the month for the Date object.  
- `getDate() - 7` subtracts 7 days from today.  
- JavaScript automatically **adjusts the month and year** if needed.  

Example:  
- Today = 6 October  
- 7 days ago = 6 - 7 = -1 → Automatically becomes 29 September  

✅ This technique is useful for filtering database records, generating reports, or calculating past dates dynamically.
