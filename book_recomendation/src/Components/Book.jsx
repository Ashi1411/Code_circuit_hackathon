import React, { useEffect, useState } from 'react'
import { book_details } from '../Data/Book_Details';

export default function Book() {
    const [bookList, setBookList] = useState([]);
    
      useEffect(() => {
        setBookList(book_details);
      }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[40px]">
        {bookList.map((book) => (
            <div
            key={book.id}
            className="relative bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
            >
            {/* Genre Badge */}
            <div
                className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs text-black font-bold capitalize`}
                style={{ backgroundColor: book.genre_color }}
            >
                {book.genre}
            </div>

            {/* Book Image */}
            <img
                src={book.book_cover_image}
                alt={book.book_name}
                className="w-full h-[400px] object-cover"
            />

            {/* Book Info */}
            <div className="p-4 space-y-2">
                <h2 className="text-lg font-semibold line-clamp-2">
                {book.book_name}
                </h2>
                <p className="text-sm text-gray-600">by {book.book_author}</p>
                <div className="flex justify-between text-sm text-gray-500">
                <span>{book.time_to_read}</span>
                <span className="italic">{book.cover_aesthetic}</span>
                </div>
            </div>
            </div>
        ))}
        </div>
  )
}
