"use client";

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

export default function SearchBar({ search, setSearch }: Props) {
  return (
    <div className="mb-6">
      <label htmlFor="search" className="sr-only">
        Search articles
      </label>

      <input
        id="search"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by title, description, or content..."
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
      />
    </div>
  );
}
