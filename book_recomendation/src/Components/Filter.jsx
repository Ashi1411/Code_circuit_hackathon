import React from "react";

export default function Filter({
  bookList,
  selectedGenre,
  setSelectedGenre,
  selectedMood,
  setSelectedMood,
}) {
  const genres = [...new Set(bookList.map((book) => book.genre))];
  const moods = [...new Set(bookList.flatMap((book) => book.mood_filters))];

  return (
    <div
      className="flex flex-wrap gap-4 items-center"
      data-aos="fade-right"
      data-aos-duration="700"
    >
      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <option value="">All Genres</option>
        {genres.map((genre, idx) => (
          <option key={idx} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <select
        value={selectedMood}
        onChange={(e) => setSelectedMood(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <option value="">All Moods</option>
        {moods.map((mood, idx) => (
          <option key={idx} value={mood}>
            {mood}
          </option>
        ))}
      </select>

      {(selectedGenre || selectedMood) && (
        <button
          onClick={() => {
            setSelectedGenre("");
            setSelectedMood("");
          }}
          className="px-4 py-2 bg-red-100 text-red-600 rounded-lg border border-red-300 hover:bg-red-200"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          Clear Filters
        </button>
      )}
    </div>
  );
}
