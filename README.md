# 🎓 MediQueue - Tutor Booking & Learning Platform

🔗 Live Demo: https://mediqueue-next.vercel.app/

MediQueue is a modern **tutor booking platform** where students can find tutors based on their needs, and book available time slots instantly. Also have Tutor Add system.

---

## 🚀 Key Features

### 👨‍🎓 For Students
- 🔍 Search and find tutors easily
- 📅 View tutor availability and slots
- 📌 Book tutors based on preferred time
- 📖 Manage booked sessions

### 👨‍🏫 For Tutors
- ➕ Add themselves as tutors
- 🕒 Set available slots
- 📊 Manage bookings
- 👤 Maintain profile and teaching details

---

## 🔐 Authentication

- Secure authentication system powered by **Better Auth**
- Login / Register functionality
- Protected routes for students and tutors
- Session-based access control

---

## 🎨 UI / UX

- ⚡ Built with **Next.js App Router**
- 🎨 Styled using **HeroUI + DaisyUI**
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🧩 Reusable component-based architecture

---

## 🛠️ Tech Stack

- **Frontend:** Next.js (React)
- **Styling:** Tailwind CSS + DaisyUI + HeroUI
- **Authentication:** Better Auth
- **Backend:** Next.js Server Actions / API Routes
- **Database:** MongoDB (or your DB)
- **Deployment:** Vercel

---

## 🧠 Core Concept

The platform solves a real-world problem:

> Students often struggle to find reliable tutors and manage schedules efficiently.

MeiQueue provides:
- A centralized tutor marketplace
- Real-time slot-based booking system
- Simple and fast tutor discovery

---
## ⚙️ Getting Started & Installation

Follow these instructions to set up and run MediQueue locally on your machine.

### 📋 Prerequisites

Before starting, ensure you have the following installed on your system:
- **Node.js:** `v18.17.0` or higher
- **Package Manager:** `npm`, `yarn`, or `pnpm`
- **Database:** Local **MongoDB** instance or a cloud **MongoDB Atlas** database.

---

### 📥 Step-by-Step Installation

<Sequence>
  <Step title="Clone the Repository" subtitle="Terminal command">
    Clone the project repository to your local system and navigate to the project root:
    ```bash
    git clone https://github.com/fardinfaruk-bd/MediQueue-Next.git
    cd mediqueue
    ```
  </Step>

  <Step title="Install Dependencies" subtitle="Package management">
    Install all required dependencies using your preferred package manager:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```
  </Step>

  <Step title="Configure Environment Variables" subtitle="Root configuration">
    Create a `.env.local` file in the root directory of the project:
    ```bash
    touch .env.local
    ```

    Add the required environment variables:

    ```env
    # App Configuration
    NEXT_PUBLIC_APP_URL=http://localhost:3000

    # Database
    MONGODB_URI=your_mongodb_connection_string

    # Authentication (Better Auth)
    BETTER_AUTH_SECRET=your_better_auth_secret_key
    BETTER_AUTH_URL=http://localhost:3000
    ```
  </Step>

  <Step title="Run the Development Server" subtitle="Launch application">
    Start the Next.js local development server:
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.
  </Step>
</Sequence>

---

### 🧪 Project Scripts

| Command | Action |
| --- | --- |
| `npm run dev` | Launches the local development server |
| `npm run build` | Builds the production application bundle |
| `npm run start` | Runs the compiled production build locally |
| `npm run lint` | Runs ESLint to check for code issues |

---

## 👨‍💻 Author

Developed by **Md Fardin Faruk**

---

## ⭐ Support

If you like this project, don’t forget to give it a ⭐ on GitHub!
