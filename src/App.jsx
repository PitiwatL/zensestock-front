// src/App.jsx
import React, { useState } from "react"; // นำเข้า useState
import { Header } from './components/Header';
import StockCard from './components/StockCard';
import { recommendedStocks } from './data/recommendedStocks';
import Login from './components/Login'; // นำเข้า Login component
import StockDetail from './components/StockDetail';

import './App.css';
import './index.css';


export default function App() {
  // สร้าง state เพื่อควบคุมการแสดงผลหน้า Login
  // ค่าเริ่มต้นเป็น false คือยังไม่แสดงหน้า Login (แสดงหน้าหลัก)
  const [showLogin, setShowLogin] = useState(false);

  const [selectedStock, setSelectedStock] = useState(null);
  // ฟังก์ชันที่จะถูกเรียกเมื่อกดปุ่ม "SET Member"
  const handleShowLogin = () => {
    setShowLogin(true);
  };
   // ฟังก์ชันนี้จะถูกเรียกเมื่อ StockCard ถูกคลิก
   const handleStockCardClick = (stock) => {
    setSelectedStock(stock); // ตั้งค่าหุ้นที่ถูกเลือก
  };

  // ฟังก์ชันนี้จะถูกเรียกเมื่อกดปุ่มย้อนกลับใน StockDetail
  const handleBackToStockList = () => {
    setSelectedStock(null); // ล้างหุ้นที่ถูกเลือกเพื่อกลับไปหน้า StockCard
  };

  // ฟังก์ชันที่จะถูกเรียกเมื่อ Login สำเร็จ (อันนี้อาจจะเพิ่มทีหลัง)
  // const handleLoginSuccess = () => {
  //   setShowLogin(false); // ซ่อนหน้า Login และกลับไปหน้าหลัก
  //   // อาจจะมีการเก็บสถานะผู้ใช้ เช่น token
  // };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {showLogin ? ( // ตรรกะสำหรับ Login page
        <Login />
      ) : selectedStock ? ( // ตรรกะสำหรับ Stock Detail page (ถ้ามีหุ้นถูกเลือก)
        <StockDetail stock={selectedStock} onBackToList={handleBackToStockList} />
      ) : ( // ตรรกะสำหรับหน้าหลัก (Header + Stock Cards)
        <>
          {/* ส่ง prop 'onSetMemberClick' ไปให้ Header */}
          <Header onSetMemberClick={handleShowLogin} />

          {/* ส่วนเนื้อหาหลักของแอปพลิเคชัน: หุ้นแนะนำ */}
          <main className="bg-white shadow py-8 mb-8 rounded-lg">
            <div className="container mx-auto px-4">
              <h2 className="text-xl font-semibold mb-4 text-blue-800">หุ้นแนะนำน่าลงทุน</h2>

              <div className="bg-white p-4 rounded-lg shadow-inner border border-gray-200">
                <div className="max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                  <div className="space-y-4">
                  {recommendedStocks.slice(0, 6).map((stock) => (
                      // ส่ง prop 'onCardClick' ไปให้ StockCard
                      <StockCard key={stock.symbol} stock={stock} onCardClick={handleStockCardClick} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* ส่วนอื่นๆ ของหน้า */}
          <div className="container mx-auto px-4 py-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">ส่วนอื่นๆ ของหน้า</h3>
            <p className="text-gray-600">นี่คือพื้นที่สำหรับเนื้อหาเพิ่มเติมของเว็บไซต์ของคุณ</p>
          </div>
        </>
      )}
    </div>
  );
}