// src/components/Login.jsx
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // ป้องกันการ reload หน้าจอเมื่อฟอร์มถูก submit
    setError(''); // รีเซ็ต error message

    // ตรวจสอบข้อมูลเบื้องต้น
    if (!email || !password) {
      setError('กรุณากรอกอีเมลและรหัสผ่าน');
      return;
    }

    // ตรงนี้คือส่วนที่คุณจะส่งข้อมูลไปยัง Backend เพื่อยืนยันตัวตน
    // ตัวอย่างการเรียก API (สมมติว่ามี API สำหรับ Login)
    console.log('Attempting to log in with:', { email, password });
    // คุณจะต้องใช้ fetch หรือ axios ในการส่ง request ไปยัง server
    // fetch('/api/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ email, password }),
    // })
    // .then(response => response.json())
    // .then(data => {
    //   if (data.success) {
    //     console.log('Login successful:', data);
    //     // redirect ไปหน้า dashboard หรือเก็บ token
    //   } else {
    //     setError(data.message || 'Login failed');
    //   }
    // })
    // .catch(err => {
    //   console.error('Login error:', err);
    //   setError('เกิดข้อผิดพลาดในการเชื่อมต่อ');
    // });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">เข้าสู่ระบบ</h2>
        <form onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              อีเมล
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="อีเมลของคุณ"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              รหัสผ่าน
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              เข้าสู่ระบบ
            </button>
          </div>

          <p className="text-center text-gray-600 text-sm mt-4">
            ยังไม่มีบัญชี? <a href="#" className="text-blue-500 hover:text-blue-700 font-bold">สมัครสมาชิก</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login; // Export เป็น default export