import React, { useState } from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import SelfAssessment from '../pages/SelfAssessment';
import Certificates from '../pages/Certificates';
import Agencies from '../pages/Agencies';
import Catalog from '../pages/Catalog';
import Solutions from '../pages/Solutions';

const AppLayout = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'self-assessment':
        return <SelfAssessment />;
      case 'certificates':
        return <Certificates />;
      case 'agencies':
        return <Agencies />;
      case 'catalog':
        return <Catalog />;
      case 'solutions':
        return <Solutions />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      <Nav currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="max-w-7xl mx-auto px-4 py-8 flex-1 w-full">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;