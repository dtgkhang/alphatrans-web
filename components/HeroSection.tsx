import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Carousel = dynamic(() => import('react-responsive-carousel').then(mod => mod.Carousel), { ssr: false });

const HeroSection: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="w-full h-[300px] sm:h-[400px] lg:h-[600px] bg-gray-300 flex items-center justify-center text-gray-700">Loading Hero Slider...</div>;
  }

  return (
    <section className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px] overflow-hidden">
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={false}
        showStatus={false}
        showArrows={true}
        dynamicHeight={false}
        axis="horizontal"
        centerMode={false}
        centerSlidePercentage={80}
        interval={3000}
        preventMovementUntilSwipeScrollTolerance={false}
        showIndicators={false}
        stopOnHover={true}
        swipeScrollTolerance={5}
        thumbWidth={100}
        verticalSwipe="standard"
        animationHandler="slide"
        swipeAnimationHandler="slide"
        labels={{ leftArrow: '', rightArrow: '', item: 'slide item' }}
        onClickItem={() => {}}
        onClickThumb={() => {}}
        onChange={() => {}}
        onSwipeStart={() => {}}
        onSwipeEnd={() => {}}
        onSwipeMove={() => false}
        renderArrowPrev={(clickHandler, hasPrev) => hasPrev && (
          <button
            type="button"
            onClick={clickHandler}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-70"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 sm:w-6 h-4 sm:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        renderArrowNext={(clickHandler, hasNext) => hasNext && (
          <button
            type="button"
            onClick={clickHandler}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-70"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 sm:w-6 h-4 sm:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
        renderIndicator={() => null}
        renderItem={(item) => item}
        renderThumbs={() => []}
        selectedItem={0}
        statusFormatter={(current, total) => `${current} of ${total}`}
        swipeable={true}
        transitionTime={350}
        useKeyboardArrows={true}
        width="100%"
      >
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px] bg-cover bg-center bg-[url('/images/hero-1.jpg')]">
          <p className="absolute w-[300px] sm:w-[500px] lg:w-[743px] top-[20px] sm:top-[60px] lg:top-[103px] left-[20px] sm:left-[100px] lg:left-[180px] font-bold text-white text-xl sm:text-3xl lg:text-6xl tracking-[0] leading-[30px] sm:leading-[50px] lg:leading-[86px] z-30">
            DỊCH VỤ VẬN CHUYỂN <br /> ĐƯỜNG BIỂN QUỐC TẾ
          </p>
          <p className="absolute w-[300px] sm:w-[500px] lg:w-[743px] top-[100px] sm:top-[200px] lg:top-[283px] left-[20px] sm:left-[100px] lg:left-[209px] font-inter font-medium text-white text-sm sm:text-lg lg:text-2xl tracking-[0] leading-[20px] sm:leading-[28px] lg:leading-[36px]">
            An Pha Trần là đối tác tin cậy trong vận chuyển đường biển quốc tế, với hơn 1 triệu lô hàng mỗi năm. Chúng tôi mang lại lợi ích vượt trội.
          </p>
        </div>
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px] bg-cover bg-center bg-[url('/images/hero-2.jpg')]">
          <p className="absolute w-[300px] sm:w-[500px] lg:w-[743px] top-[20px] sm:top-[60px] lg:top-[103px] left-[20px] sm:left-[100px] lg:left-[180px] font-bold text-white text-xl sm:text-3xl lg:text-6xl tracking-[0] leading-[30px] sm:leading-[50px] lg:leading-[86px] z-30">
            DỊCH VỤ VẬN CHUYỂN <br /> ĐƯỜNG BIỂN QUỐC TẾ
          </p>
          <p className="absolute w-[300px] sm:w-[500px] lg:w-[743px] top-[100px] sm:top-[200px] lg:top-[283px] left-[20px] sm:left-[100px] lg:left-[209px] font-inter font-medium text-white text-sm sm:text-lg lg:text-2xl tracking-[0] leading-[20px] sm:leading-[28px] lg:leading-[36px]">
            An Pha Trần là đối tác tin cậy trong vận chuyển đường biển quốc tế, với hơn 1 triệu lô hàng mỗi năm. Chúng tôi mang lại lợi ích vượt trội.
          </p>
        </div>
      </Carousel>
    </section>
  );
};

export default HeroSection;