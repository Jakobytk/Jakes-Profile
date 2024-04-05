import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
// import ContactMe from './pages/ContactMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('about');

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.history.pushState(null, null, `/${page}`);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutMe />;
      // case 'contact':
      //   return <ContactMe />;
      case 'portfolio':
        return <Portfolio />;
      case 'resume':
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className="container">
      <Header onPageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;