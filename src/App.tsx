import { useState } from 'react';
import FancyFontPage from "./pages/FancyFontPage";
import StylesPage from "./pages/StylesPage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  const [currentPage, setCurrentPage] = useState('fancyText');

  const renderPage = () => {
    switch (currentPage) {
      case 'fancyText':
        return <FancyFontPage />;
      case 'styles':
        return <StylesPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <FancyFontPage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="flex-grow">
        {renderPage()}
      </div>
      <Footer />
    </div>
  )
}

