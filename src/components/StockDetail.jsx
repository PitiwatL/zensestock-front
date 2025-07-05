// src/components/StockDetail.jsx
import React from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline'; // สำหรับปุ่มย้อนกลับ

const StockDetail = ({ stock, onBackToList }) => {
  if (!stock) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-gray-600 text-lg">ไม่พบข้อมูลหุ้น</p>
        <button
          onClick={onBackToList}
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" /> กลับไปยังรายการ
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto px-4 py-6 bg-white rounded-lg shadow-md">
        <button
          onClick={onBackToList}
          className="mb-6 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 flex items-center"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" /> กลับไปยังรายการ
        </button>

        <h1 className="text-4xl font-bold text-blue-800 mb-4">{stock.symbol}</h1>
        <h2 className="text-2xl text-gray-700 mb-6">{stock.name}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">ข้อมูลพื้นฐาน</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>คะแนน:</strong> <span className="font-bold text-blue-600 text-xl">{stock.score}</span></li>
              <li><strong>สาขาธุรกิจ:</strong> {stock.sector}</li>
              <li><strong>ประเภทธุรกิจ:</strong> {stock.type}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">เหตุผลน่าสนใจ</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {stock.reasons.map((reason, index) => (
                <li key={index}>{reason}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* ส่วนเพิ่มเติมอื่นๆ ที่คุณอาจจะเพิ่มในอนาคต */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">ข้อมูลเพิ่มเติม (ราคา, กราฟ, ข่าว)</h3>
          <p className="text-gray-600">
            หน้านี้จะสามารถเพิ่มข้อมูลราคาหุ้นแบบเรียลไทม์ กราฟหุ้น ข่าวสารที่เกี่ยวข้อง และข้อมูลทางการเงินเพิ่มเติมได้ในอนาคต
          </p>
        </div>
      </div>
    </div>
  );
};

export default StockDetail;