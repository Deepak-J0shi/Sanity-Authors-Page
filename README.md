# Sanity Authors Page

A **Headless CMS Content Studio** for managing blog posts, author pages, poems, and related metadata using **Sanity.io** and deploying the content for your frontend website.

Live Demo: [https://sanity-for-blogs-and-poems.vercel.app](https://sanity-for-blogs-and-poems.vercel.app) ([GitHub][1])


<img width="705" height="594" alt="image" src="https://github.com/user-attachments/assets/7c7fbd8e-58b6-4972-b14f-8eb17e2ac1dd" />

---

## About This Project

**Sanity Authors Page** is a content management studio built with **Sanity.io** that provides a clean and intuitive interface to:

* Create and manage **author profiles**
* Publish **blog posts**
* Add **poems, stories, and other creative content**
* Customize metadata (titles, slugs, categories, tags)
* Structure your content so frontend apps can query it easily

It is ideal for **blogging platforms, personal portfolios, poetry sites, or publishing workflows** where structured content and author data matter.

---

## Why Sanity?

Sanity is a **powerful headless CMS** that allows you to:

* Define **custom content schemas**
* Collaborate with multiple editors
* Query content via GROQ
* Integrate with static sites like Next.js, Gatsby, or Hugo
* Use real-time content previews in your frontend

Sanity turns content into **structured, reusable data** developers can fetch and render efficiently. ([GitHub][2])

---

## Tech Stack

| Component          | Technology                 |
| ------------------ | -------------------------- |
| CMS System         | Sanity.io                  |
| Frontend Hosting   | Vercel                     |
| Schema Definitions | JavaScript                 |
| Styling            | (If any) TailwindCSS / CSS |
| Version Control    | GitHub                     |

*(Modify this table if your stack includes more tools like Next.js.)*

---

## Project Structure

```
Sanity-Authors-Page/
├─ schemaTypes/            # Content models (Author, Post, Poem, Category)
├─ static/                 # Static assets & media placeholders
├─ sanity.config.js        # Sanity configuration
├─ .gitignore
├─ package.json            # Dependencies & scripts
├─ eslint.config.mjs       # Lint config
├─ README.md
```

---

## 🛠 Setup & Local Development

### 1. Clone the Repository

```bash
git clone https://github.com/Deepak-J0shi/Sanity-Authors-Page.git
cd Sanity-Authors-Page
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Sanity

Make sure you have a `.env` with your Sanity project ID & dataset:

```
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
```

### 4. Run Sanity Studio Locally

```bash
npm run dev
```

Visit [http://localhost:3333](http://localhost:3333) (default) to access your CMS.

---

## How It Works

Sanity Content Studio uses **schema files** under `schemaTypes/` to define:

### Post Content

Each blog post can include:

* Title, slug, excerpt
* Body content blocks
* Featured author
* Publication date
* Tags & categories

### Author Profiles

Authors have:

* Name
* Bio
* Profile picture
* Social handles

### Poems & Creative Text

Content types for poems/stories let you manage structured creative writing with meta fields.

---

## Deployment

The Sanity Studio can be deployed on **Vercel**, **Netlify**, or any static hosting that supports Node apps.
If frontends consume this content (e.g., Next.js), connect via GROQ or Sanity APIs.

Live version: [https://sanity-for-blogs-and-poems.vercel.app](https://sanity-for-blogs-and-poems.vercel.app) ([GitHub][1])

---

## How to Use (Editor Flow)

1. Log in to Sanity Studio.
2. Navigate to **Authors** → Add author details.
3. Go to **Posts** → Create blog posts with linked authors.
4. Add creative writing under **Poems**.
5. Publish content for your frontend app to query.

