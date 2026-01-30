export interface BlogPost {
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

export interface ApiResponse {
  success: boolean;
  total_blogs: number;
  message: string;
  offset: number;
  limit: number;
  blogs: BlogPost[];
}

export async function fetchBlogs(): Promise<BlogPost[]> {
  const res = await fetch(
    "https://api.slingacademy.com/v1/sample-data/blog-posts?offset=0&limit=10",
    { cache: "no-store" }
  );

  const data: ApiResponse = await res.json();
  return data.blogs;
}
