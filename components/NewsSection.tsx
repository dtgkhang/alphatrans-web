import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Carousel = dynamic(() => import('react-responsive-carousel').then(mod => mod.Carousel), { ssr: false });

interface NewsItem {
  id: number;
  title: string;
  description: string;
}

interface NewsSectionProps {
  news?: NewsItem[];
}

const NewsSection: React.FC<NewsSectionProps> = ({ news }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Mock data với mô tả dài hơn
  const mockNews: NewsItem[] = [
    {
      id: 1,
      title: 'Các hoạt động trong lĩnh vực Logistics gồm những gì?',
      description: 'Logistics là một trong những lĩnh vực quan trọng trong chuỗi cung ứng toàn cầu, bao gồm vận chuyển hàng hóa, quản lý kho bãi, và tối ưu hóa quy trình...',
    },
    {
      id: 2,
      title: 'Quy trình các bước làm thủ tục thông quan hàng xuất khẩu',
      description: 'Quy trình thông quan hàng xuất khẩu đòi hỏi sự chuẩn bị kỹ lưỡng, từ việc khai báo hải quan, kiểm tra hàng hóa, đến thanh toán thuế...',
    },
    {
      id: 3,
      title: 'Tờ khai hải quan trong hoạt động xuất nhập khẩu',
      description: 'Tờ khai hải quan là tài liệu quan trọng trong xuất nhập khẩu, cung cấp thông tin chi tiết về hàng hóa, giá trị, và nguồn gốc...',
    },
    {
      id: 4,
      title: 'Xu hướng logistics năm 2025',
      description: 'Năm 2025 dự kiến chứng kiến sự bùng nổ của công nghệ trong logistics, với AI, IoT, và tự động hóa kho bãi...',
    },
    {
      id: 5,
      title: 'Lợi ích của vận chuyển quốc tế',
      description: 'Vận chuyển quốc tế mở rộng thị trường, kết nối các khu vực kinh tế, và thúc đẩy thương mại toàn cầu...',
    },
    {
      id: 6,
      title: 'Cách tối ưu chi phí logistics',
      description: 'Tối ưu chi phí logistics bao gồm lựa chọn tuyến đường hiệu quả, quản lý hàng tồn kho thông minh...',
    },
    {
      id: 7,
      title: 'Công nghệ trong vận chuyển hàng hóa',
      description: 'Công nghệ như GPS, blockchain, và drone đang thay đổi cách vận chuyển hàng hóa...',
    },
    {
      id: 8,
      title: 'An toàn trong logistics',
      description: 'An toàn trong logistics bao gồm bảo vệ hàng hóa khỏi hư hỏng, đảm bảo tuân thủ quy định...',
    },
  ];

  const newsData = news ? news : mockNews;

  if (!isClient) {
    return <div className="w-full h-[300px] bg-gray-300 flex items-center justify-center text-gray-700">Loading News...</div>;
  }

  return (
    <section className="py-12 text-center">
      <h2 className="font-inter text-3xl font-semibold text-[#2c2d3f] px-4">Tin Tức</h2>
      <div className="mt-8 px-4">
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={false}
          interval={5000}
          showStatus={false}
          showArrows={true}
          showIndicators={false}
          dynamicHeight={false}
          axis="horizontal"
          centerMode={true}
          centerSlidePercentage={100 / 2} // 50% cho 2 card trên mobile
          centerSlidePercentage={100 / 4} // 25% cho 4 card trên desktop (lg)
          preventMovementUntilSwipeScrollTolerance={5}
          stopOnHover={true}
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
              aria-label="Previous news item"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-70"
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
              aria-label="Next news item"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-70"
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
          emulateTouch={true}
        >
          {newsData.map((item) => (
            <div key={item.id} className="w-[300px] sm:w-[350px] lg:w-[400px] p-2">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <img src="/images/hero-1.jpg" alt={item.title} className="w-full h-60 object-cover rounded-t-lg" />
                <div className="p-4 bg-white">
                  <h3 className="font-inter text-lg font-medium">{item.title}</h3>
                  <p className="font-inter text-sm text-gray-500 mt-2 line-clamp-4">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

// Fetch data from WordPress with error handling
export async function getStaticProps() {
  try {
    const res = await fetch('https://your-wordpress-site.com/wp-json/wp/v2/posts?_embed');
    if (!res.ok) throw new Error('Failed to fetch posts');
    const posts = await res.json();

    const news = posts.map((post: any) => ({
      id: post.id,
      title: post.title.rendered,
      description: post.excerpt.rendered,
    }));

    return {
      props: { news },
      revalidate: 60, // Revalidate every 60 seconds
    };
  } catch (error) {
    console.error('Error fetching news:', error);
    return {
      props: { news: [] },
    };
  }
}

export default NewsSection;