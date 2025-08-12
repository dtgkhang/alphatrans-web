// components/Header.tsx (Làm lại header đẹp hơn với animation và responsive)
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
      {/* Top Bar */}
      {/* <div className="bg-[#1f1f2e] text-white py-3 px-6 flex items-center justify-between border-b border-gray-200 transition-all duration-300">
        <p className="font-poppins text-sm animate-fadeIn">CÔNG TY TNHH THƯƠNG MẠI & VẬN TẢI AN PHA TRẦN</p>
        <div className="flex items-center space-x-4">
          <div className="w-3 h-3 bg-[url('/images/phone-icon.svg')]"></div>
          <p className="text-sm">+84 28 3811 3811 / 3811 3979</p>
          <div className="w-3 h-3 bg-[url('/images/email-icon.svg')]"></div>
          <p className="text-sm">phu@atl.vn</p>
        </div>
      </div> */}

      {/* Navigation */}
      <nav className="py-4 px-6 flex items-center justify-between relative">
        <Image src="/images/logo.png" alt="Alpha Trans Logo" className="w-36 h-12 transition-transform duration-300 hover:scale-105" width={147} height={48} />
        <button
          className="lg:hidden text-black focus:outline-none z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <ul className={`flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none p-4 lg:p-0 transition-all duration-300 ease-in-out ${isMenuOpen ? 'flex z-50' : 'hidden'} lg:flex`}>
          <li className="font-inter text-lg font-medium text-[#2c2d3f] relative group transition-transform duration-300 hover:scale-105">
            <Link href="/">
              Trang Chủ
            </Link>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#2c2d3f] rounded-t scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </li>
          <li className="font-inter text-lg font-medium text-[#1f1f2e] transition-transform duration-300 hover:scale-105">
            <Link href="/about">
              Giới Thiệu
            </Link>
          </li>
          <li className="font-inter text-lg font-medium text-[#1f1f2e] transition-transform duration-300 hover:scale-105">
            <Link href="/services">
              Dịch Vụ
            </Link>
          </li>
          <li className="font-inter text-lg font-medium text-[#1f1f2e] transition-transform duration-300 hover:scale-105">
            <Link href="/pricing">
              Bảng Giá
            </Link>
          </li>
          <li className="font-inter text-lg font-medium text-[#1f1f2e] transition-transform duration-300 hover:scale-105">
            <Link href="/blog">
              Tin Tức
            </Link>
          </li>
          <li className="font-inter text-lg font-medium text-[#1f1f2e] transition-transform duration-300 hover:scale-105">
            <Link href="/contact">
              Liên Hệ
            </Link>
          </li>
          <li className="font-inter text-lg font-medium text-[#1f1f2e] transition-transform duration-300 hover:scale-105">
            <Link href="/tools">
              Công Cụ
            </Link>
          </li>
        </ul>
        <button className="bg-[#1f1f2e] text-white px-6 py-3 rounded text-base font-medium hidden lg:block transition-transform duration-300 hover:scale-105">
          TƯ VẤN NGAY
        </button>
      </nav>
    </header>
  );
};

export default Header;