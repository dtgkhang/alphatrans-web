// pages/blog.tsx (Trang tổng quan cho blog)
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

interface BlogCategory {
  id: number;
  name: string;
  slug: string;
}

const mockPosts: BlogPost[] = [
  {
    id: 1,
    title: "Xu hướng vận tải biển năm 2025",
    excerpt: "Khám phá các đổi mới trong ngành vận tải biển, từ công nghệ tự động hóa đến các giải pháp bền vững giảm carbon.",
    date: "August 10, 2025",
    image: "/images/blog-sea-transport.jpg",
    category: "van-tai-bien"
  },
  {
    id: 2,
    title: "Tối ưu hóa chuỗi cung ứng logistics",
    excerpt: "Hướng dẫn cách giảm chi phí và tăng hiệu quả trong chuỗi cung ứng, với ví dụ thực tế từ ngành vận tải biển.",
    date: "August 5, 2025",
    image: "/images/blog-logistics-chain.jpg",
    category: "logistics"
  },
  {
    id: 3,
    title: "An toàn hàng hóa trong vận tải quốc tế",
    excerpt: "Các biện pháp đảm bảo an toàn hàng hóa khi vận chuyển qua biển, bao gồm quy định quốc tế và công nghệ theo dõi.",
    date: "July 28, 2025",
    image: "/images/blog-safety-shipping.jpg",
    category: "van-tai-bien"
  },
  {
    id: 4,
    title: "Tác động của biến đổi khí hậu đến logistics biển",
    excerpt: "Phân tích cách biến đổi khí hậu ảnh hưởng đến tuyến đường biển và cách ngành logistics thích ứng.",
    date: "July 20, 2025",
    image: "/images/blog-climate-impact.jpg",
    category: "logistics"
  },
  {
    id: 5,
    title: "Công nghệ 4.0 trong vận tải biển",
    excerpt: "Ứng dụng AI và IoT để tối ưu hóa hành trình tàu biển và quản lý hàng hóa.",
    date: "July 15, 2025",
    image: "/images/blog-tech-shipping.jpg",
    category: "van-tai-bien"
  },
  {
    id: 6,
    title: "Quy trình thông quan hàng hóa logistics",
    excerpt: "Hướng dẫn chi tiết các bước thông quan để tránh trì hoãn trong vận chuyển quốc tế.",
    date: "July 10, 2025",
    image: "/images/blog-customs-clearance.jpg",
    category: "logistics"
  },
  {
    id: 7,
    title: "Lợi ích của vận tải biển so với hàng không",
    excerpt: "Phân tích chi phí, thời gian và môi trường giữa vận tải biển và hàng không.",
    date: "July 5, 2025",
    image: "/images/blog-sea-vs-air.jpg",
    category: "van-tai-bien"
  },
  {
    id: 8,
    title: "Xu hướng xanh trong logistics toàn cầu",
    excerpt: "Cách các công ty logistics giảm phát thải carbon và áp dụng năng lượng tái tạo.",
    date: "June 30, 2025",
    image: "/images/blog-green-logistics.jpg",
    category: "logistics"
  }
];

const mockCategories: BlogCategory[] = [
  { id: 1, name: "Vận Tải Biển", slug: "van-tai-bien" },
  { id: 2, name: "Logistics", slug: "logistics" },
  // Thêm danh mục khác nếu cần
];

const BlogPage = ({ posts = mockPosts, categories = mockCategories }: { posts: BlogPost[]; categories: BlogCategory[] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-12">
        <header className="text-center mb-12">
          <h1 className="font-inter text-4xl font-bold text-[#2c2d3f]">Blog Vận Tải Biển & Logistics</h1>
          <p className="font-poppins text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Khám phá các bài viết chuyên sâu về ngành vận tải biển và logistics, với các phân tích xu hướng, mẹo tối ưu và tin tức mới nhất.
          </p>
        </header>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <input
            type="text"
            placeholder="Tìm kiếm bài viết..."
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1976d1] transition-all duration-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Sidebar Categories */}
          <aside className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-inter text-xl font-semibold text-[#2c2d3f] mb-4">Danh mục</h3>
            <ul className="space-y-2">
              <li className="transition-all duration-300 hover:scale-105 hover:text-[#1976d1] cursor-pointer">
                <button
                  onClick={() => setSelectedCategory('')}
                  className={`w-full text-left font-poppins text-base ${selectedCategory === '' ? 'text-[#1976d1] font-bold' : 'text-gray-600'}`}
                >
                  Tất cả
                </button>
              </li>
              {categories.map((category) => (
                <li key={category.id} className="transition-all duration-300 hover:scale-105 hover:text-[#1976d1] cursor-pointer">
                  <button
                    onClick={() => setSelectedCategory(category.slug)}
                    className={`w-full text-left font-poppins text-base ${selectedCategory === category.slug ? 'text-[#1976d1] font-bold' : 'text-gray-600'}`}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Blog Posts Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {currentPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h2 className="font-inter text-xl font-semibold text-[#2c2d3f] mb-2 line-clamp-2">{post.title}</h2>
                  <p className="font-poppins text-sm text-gray-500 mb-4">{post.date}</p>
                  <p className="font-poppins text-base text-gray-700 line-clamp-3">{post.excerpt}</p>
                  <Link href={`/blog/${post.id}`} className="mt-4 inline-block text-[#1976d1] font-medium hover:underline">
                    Đọc thêm →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 rounded ${currentPage === index + 1 ? 'bg-[#1976d1] text-white' : 'bg-white text-[#2c2d3f] border border-gray-300 hover:bg-gray-100'}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Fetch từ WP
// export async function getStaticProps() {
//   const resPosts = await fetch('https://your-wordpress-site.com/wp-json/wp/v2/posts?_embed&per_page=100');
//   const posts = await resPosts.json();

//   const resCategories = await fetch('https://your-wordpress-site.com/wp-json/wp/v2/categories');
//   const categories = await resCategories.json();

//   const blogPosts = posts.map((post: any) => ({
//     id: post.id,
//     title: post.title.rendered,
//     excerpt: post.excerpt.rendered,
//     date: new Date(post.date).toLocaleDateString('vi-VN'),
//     image: post._embedded['wp:featuredmedia'][0]?.source_url || '/images/placeholder.jpg',
//     category: post.categories[0] ? categories.find((cat: any) => cat.id === post.categories[0])?.slug : 'uncategorized',
//   }));

//   return {
//     props: { posts: blogPosts, categories },
//     revalidate: 60, // ISR every 60 seconds
//   };
// }

export default BlogPage;