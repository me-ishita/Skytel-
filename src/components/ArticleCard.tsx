import Image from "next/image";
import { BlogPost } from "@/lib/types";

export default function ArticleCard({
  blog,
  onClick,
}: {
  blog: BlogPost;
  onClick: () => void;
}) {
  const imageUrl = `https://picsum.photos/seed/${blog.id}/600/400`;

  return (
    <article
      tabIndex={0}
      onClick={onClick}
      className="cursor-pointer rounded-xl overflow-hidden border hover:shadow-lg transition"
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={`Cover image for article titled ${blog.title}`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">
          {blog.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-3">
          {blog.description}
        </p>
      </div>
    </article>
  );
}
