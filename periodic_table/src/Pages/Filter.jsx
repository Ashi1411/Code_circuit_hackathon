import React, { useState } from 'react';
import { element_data } from '../Data/Element_data';

export default function Filter() {
  const [selectedCategory, setSelectedCategory] = useState('');

  // Get unique categories from the data
  const categories = [...new Set(element_data.map(el => el.category))];

  // Filter elements based on selected category
  const filteredElements = selectedCategory
    ? element_data.filter(el => el.category === selectedCategory)
    : [];

  return (
    <div className="p-8 bg-gradient-to-br from-blue-100 to-blue-300 min-h-screen">
      <h1 className="text-3xl font-bold font-serif text-center mb-6 text-gray-800">
        Filter Elements by Category
      </h1>

      <div className="flex justify-center mb-10">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-[300px] p-3 rounded-xl border-2 border-blue-700 bg-white text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">-- Select a Category --</option>
          {categories.map((cat, index) => (
            <option value={cat} key={index}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {filteredElements.length === 0 && selectedCategory !== '' && (
        <p className="text-center text-gray-600 text-lg font-medium">
          No elements found in this category.
        </p>
      )}

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-6 px-6">
        {filteredElements.map((el, i) => (
          <div
            key={i}
            className="rounded-2xl border-[2.5px] border-black text-black shadow-xl transition transform hover:scale-105 hover:shadow-2xl"
            style={{ backgroundColor: el.color }}
          >
            <div className="p-4 space-y-1">
              <p className="text-sm font-semibold">Atomic No: {el.atomicNumber}</p>
              <h2 className="text-3xl font-bold text-center">{el.symbol}</h2>
              <p className="text-md text-center">{el.name}</p>
              <p className="italic text-sm text-center">{el.category}</p>
              <p className="text-sm text-center">Atomic Mass: {el.atomicMass}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
