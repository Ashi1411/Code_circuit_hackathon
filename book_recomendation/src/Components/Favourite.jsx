import React, { useEffect, useState } from 'react';
import { book_details } from '../Data/Book_Details';

export default function Favourite() {
  const [favouriteBooks, setFavouriteBooks] = useState([]);

  useEffect(() => {
    const favIds = JSON.parse(localStorage.getItem('favourites')) || [];
    const favBooks = book_details.filter((book) => favIds.includes(book.id));
    setFavouriteBooks(favBooks);
  }, []);

  return (
    <div className="p-6">
      <h1
        className="text-3xl font-bold text-center text-pink-700 mb-8"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        ❤️ Your Favourite Books
      </h1>

      {favouriteBooks.length === 0 ? (
        <p
          className="text-center text-gray-900 text-[30px] font-semibold mt-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          You haven't added any books to your favourites yet!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[40px]">
          {favouriteBooks.map((book, index) => (
            <div
              key={book.id}
              className="book-card relative bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div
                className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs text-black font-bold capitalize"
                style={{ backgroundColor: book.genre_color }}
              >
                {book.genre}
              </div>

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
          ))}
        </div>
      )}
    </div>
  );
}
