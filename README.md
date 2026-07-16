<div align="center">
  <br />
  <h1>Envy.</h1>
  <p>
    <strong>A Premium, High-Performance Portfolio for AI Engineering & UI/UX Design</strong>
  </p>
  <p>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
    <img src="https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
  </p>
</div>

<br />

## 🚀 Overview

This repository contains the source code for my personal portfolio. Designed to bridge the gap between aesthetic excellence and technical precision, the site showcases my expertise in **Agentic AI Workflows**, **Frontend Development**, and **UI/UX Design**. 

Built with modern web technologies, it features buttery-smooth scroll experiences (via Lenis), fluid page transitions (via Framer Motion), and a secure, serverless contact form backend.

## ✨ Key Features

- **Immersive Design System:** Pure black aesthetic with `mix-blend-mode` effects, stark typography, and micro-interactions.
- **Smooth Navigation:** Global Lenis smooth-scrolling combined with Framer Motion `<AnimatePresence>` page transitions.
- **Responsive Architecture:** Fully optimized for mobile, tablet, and desktop viewing.
- **Secure Backend Integration:** 
  - Serverless contact form powered by **Vercel API Routes** and the **Resend SDK**.
  - Built-in Honeypot to deflect bot submissions.
  - In-memory rate limiting and keyword spam filtering.

## 🛠️ Tech Stack

- **Framework:** React 18 + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Vanilla utilities)
- **Animation:** Framer Motion & Lenis Scroll
- **Icons:** Lucide React
- **Routing:** React Router v6
- **Backend / Email:** Vercel Serverless Functions (`api/`) & Resend

---

## 💻 Getting Started Locally

To run this project on your local machine:

1. **Clone and Install:**
   ```bash
   git clone https://github.com/Krish-Envy28/Envy-portfolio-v1.git
   cd Envy-portfolio-v1
   npm install
   ```

2. **Environment Setup:**
   To test the contact form locally, you need a Resend API key.
   - Rename `.env.example` to `.env`.
   - Add your API key:
     ```env
     RESEND_API_KEY=re_your_actual_key_here
     ```

3. **Run the Development Server:**
   ```bash
   npm run dev
   ```

## 🔒 Security Architecture

The contact form is designed with strict security measures to ensure the `RESEND_API_KEY` is never exposed to the public frontend.
- The React application (`src/`) uses `fetch()` to send payloads to the `/api/contact` endpoint.
- The backend (`api/contact.js`) executes in a secure Vercel Node.js environment, validating rate limits and spam filters before interfacing with Resend.

## 🌍 Deployment

This project is optimized for deployment on **Vercel**. 
1. Import the repository into your Vercel dashboard.
2. Navigate to **Settings > Environment Variables** and add your `RESEND_API_KEY`.
3. Deploy!

---

<div align="center">
  <p>Designed & Engineered by <strong>Envy</strong>.</p>
</div>
