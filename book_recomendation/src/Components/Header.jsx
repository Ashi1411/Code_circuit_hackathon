import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-blue-600 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-900 tracking-tight">
          📚 BookHaven
        </div>

        <nav className="flex gap-[60px]">
        <Link to="/" className="text-blue-900 font-bold text-[25px] hover:no-underline">Home</Link>
        <Link to="/favourites" className="text-pink-500 font-bold text-[25px] hover:no-underline">❤️ Favourites</Link>
      </nav>

      </div>
    </header>
  );
}
