import React from 'react';
import "./style.css";
import Header from '../Component/Header';
import Elements from '../Component/Element';
import { Link } from 'react-router-dom';
import { Filter } from 'lucide-react';

export default function Main() {
  return (
    <div className="bg-blue-200 min-h-screen flex flex-col">
      <Header />

      <div className="flex justify-center my-4">
        <Link
          to="/filter"
          className="shadow-cyan-500/100 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out"
        >
          <Filter size={20} />
          Filter Elements
        </Link>
      </div>

      <Elements />
    </div>
  );
}
