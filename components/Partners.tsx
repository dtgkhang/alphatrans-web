import React from 'react';

const Partners: React.FC = () => {
  // Mock data cho logo đối tác (thay bằng dữ liệu thực tế từ Figma nếu có)
  const partnerLogos = [
    { id: 1, src: '/images/ax.png', alt: 'AX Logo' },
    { id: 2, src: '/images/dp-world.png', alt: 'DP World Logo' },
    { id: 3, src: '/images/eternal.png', alt: 'Eternal Logo' },
    { id: 4, src: '/images/cliradex.png', alt: 'Cliradex Logo' },
    { id: 5, src: '/images/legend.png', alt: 'Legend Logo' },
    // Thêm logo khác nếu cần
  ];

  return (
    <section className="py-12 text-center">
      <h2 className="font-inter text-3xl font-bold text-[#2c2d3f]">ĐỐI TÁC CỦA ALPHATRANS</h2>
      <p className="font-inter text-base text-[#2c2d3f] mt-4 max-w-3xl mx-auto">
        Alphatrans tự hào là đối tác tin cậy của nhiều doanh nghiệp trong và ngoài nước, thuộc đa dạng ngành nghề.
      </p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 max-w-6xl mx-auto">
        {partnerLogos.map((logo) => (
          <div
            key={logo.id}
            className="flex items-center justify-center bg-white p-4 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-[100px] max-w-[200px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;