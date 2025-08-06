import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: '/images/chat-icon.png',
      title: 'Tiếp nhận yêu cầu',
      description: 'Tư vấn và cung cấp giải pháp vận chuyển ngay trong ngày.',
    },
    {
      icon: '/images/edit-icon.png',
      title: 'Xử lý và vận chuyển',
      description: 'Hàng hóa được vận chuyển an toàn, đúng thời gian từ 1-3 ngày.',
    },
    {
      icon: '/images/check-icon.png',
      title: 'Hoàn tất và theo dõi',
      description: 'Xác nhận hoàn tất trong 24 giờ, theo dõi và hỗ trợ sau vận chuyển.',
    },
  ];

  return (
    <section className="py-12 text-center">
      <h2 className="font-inter text-3xl font-bold text-[#2c2d3f] px-4">QUY TRÌNH DỊCH VỤ CHUYÊN NGHIỆP CỦA ALPHATRANS</h2>
      <p className="font-poppins text-base text-[#2c2d3f] mt-4 max-w-4xl mx-auto px-4">
        Alphatrans đảm bảo quy trình logistics nhanh chóng, an toàn và hiệu quả, mang lại sự yên tâm cho khách hàng.
      </p>
      <div className="mt-8 px-4">
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {steps.map((step, index) => (
            <div key={index} className="w-full md:w-80 text-center">
              <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center hover:shadow-lg transition-shadow duration-300">
                <img src={step.icon} alt={step.title} className="w-20 h-20" />
              </div>
              <h3 className="font-inter text-xl font-semibold text-black mt-4">{step.title}</h3>
              <p className="font-poppins text-sm mt-2 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;