
// pages/index.tsx
import Head from 'next/head';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Partners from '../components/Partners';
import Services from '../components/Services';
import Process from '../components/Process';
import NewsSection from '../components/NewsSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Alpha Trans - Trang Chủ</title>
        <meta name="description" content="Dịch vụ vận chuyển quốc tế và logistics chuyên nghiệp." />
      </Head>
      <div className="bg-white min-h-screen">
        <Header />
        <HeroSection />
        <Partners />
        <Services />
        <Process />
        <NewsSection />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};

export default Home;