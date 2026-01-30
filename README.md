📝 Tech Insights Blog

A modern, SEO-optimized tech blog built with Next.js App Router, featuring search and category filtering, server-side data fetching, image optimization, and performance-focused best practices.

🔗 Live Demo:
👉 https://skytel-tech-blog.vercel.app/

🚀 Features

Server-side rendered blog listing

Search articles by title, description, or content

Filter articles by category

Responsive UI using Tailwind CSS

Optimized images using next/image

SEO-friendly structure with metadata and structured data (JSON-LD)

📊 Lighthouse Audit Results

Lighthouse audits were run on the deployed Vercel application.

Screenshots

All screenshots are stored inside the /screenshots directory.

Category	Screenshot
Performance	

Accessibility	

Best Practices	

SEO	

📌 Note: Screenshots were captured using Chrome DevTools → Lighthouse on the production build.

🔍 SEO Strategy

1️⃣ Meta Tags Implementation

The following meta tags were implemented to improve SEO and social sharing:

title – Clear, descriptive page titles

meta description – Improves click-through rate from search engines

Open Graph tags – Better preview when shared on social platforms

JSON-LD (Schema.org) – Website structured data for improved indexing

Example:

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Tech Insights Blog",
  "url": "https://skytel-tech-blog.vercel.app/"
}
</script>

2️⃣ Semantic HTML Structure

Semantic HTML elements were used throughout the application:

<header> for navigation

<main> for main content

<section> for grouped blog content

<article> for individual blog cards

<footer> for footer information

This improves:

Accessibility
SEO readability

Screen reader compatibility

3️⃣ Image Optimization Approach

Used next/image for automatic:

Lazy loading

Responsive image sizes

Optimized formats (WebP when supported)

External image domains configured in next.config.ts

Prevented layout shift using fixed image containers

4️⃣ Performance Optimizations

Server-side data fetching using App Router

No unnecessary client-side rendering

Image lazy loading

Tailwind CSS for minimal CSS footprint

Disabled caching where fresh API data was required

Removed unused dependencies

🔎 Search & Filter Implementation
Search Functionality

Users can search articles by:

Title

Description

Content

Case-insensitive matching

Displays the number of results found

Shows a “No results found” message when applicable

Category Filter

Categories are dynamically generated from API data

Supports filtering by:

Specific category

“All” category

Active category is visually highlighted

Works together with search functionality

🔌 API Integration

Blog data is fetched from:

https://api.slingacademy.com/v1/sample-data/blog-posts?offset=0&limit=10

API Response Types
interface BlogPost {
  id: number;
  user_id: number;
  title: string;
  description: string;
  content_text: string;
  content_html: string;
  photo_url: string;
  category: string;
  created_at: string;
  updated_at: string;
}

interface ApiResponse {
  success: boolean;
  total_blogs: number;
  message: string;
  offset: number;
  limit: number;
  blogs: BlogPost[];
}

⚠️ Challenges Faced

Next.js Image domain configuration for external images

Hydration mismatch warnings caused by inconsistent props

Handling SSR + client components correctly in App Router

Ensuring search and filter logic worked efficiently together

Maintaining performance while using dynamic content

All issues were resolved using Next.js best practices.

🛠️ Technologies Used

Next.js (App Router)

React

TypeScript

Tailwind CSS

Vercel (Deployment)

Lighthouse (Performance audits)

📂 Project Setup
npm install
npm run dev


Production build:

npm run build

npm start

📁 Screenshots Folder Structure/screenshots

 ├── performance.png
 ├── accessibility.png
 ├── best-practices.png
 └── seo.png
