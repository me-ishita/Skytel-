"use client";

import { BlogPost } from "@/lib/types";
import { useState, useMemo } from "react";
import ArticleCard from "./ArticleCard";
import ArticleModal from "./ArticleModal";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";

export default function ArticleGrid({ blogs }: { blogs: BlogPost[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [activeBlog, setActiveBlog] = useState<BlogPost | null>(null);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(blogs.map((b) => b.category)))],
    [blogs]
  );

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const text = `${blog.title} ${blog.description} ${blog.content_text}`.toLowerCase();

      const matchesSearch = text.includes(search.toLowerCase());
      const matchesCategory =
        category === "All" || blog.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [blogs, search, category]);

  return (
    <section>
      {/* Search */}
      <SearchBar search={search} setSearch={setSearch} />

      {/* Category Filter */}
      <CategoryFilter
        categories={categories}
        active={category}
        setActive={setCategory}
      />

      {/* Result Count */}
      <p className="text-sm text-gray-600 mb-4">
        {filteredBlogs.length} result(s) found
      </p>

      {/* No Results */}
      {filteredBlogs.length === 0 && (
        <p className="text-gray-500">No results found.</p>
      )}

      {/* Articles Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredBlogs.map((blog) => (
          <ArticleCard
            key={blog.id}
            blog={blog}
            onClick={() => setActiveBlog(blog)}
          />
        ))}
      </div>

      {/* Modal */}
      {activeBlog && (
        <ArticleModal
          blog={activeBlog}
          onClose={() => setActiveBlog(null)}
        />
      )}
    </section>
  );
}
