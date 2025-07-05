// src/components/Header.jsx

import React from 'react';
import { ChevronDownIcon, Bars4Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'; // ต้องติดตั้ง @heroicons/react
import setLogo from '../data/pic/unknow.jpg';

  const set50Data = {
    status: "Closed",
    latestPrice: "726.16",
    changeValue: "-6.03",
    changePercent: "-0.82%",
    marketValue: "19,181.11",
    volume: "1,280,638",
    lastUpdated: "05 ก.ค. 2568 03:20:08"
  };
export const Header = ({ onSetMemberClick }) => { // <--- 1. รับ prop 'onSetMemberClick' ตรงนี้
  return (
    <header className="w-full">
      {/* Top Bar: SET50 Info */}
      <div className="bg-white py-2 border-b border-gray-200">
        <div className="container mx-auto px-4 flex items-center justify-between text-sm text-gray-700">
          <div className="flex items-center space-x-2">
            <span className="font-semibold flex items-center">
              SET50 <ChevronDownIcon className="h-4 w-4 ml-1 text-gray-500" />
            </span>
            <span className="ml-4">
              <span className="font-bold">{set50Data.status}</span>
              <span className="ml-2 text-gray-500">ล่าสุด</span>
              <span className="text-xl font-bold text-gray-900 ml-1">{set50Data.latestPrice}</span>
              <span className={`ml-2 ${set50Data.changeValue.startsWith('-') ? 'text-red-600' : 'text-green-600'}`}>
                {set50Data.changeValue} ({set50Data.changePercent})
              </span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span>
              <span className="text-gray-500">มูลค่า (ล้านบาท)</span>
              <span className="font-bold ml-1">{set50Data.marketValue}</span>
            </span>
            <span>
              <span className="text-gray-500">ปริมาณ (100 หุ้น)</span>
              <span className="font-bold ml-1">{set50Data.volume}</span>
            </span>
            <span>ข้อมูลล่าสุด {set50Data.lastUpdated}</span>
            <div className="flex items-center border border-gray-300 rounded px-2 py-1 ml-4">
              <span className="mr-1">🇹🇭</span>
              <span>TH</span>
              <ChevronDownIcon className="h-4 w-4 ml-1 text-gray-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Market Alerts Bar */}
      <div className="bg-red-600 py-2">
        <div className="container mx-auto px-4 flex items-center text-white text-sm">
          <div className="bg-red-700 p-1 rounded-md flex items-center mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.305 3.244 2.077 3.244h14.009c1.772 0 2.933-1.744 2.066-3.245l-7.008-12.25a1.975 1.975 0 00-3.414 0l-7.009 12.25z" />
            </svg>
            <span className="ml-1 font-semibold">Market Alerts</span>
          </div>
          <a href="#" className="flex items-center hover:underline">
            ก้าวสู่ Market Alert คลิกเลย
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 ml-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-white py-4 shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={setLogo} alt="SET Logo" className="h-10" />
          </div>

          {/* Search Bar */}
          <div className="flex-grow max-w-lg mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="ค้นหาหลักทรัพย์, ข่าว, บริษัท"
                className="w-full border border-gray-300 rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Right Section: Factsheet & SET Member */}
          <div className="flex items-center space-x-4">
            <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">
              <Bars4Icon className="h-5 w-5 mr-1" />
              <span>ค้นหาสื่อ/ข้อมูล / Factsheet</span>
            </a>
            
            <button onClick={onSetMemberClick} //
              className="bg-orange-400 text-white px-6 py-2 rounded-full flex items-center shadow-md hover:bg-orange-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                <path fillRule="evenodd" d="M18.685 19.02A2.25 2.25 0 0020.25 18v-7.5a2.25 2.25 0 00-2.25-2.25H16.5a2.25 2.25 0 00-2.25 2.25v7.5a2.25 2.25 0 001.565 2.025c.189.065.395.095.602.095H18c.207 0 .413-.03.602-.095zM14.25 4.5a.75.75 0 00-.75-.75H12a.75.75 0 00-.75.75v7.5a.75.75 0 00.75.75h1.5a.75.75 0 00.75-.75V4.5z" clipRule="evenodd" />
              </svg>
              <span>PITIWAT Member</span>
              
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <nav className="bg-white py-3 shadow-sm">
        <div className="container mx-auto px-4">
          <ul className="flex justify-between text-gray-700 font-semibold text-lg">
            <li><a href="#" className="hover:text-blue-600">ข้อมูลการซื้อขาย</a></li>
            <li><a href="#" className="hover:text-blue-600">ผู้ถือหลักทรัพย์</a></li>
            <li><a href="#" className="hover:text-blue-600">กฎเกณฑ์และการกำกับ</a></li>
            <li><a href="#" className="hover:text-blue-600">บริหาร</a></li>
            <li><a href="#" className="hover:text-blue-600">ความรู้และวิจัย</a></li>
            <li><a href="#" className="hover:text-blue-600">เกี่ยวกับ ตลท.</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
