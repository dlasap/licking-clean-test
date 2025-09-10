# 🧼 Licking Clean – Mini Provider Profile  

A minimal provider profile app built for **Licking Clean**.  

**Stack:**  
- [Next.js](https://nextjs.org/) (App Router, TypeScript)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [shadcn/ui](https://ui.shadcn.com/)  
- [Supabase](https://supabase.com/) (auth + database)  
- [Appsmith](https://www.appsmith.com/) (admin dashboard)  

---

## 🚀 Getting Started  

### 1. Install dependencies  
```bash
npm install
```  

### 2. Configure environment variables  
Copy the example file and update with your Supabase credentials:  
```bash
cp env.example .env.local
```  

Inside `.env.local` set:  
```bash
NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
```  

### 3. Run the development server  
```bash
npm run dev
```  
Visit [http://localhost:3000](http://localhost:3000)  

---

## 🌐 Deployment (Vercel)  

1. Push the repo to GitHub.  
2. Import the project into [Vercel](https://vercel.com/).  
3. Add environment variables in the Vercel dashboard:  

   - `NEXT_PUBLIC_SUPABASE_URL`  
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`  

4. Deploy 🚀  

---

## 📊 Appsmith Admin Dashboard  

- A minimal Appsmith dashboard is included to manage providers.  
- Features:  
  - View `providers` table (name, bio)  
  - Edit provider bio → updates Supabase in real time  
- Connection type: **Postgres via Supabase connection pooler**  

---

## 🛠️ Notes  

- Code styled with Tailwind and shadcn/ui components.  
- Supabase AI + GitHub Copilot assisted scaffolding.  
- Deployment tested on Vercel free tier.  

---
