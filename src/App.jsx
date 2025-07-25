import React, { useState } from "react";
import { Header } from './components/Header';
import StockCard from './components/StockCard';
import { recommendedStocks } from './data/recommendedStocks';
import Login from './components/Login';
import StockDetail from './components/StockDetail';

import './App.css';
import './index.css';

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);

  const handleShowLogin = () => {
    setShowLogin(true);
  };

  const handleStockCardClick = (stock) => {
    setSelectedStock(stock);
  };

  const handleBackToStockList = () => {
    setSelectedStock(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {showLogin ? (
        <Login />
      ) : selectedStock ? (
        <StockDetail stock={selectedStock} onBackToList={handleBackToStockList} />
      ) : (
        <>
          <Header onSetMemberClick={handleShowLogin} />

          <main className="bg-white shadow py-8 mb-8 rounded-lg">
            <div className="container mx-auto px-4">
              <h2 className="text-xl font-semibold mb-4 text-blue-800">
                หุ้นแนะนำน่าลงทุน
              </h2>

              <div className="bg-white p-4 rounded-lg shadow-inner border border-gray-200">
                <div className="max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                  <div className="space-y-4">
                    {recommendedStocks.slice(0, 6).map((stock) => (
                      <StockCard
                        key={stock.symbol}
                        stock={stock}
                        onCardClick={handleStockCardClick}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>

          <div className="container mx-auto px-4 py-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              ส่วนอื่นๆ ของหน้า
            </h3>
            <p className="text-gray-600">
              นี่คือพื้นที่สำหรับเนื้อหาเพิ่มเติมของเว็บไซต์ของคุณ
            </p>
          </div>
        </>
      )}
    </div>
  );
}
