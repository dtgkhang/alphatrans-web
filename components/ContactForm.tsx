// components/ContactForm.tsx
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section className="py-12 flex justify-between px-40">
      <div className="w-1/2">
        <h2 className="font-inter text-3xl font-semibold text-[#2c2d3f]">LIÊN HỆ ALPHATRANS ĐỂ ĐƯỢC TƯ VẤN</h2>
        <p className="font-inter text-base mt-4">Liên hệ ngay với Alphatrans để được tư vấn...</p>
        <form className="mt-8 space-y-4">
          <input type="text" placeholder="Tên" className="w-full p-4 border border-gray-200 rounded" />
          <input type="tel" placeholder="Số Điện Thoại" className="w-full p-4 border border-gray-200 rounded" />
          <select className="w-full p-4 border border-gray-200 rounded">
            <option>Chọn Dịch Vụ</option>
          </select>
          <textarea placeholder="Nội Dung" className="w-full p-4 border border-gray-200 rounded h-48"></textarea>
          <button className="bg-[#2c2d3f] text-white px-6 py-3 rounded">Tư Vấn</button>
        </form>
      </div>
      <img src="/images/fleet.png" alt="Fleet" className="w-1/2 h-96 object-cover" />
    </section>
  );
};

export default ContactForm;