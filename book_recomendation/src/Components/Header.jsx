import React from 'react'

export default function Header() {
  return (
    <header className="bg-blue-600 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800 tracking-tight">
          📚 BookHaven
        </div>

        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search books..."
            className="px-4 py-1.5 rounded-full border border-gray-500 focus:outline-none focus:ring-1 focus:ring-blue"
          />
        </div>

        {/* <div className="md:hidden">
          <button className="text-gray-600 hover:text-gray-900">
            ☰
          </button>
        </div> */}
      </div>
    </header>
  );
}
