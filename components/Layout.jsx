import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow lg:pb-0 pb-20">
        {children}
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/971555867466" 
        className="fixed bottom-8 right-8 lg:bottom-8 lg:right-8 bg-[#184C3A] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-[100] mb-20 lg:mb-0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle fill-current">
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
        </svg>
      </a>
    </div>
  );
};

export default Layout;
