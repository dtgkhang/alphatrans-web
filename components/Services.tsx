import React, { useState } from 'react';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0); // 0: Bản đồ, 1: Vận chuyển nội địa, 2: Hải quan

  const tabs = [
    { label: 'Vận chuyển quốc tế', content: <img src="/images/world-map.png" alt="Bản đồ thế giới" className="w-full h-[700px] object-cover rounded-lg" /> },
    { label: 'Vận chuyển nội địa', content: <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center rounded-lg">Nội dung vận chuyển nội địa</div> },
    { label: 'Hải quan', content: <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center rounded-lg">Nội dung hải quan</div> },
  ];

  return (
    <section className="py-12 text-center">
      <h2 className="font-inter text-3xl font-bold text-[#2c2d3f]">CÁC DỊCH VỤ VẬN CHUYỂN CỦA ALPHATRANS</h2>
      <div className="mt-8 flex justify-center space-x-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`w-96 h-24 bg-white flex items-center justify-center border-b-4 transition-colors duration-300 ${
              activeTab === index
                ? 'border-black text-[#2c2d3f] font-bold'
                : 'border-transparent text-gray-500 hover:text-[#2c2d3f]'
            }`}
            onClick={() => setActiveTab(index)}
          >
            <p className="font-inter text-2xl">{tab.label}</p>
          </button>
        ))}
      </div>
      <div className="mt-8 mx-auto max-w-6xl">
        {tabs[activeTab].content}
      </div>
    </section>
  );
};

export default Services;