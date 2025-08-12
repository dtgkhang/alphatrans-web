// components/Footer.tsx
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2c2d3f] text-white py-12 px-4 sm:px-6 lg:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div>
          <p className="font-poppins text-sm mb-4">Công Ty TNHH Thương Mại Và Vận Tải An Pha Trần (Tên Tiếng Anh: Alpha Tran Trading And Transportation Company Limited).</p>
          <div className="flex space-x-4 mt-4">
            <Link href="https://facebook.com" className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#2c2d3f] transition-all duration-300">FB</Link>
            <Link href="https://google.com" className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#2c2d3f] transition-all duration-300">G</Link>
            <Link href="https://twitter.com" className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#2c2d3f] transition-all duration-300">TW</Link>
            <Link href="https://vimeo.com" className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#2c2d3f] transition-all duration-300">VM</Link>
            <Link href="https://pinterest.com" className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#2c2d3f] transition-all duration-300">PT</Link>
          </div>
        </div>
        <div>
          <h3 className="font-inter text-xl font-semibold mb-4">Giới Thiệu</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="font-poppins text-sm hover:text-gray-300 transition-all duration-300">Về chúng tôi</Link></li>
            <li><Link href="/team" className="font-poppins text-sm hover:text-gray-300 transition-all duration-300">Đội ngũ</Link></li>
            <li><Link href="/career" className="font-poppins text-sm hover:text-gray-300 transition-all duration-300">Tuyển dụng</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-inter text-xl font-semibold mb-4">Dịch Vụ</h3>
          <ul className="space-y-2">
            <li><Link href="/services/sea" className="font-poppins text-sm hover:text-gray-300 transition-all duration-300">Vận Chuyển Đường Biển Quốc Tế</Link></li>
            <li><Link href="/services/air" className="font-poppins text-sm hover:text-gray-300 transition-all duration-300">Vận Chuyển Đường Không Quốc Tế</Link></li>
            <li><Link href="/services/domestic" className="font-poppins text-sm hover:text-gray-300 transition-all duration-300">Vận Chuyển Hàng Hóa Nội Địa</Link></li>
            <li><Link href="/services/cambodia" className="font-poppins text-sm hover:text-gray-300 transition-all duration-300">Vận Chuyển Hàng Hóa Đi Campuchia</Link></li>
            <li><Link href="/services/customs" className="font-poppins text-sm hover:text-gray-300 transition-all duration-300">Khai Báo Hải Quan Trọn Gói</Link></li>
            <li><Link href="/services/express" className="font-poppins text-sm hover:text-gray-300 transition-all duration-300">Chuyển Phát Nhanh Quốc Tế</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-inter text-xl font-semibold mb-4">Bài Viết</h3>
          <ul className="space-y-2">
            <li><Link href="/blog/post-a" className="font-poppins text-sm hover:text-gray-300 transition-all duration-300">Bài Viết A</Link></li>
            <li><Link href="/blog/post-b" className="font-poppins text-sm hover:text-gray-300 transition-all duration-300">Bài Viết B</Link></li>
            <li><Link href="/blog/post-c" className="font-poppins text-sm hover:text-gray-300 transition-all duration-300">Bài Viết C</Link></li>
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