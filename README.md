# Envy Portfolio

A modern, highly-interactive portfolio website built with React, Vite, Framer Motion, and Tailwind CSS. 

## Features
- **Frontend:** React, TypeScript, Tailwind CSS, Framer Motion
- **Backend (Serverless):** Vercel API Routes (`api/contact.js`)
- **Email Delivery:** Resend SDK

## Getting Started Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Environment Variables:**
   To make the contact form work locally, you must provide a Resend API key. 
   - Duplicate the `.env.example` file and rename it to `.env`.
   - Add your API key:
     ```env
     RESEND_API_KEY=re_your_actual_key_here
     ```
   *(Note: The `.env` file is completely ignored by Git to ensure your API keys remain secure and are never exposed publicly).*

3. **Run the development server:**
   ```bash
   npm run dev
   ```

## Security & Architecture

### Contact Form & Resend API
This project is deliberately structured to keep your secret API keys safe:
- The Resend SDK is **never** used in the React frontend (`src/`). If it were, anyone could inspect your website and steal your API key.
- Instead, the frontend uses `fetch()` to send a secure request to `/api/contact`.
- The `/api/contact.js` file is a **Vercel Serverless Function**. It runs securely on Vercel's backend servers where your `RESEND_API_KEY` is completely hidden from the public.

## Vercel Deployment Instructions

When deploying this project to Vercel, you must configure your environment variables in the Vercel Dashboard so the production server can send emails.

1. Go to your project on the Vercel Dashboard.
2. Navigate to **Settings > Environment Variables**.
3. Create a new variable:
   - **Key:** `RESEND_API_KEY`
   - **Value:** *[paste your actual Resend API key]*
4. Click **Save** and trigger a redeployment if necessary.
