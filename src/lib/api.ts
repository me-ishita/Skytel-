import { ApiResponse } from "./types";

export async function getBlogs() {
  const res = await fetch(
    "https://api.slingacademy.com/v1/sample-data/blog-posts?offset=0&limit=10",
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const data: ApiResponse = await res.json();
  return data.blogs;
}
