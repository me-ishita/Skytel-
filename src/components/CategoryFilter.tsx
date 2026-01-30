"use client";

interface Props {
  categories: string[];
  active: string;
  setActive: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  active,
  setActive,
}: Props) {
  return (
    <nav className="flex flex-wrap gap-2 mb-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActive(category)}
          className={`px-3 py-1 rounded-full text-sm border transition
            ${
              active === category
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          aria-pressed={active === category}
        >
          {category}
        </button>
      ))}
    </nav>
  );
}
