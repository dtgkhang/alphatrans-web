// pages/blog/[id].tsx (Trang Chi Tiết Bài Viết - Dynamic Route)
import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface BlogPostDetail {
  id: number;
  title: string;
  content: string;
  date: string;
  image: string;
}

const mockPostDetail: BlogPostDetail = {
  id: 1,
  title: 'Xu hướng vận tải biển năm 2025',
  content: 'Nội dung đầy đủ của bài viết về xu hướng vận tải biển năm 2025...',
  date: 'August 10, 2025',
  image: '/images/blog-sea-transport.jpg',
};

const BlogDetailPage: React.FC<{ post: BlogPostDetail }> = ({ post = mockPostDetail }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Head>
        <title>{post.title} - Alpha Trans Blog</title>
        <meta name="description" content={post.content.substring(0, 160)} />
        <meta name="keywords" content="vận tải biển, logistics, xu hướng 2025" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.content.substring(0, 160)} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={`https://your-site.com/blog/${post.id}`} />
      </Head>
      <Header />
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-12">
        <article className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-8" />
          <h1 className="font-inter text-3xl font-bold text-[#2c2d3f] mb-4">{post.title}</h1>
          <p className="font-poppins text-sm text-gray-500 mb-6">{post.date}</p>
          <div className="font-poppins text-base text-gray-700 prose prose-headings:font-inter prose-headings:text-[#2c2d3f]" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </main>
      <Footer />
    </div>
  );
};

// Fetch chi tiết từ WP
// export async function getStaticPaths() {
//   // Fetch IDs từ WP để tạo paths
//   const res = await fetch('https://your-wordpress-site.com/wp-json/wp/v2/posts');
//   const posts = await res.json();

//   const paths = posts.map((post: any) => ({ params: { id: post.id.toString() } }));

//   return { paths, fallback: 'blocking' };
// }

// export async function getStaticProps({ params }: { params: { id: string } }) {
//   const res = await fetch(`https://your-wordpress-site.com/wp-json/wp/v2/posts/${params.id}?_embed`);
//   const post = await res.json();

//   const blogPost = {
//     id: post.id,
//     title: post.title.rendered,
//     content: post.content.rendered,
//     date: new Date(post.date).toLocaleDateString('vi-VN'),
//     image: post._embedded['wp:featuredmedia'][0]?.source_url || '/images/placeholder.jpg',
//   };

//   return {
//     props: { post: blogPost },
//     revalidate: 60,
//   };
// }

export default BlogDetailPage;