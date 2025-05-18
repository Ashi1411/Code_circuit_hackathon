import React from 'react';
import { element_data } from '../Data/Element_data';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // Import default Tippy styles
import '../Pages/style.css'

export default function Elements() {
  const allElements = element_data.map((v, i) => {
    const tooltipContent = (
      <div className="text-sm leading-tight text-white">
        <p><strong>Name:</strong> {v.name}</p>
        <p><strong>Symbol:</strong> {v.symbol}</p>
        <p><strong>Atomic No:</strong> {v.atomicNumber}</p>
        <p><strong>Atomic Mass:</strong> {v.atomicMass}</p>
        <p><strong>Category:</strong> {v.category}</p>
      </div>
    );

    return (
      <Tippy
        content={tooltipContent}
        key={i}
        animation="shift-away"
        delay={[100, 0]}
        theme="light-border"
      >
        <div
          style={{
            backgroundColor: v.color,
            gridColumnStart: v.col,
            gridRowStart: v.row,
          }}
          className="p-3 rounded-xl shadow-md border-2 border-black text-black text-center cursor-pointer transition-transform duration-200 hover:scale-105"
        >
          <p className="text-[10px] font-semibold">{v.atomicNumber}</p>
          <h1 className="text-[22px] font-bold">{v.symbol}</h1>
        </div>
      </Tippy>
    );
  });

  return (
    <div className="m-10 grid grid-cols-[repeat(18,_minmax(0,_1fr))] grid-rows-[repeat(10,_minmax(0,_1fr))] gap-2">
      {allElements}
    </div>
  );
}
