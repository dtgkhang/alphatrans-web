// pages/pricing.tsx (Trang Bảng Giá)
import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Head>
        <title>Alpha Trans - Bảng Giá</title>
        <meta name="description" content="Bảng giá dịch vụ vận tải biển và logistics của Alpha Trans, cập nhật mới nhất." />
        <meta name="keywords" content="bảng giá vận tải biển, giá logistics, Alpha Trans, dịch vụ xuất nhập khẩu" />
        <meta property="og:title" content="Alpha Trans - Bảng Giá" />
        <meta property="og:description" content="Khám phá bảng giá chi tiết cho các dịch vụ vận chuyển của chúng tôi." />
        <meta property="og:image" content="/images/pricing-hero.jpg" />
        <meta property="og:url" content="https://your-site.com/pricing" />
      </Head>
      <Header />
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-12">
        <section className="text-center mb-12">
          <h1 className="font-inter text-4xl font-bold text-[#2c2d3f] animate-fadeIn">Bảng Giá Dịch Vụ</h1>
          <p className="font-poppins text-lg text-gray-600 mt-4 max-w-3xl mx-auto animate-slideUp">
            Bảng giá cạnh tranh cho các dịch vụ vận tải biển, logistics quốc tế và nội địa. Liên hệ để nhận báo giá chi tiết.
          </p>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 animate-slideLeft">
            <h2 className="font-inter text-2xl font-semibold text-[#1976d1] mb-4">Vận Tải Biển Quốc Tế</h2>
            <p className="font-poppins text-base text-gray-700 mb-4">Giá từ 2.000.000 VNĐ/chuyến</p>
            <ul className="space-y-2">
              <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-[#1976d1]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd" /></svg>An toàn và nhanh chóng</li>
              <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-[#1976d1]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd" /></svg>Mạng lưới toàn cầu</li>
            </ul>
            <a href="/contact" className="mt-4 inline-block bg-[#1976d1] text-white px-6 py-3 rounded transition-colors duration-300 hover:bg-[#1565c0]">Liên hệ báo giá</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 animate-slideUp">
            <h2 className="font-inter text-2xl font-semibold text-[#1976d1] mb-4">Vận Tải Nội Địa</h2>
            <p className="font-poppins text-base text-gray-700 mb-4">Giá từ 1.000.000 VNĐ/chuyến</p>
            <ul className="space-y-2">
              <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-[#1976d1]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd" /></svg>Nhanh chóng trong nước</li>
              <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-[#1976d1]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd" /></svg>Giá cạnh tranh</li>
            </ul>
            <a href="/contact" className="mt-4 inline-block bg-[#1976d1] text-white px-6 py-3 rounded transition-colors duration-300 hover:bg-[#1565c0]">Liên hệ báo giá</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 animate-slideRight">
            <h2 className="font-inter text-2xl font-semibold text-[#1976d1] mb-4">Dịch Vụ Hải Quan</h2>
            <p className="font-poppins text-base text-gray-700 mb-4">Giá từ 500.000 VNĐ/chuyến</p>
            <ul className="space-y-2">
              <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-[#1976d1]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd" /></svg>Thông quan nhanh chóng</li>
              <li className="flex items-center"><svg className="w-5 h-5 mr-2 text-[#1976d1]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd" /></svg>Hỗ trợ thủ tục</li>
            </ul>
            <a href="/contact" className="mt-4 inline-block bg-[#1976d1] text-white px-6 py-3 rounded transition-colors duration-300 hover:bg-[#1565c0]">Liên hệ báo giá</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;