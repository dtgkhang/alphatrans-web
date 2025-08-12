// pages/contact.tsx (Trang Liên Hệ)
import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Head>
        <title>Alpha Trans - Liên Hệ</title>
        <meta name="description" content="Liên hệ với Alpha Trans để được tư vấn về dịch vụ vận tải biển và logistics." />
        <meta name="keywords" content="liên hệ Alpha Trans, hỗ trợ vận tải biển, tư vấn logistics" />
        <meta property="og:title" content="Alpha Trans - Liên Hệ" />
        <meta property="og:description" content="Gửi thông tin liên hệ để nhận tư vấn nhanh chóng từ chúng tôi." />
        <meta property="og:image" content="/images/contact-hero.jpg" />
        <meta property="og:url" content="https://your-site.com/contact" />
      </Head>
      <Header />
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-12">
        <section className="text-center mb-12">
          <h1 className="font-inter text-4xl font-bold text-[#2c2d3f] animate-fadeIn">Liên Hệ Với Chúng Tôi</h1>
          <p className="font-poppins text-lg text-gray-600 mt-4 max-w-3xl mx-auto animate-slideUp">
            Alpha Trans luôn sẵn sàng hỗ trợ bạn với các dịch vụ vận tải biển và logistics chuyên nghiệp.
          </p>
        </section>
        <section className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <form className="grid grid-cols-1 gap-6">
            <input type="text" placeholder="Họ và tên" className="p-4 border border-gray-300 rounded transition-colors duration-300 focus:border-[#1976d1]" />
            <input type="email" placeholder="Email" className="p-4 border border-gray-300 rounded transition-colors duration-300 focus:border-[#1976d1]" />
            <input type="tel" placeholder="Số điện thoại" className="p-4 border border-gray-300 rounded transition-colors duration-300 focus:border-[#1976d1]" />
            <textarea placeholder="Nội dung" className="p-4 border border-gray-300 rounded h-32 transition-colors duration-300 focus:border-[#1976d1]"></textarea>
            <button type="submit" className="bg-[#1976d1] text-white px-6 py-3 rounded transition-colors duration-300 hover:bg-[#1565c0]">Gửi</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;