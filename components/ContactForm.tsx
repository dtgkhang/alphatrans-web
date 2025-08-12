// components/ContactForm.tsx
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-inter text-3xl sm:text-4xl font-bold text-[#1976d1] text-center mb-8">LIÊN HỆ ALPHATRANS ĐỂ ĐƯỢC TƯ VẤN</h2>
        <p className="font-inter text-base sm:text-lg text-[#2c2d3f] text-center mb-12 max-w-3xl mx-auto">Liên hệ ngay với Alphatrans để được tư vấn giải pháp logistics và vận chuyển phù hợp. Đội ngũ của chúng tôi luôn sẵn sàng hỗ trợ bạn nhanh chóng và hiệu quả.</p>
        <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 lg:space-x-8">
          <form className="w-full lg:w-1/2 space-y-4">
            <input type="text" placeholder="Tên" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1976d1] focus:ring-2 focus:ring-[#1976d1] transition-all duration-300" />
            <input type="tel" placeholder="Số Điện Thoại" className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1976d1] focus:ring-2 focus:ring-[#1976d1] transition-all duration-300" />
            <select className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1976d1] focus:ring-2 focus:ring-[#1976d1] transition-all duration-300">
              <option>Chọn Dịch Vụ</option>
              <option>Vận chuyển quốc tế</option>
              <option>Vận chuyển nội địa</option>
              <option>Hải quan</option>
            </select>
            <textarea placeholder="Nội Dung" className="w-full p-4 border border-gray-300 rounded-lg h-48 focus:outline-none focus:border-[#1976d1] focus:ring-2 focus:ring-[#1976d1] transition-all duration-300"></textarea>
            <button type="submit" className="bg-[#1976d1] text-white px-6 py-3 rounded-lg w-full sm:w-auto hover:bg-[#1565c0] transition-colors duration-300">Tư Vấn</button>
          </form>
          <img src="/images/fleet.png" alt="Fleet" className="w-full lg:w-1/2 h-64 lg:h-96 object-cover rounded-lg shadow-md" />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;