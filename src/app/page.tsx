import { getBlogs } from "@/lib/api";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ArticleGrid from "@/components/ArticleGrid";

export default async function HomePage() {
  const blogs = await getBlogs();

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Tech Insights Blog",
    url: "https://your-vercel-url.vercel.app",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Header />
      <main className="max-w-7xl mx-auto px-4">
        <Hero />
        <ArticleGrid blogs={blogs} />
      </main>
      <Footer />
    </>
  );
}
