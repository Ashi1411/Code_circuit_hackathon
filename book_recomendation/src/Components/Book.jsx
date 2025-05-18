import React, { useEffect, useState } from 'react';
import { book_details } from '../Data/Book_Details';
import Filter from './Filter';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Pages/style.css';

export default function Book() {
  const [bookList, setBookList] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedMood, setSelectedMood] = useState('');
  const [favorites, setFavorites] = useState(() => {
    const storedFavs = localStorage.getItem('favourites');
    return storedFavs ? JSON.parse(storedFavs) : [];
  });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    setBookList(book_details);
  }, []);

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (bookId) => {
    setFavorites((prev) =>
      prev.includes(bookId)
        ? prev.filter((id) => id !== bookId)
        : [...prev, bookId]
    );
  };

  const filteredBooks = bookList.filter((book) => {
    const matchGenre = selectedGenre ? book.genre === selectedGenre : true;
    const matchMood = selectedMood
      ? book.mood_filters.includes(selectedMood)
      : true;
    return matchGenre && matchMood;
  });

  return (
    <div className="p-6">
      <Filter
        bookList={bookList}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        selectedMood={selectedMood}
        setSelectedMood={setSelectedMood}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[40px] mt-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div
              key={book.id}
              data-aos="fade-up"
              className="book-card relative bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div
                className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs text-black font-bold capitalize"
                style={{ backgroundColor: book.genre_color }}
              >
                {book.genre}
              </div>

              <button
                onClick={() => toggleFavorite(book.id)}
                className="absolute top-3 right-3 text-[50px]"
                title="Toggle Favorite"
              >
                {favorites.includes(book.id) ? '🥰' : '😐'}
              </button>

              <img
                src={book.book_cover_image}
                alt={book.book_name}
                className="w-full h-[400px] object-cover"
              />

              <div className="p-4 space-y-2">
                <h2 className="text-lg line-clamp-2 font-bold">{book.book_name}</h2>
                <p className="text-sm text-gray-900 font-bold">by {book.book_author}</p>
                <div className="flex justify-between text-sm text-gray-900 font-semibold">
                  <span>{book.time_to_read}</span>
                  <span className="italic">{book.cover_aesthetic}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-blue-900 text-[30px] font-bold mt-10">
            No books match the selected filters.
          </p>
        )}
      </div>
    </div>
  );
}
