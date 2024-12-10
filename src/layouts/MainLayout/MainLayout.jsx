import React from 'react';
import Header from './Header'; // Assume you have a Header component
import Footer from './Footer'; // Assume you have a Footer component
// import './MainLayout.css';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
