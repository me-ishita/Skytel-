"use client";

import { BlogPost } from "@/lib/types";
import { useEffect } from "react";

export default function ArticleModal({
  blog,
  onClose,
}: {
  blog: BlogPost;
  onClose: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // JSON-LD Article Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.description,
    image: blog.photo_url,
    datePublished: blog.created_at,
    dateModified: blog.updated_at,
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white max-w-3xl w-full p-6 rounded overflow-y-auto max-h-[90vh]"
      >
        <button
          aria-label="Close"
          onClick={onClose}
          className="float-right text-xl"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: blog.content_html }} />
      </div>
    </div>
  );
}
