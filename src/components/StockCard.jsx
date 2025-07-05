// src/components/StockCard.jsx
import React from 'react';

// StockCard component รับ stock object และ onCardClick function เป็น props
const StockCard = ({ stock, onCardClick }) => {
  return (
    // ทำให้ทั้ง card สามารถคลิกได้
    <div
      onClick={() => onCardClick(stock)} // <-- เพิ่ม onClick และส่ง stock object กลับไป
      className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer border border-gray-200 flex"
    >
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-blue-700">{stock.symbol}</h3>
        <p className="text-gray-500 text-sm mb-2">{stock.name}</p>
        <div className="text-gray-700 text-sm">
          <h4 className="font-medium">เหตุผลน่าสนใจ:</h4>
          <ul className="list-disc list-inside ml-2">
            {stock.reasons.slice(0, 3).map((reason, index) => (
              <li key={index}>{reason}</li>
            ))}
          </ul>
          {stock.reasons.length > 3 && (
            <p className="text-blue-500 text-xs mt-1">... ดูเพิ่มเติม</p>
          )}
        </div>
      </div>
      <div className="flex-shrink-0 ml-4 text-right">
        <p className="text-lg font-bold text-blue-600">{stock.score}</p>
        <p className="text-gray-500 text-sm">คะแนน</p>
      </div>
    </div>
  );
};

export default StockCard;