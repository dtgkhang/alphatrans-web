// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2c2d3f] text-white py-12 px-40">
      <div className="grid grid-cols-4 gap-8">
        <div>
          <p className="font-poppins text-sm">Công Ty TNHH Thương Mại Và Vận Tải An Pha Trần...</p>
          <div className="flex space-x-4 mt-8">
            {/* Social icons */}
            <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center">FB</div>
            {/* Thêm G, TW, VM, PT */}
          </div>
        </div>
        <div>
          <h3 className="font-inter text-xl font-semibold">Giới Thiệu</h3>
          {/* Links */}
        </div>
        <div>
          <h3 className="font-inter text-xl font-semibold">Dịch Vụ</h3>
          <ul className="space-y-2 mt-4">
            <li className="flex items-center space-x-2"><span>›</span><span>Vận Chuyển Đường Biển Quốc Tế</span></li>
            {/* Thêm items khác */}
          </ul>
        </div>
        <div>
          <h3 className="font-inter text-xl font-semibold">Bài Viết</h3>
          <ul className="space-y-2 mt-4">
            <li className="flex items-center space-x-2"><span>›</span><span>Bài Viết A</span></li>
            {/* Thêm items */}
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        © Copyright 2024 | All Rights Reserved by Alpha Trans
      </div>
    </footer>
  );
};

export default Footer;