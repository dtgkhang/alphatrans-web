// pages/about.tsx (Trang Giới thiệu)
import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Head>
        <title>Alpha Trans - Giới Thiệu</title>
        <meta name="description" content="Giới thiệu về Alpha Trans, công ty hàng đầu trong lĩnh vực vận tải biển và logistics quốc tế." />
        <meta name="keywords" content="vận tải biển, logistics, Alpha Trans, dịch vụ vận chuyển, xuất nhập khẩu" />
        <meta property="og:title" content="Alpha Trans - Giới Thiệu" />
        <meta property="og:description" content="Khám phá về Alpha Trans và sứ mệnh mang đến giải pháp logistics hiệu quả." />
        <meta property="og:image" content="/images/about-hero.jpg" />
        <meta property="og:url" content="https://your-site.com/about" />
      </Head>
      <Header />
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-12">
        <section className="text-center mb-12">
          <h1 className="font-inter text-4xl font-bold text-[#2c2d3f] animate-fadeIn">Về Alpha Trans</h1>
          <p className="font-poppins text-lg text-gray-600 mt-4 max-w-3xl mx-auto animate-slideUp">
            Alpha Trans là công ty hàng đầu trong lĩnh vực vận tải biển và logistics, với hơn 10 năm kinh nghiệm. Chúng tôi cung cấp dịch vụ vận chuyển quốc tế an toàn, hiệu quả và tiết kiệm chi phí.
          </p>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 animate-slideLeft">
            <h2 className="font-inter text-2xl font-semibold text-[#1976d1] mb-4">Sứ Mệnh</h2>
            <p className="font-poppins text-base text-gray-700">
              Mang đến giải pháp logistics toàn diện, giúp khách hàng kết nối toàn cầu với chi phí tối ưu và dịch vụ chuyên nghiệp.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 animate-slideRight">
            <h2 className="font-inter text-2xl font-semibold text-[#1976d1] mb-4">Tầm Nhìn</h2>
            <p className="font-poppins text-base text-gray-700">
              Trở thành đối tác hàng đầu trong ngành vận tải biển tại Việt Nam, với mạng lưới toàn cầu và công nghệ hiện đại.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 md:col-span-2 animate-slideUp">
            <h2 className="font-inter text-2xl font-semibold text-[#1976d1] mb-4">Đội Ngũ</h2>
            <p className="font-poppins text-base text-gray-700">
              Với đội ngũ chuyên gia giàu kinh nghiệm, Alpha Trans cam kết mang lại dịch vụ tốt nhất cho khách hàng.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;