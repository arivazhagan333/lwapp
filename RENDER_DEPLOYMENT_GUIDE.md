# Render Deployment Guide for Livewire Salem MERN App

This repository is pre-configured for **single-service full-stack deployment on Render** (Free tier supported).

---

## 📋 Step 1: Push Code to GitHub

Open PowerShell or Terminal in `e:\ari\livewire-mern`:

```bash
git init
git add .
git commit -m "Initial commit of Livewire Salem MERN app"
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/livewire-salem-mern.git
git push -u origin main
```

---

## 🚀 Step 2: Deploy on Render (Free)

1. Go to [https://dashboard.render.com/](https://dashboard.render.com/) and sign in with your GitHub account.
2. Click **"New +"** &rarr; select **"Web Service"**.
3. Select your repository: `livewire-salem-mern`.
4. Configure the settings:
   - **Name**: `livewire-salem-app` (or your preferred name)
   - **Region**: Singapore / Oregon / Frankfurt (Choose the closest to you)
   - **Branch**: `main`
   - **Runtime**: `Node`
   - **Build Command**: `npm run build`
   - **Start Command**: `npm run start`
   - **Instance Type**: `Free`

5. **Environment Variables**:
   Click **"Add Environment Variable"** and add:
   - `NODE_ENV` = `production`
   - `PORT` = `10000`
   - `MONGODB_URI` = *(Your MongoDB Atlas connection URI, e.g. `mongodb+srv://<user>:<password>@cluster.mongodb.net/livewire_salem?retryWrites=true&w=majority`)*
     *(Note: If you don't provide a MongoDB URI, the app will automatically run using its built-in resilient in-memory storage mode!)*

6. Click **"Deploy Web Service"**.

---

## ⚡ Alternative: Deploy with Blueprint (`render.yaml`)

Because this repository already contains a `render.yaml` file:
1. Go to [Render Dashboard](https://dashboard.render.com/).
2. Click **"New +"** &rarr; select **"Blueprint"**.
3. Select your `livewire-salem-mern` repository.
4. Render will automatically read `render.yaml` and configure everything in 1 click!

---

## 🌐 Your Live App

Once the deployment finishes (approx 2-3 minutes), Render will give you a public HTTPS URL:
`https://livewire-salem-app.onrender.com`

- **Home Page**: `https://livewire-salem-app.onrender.com/`
- **Certificate Portal**: `https://livewire-salem-app.onrender.com/download`
- **Admin Dashboard**: `https://livewire-salem-app.onrender.com/admin`
- **API Endpoints**: `https://livewire-salem-app.onrender.com/api/courses`
