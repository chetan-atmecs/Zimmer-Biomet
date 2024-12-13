import React from 'react';
// import Header from "./Header";
import MainContent from './MainContent';
import FeatureCards from './FeatureCard';
import IconCards from './IconCards';
import MediaSection from './MediaSelection';
import Navbar from './Navbar';
import NavigationArrows from '../../layouts/MainLayout/NavigationArrows';
// import Footer from "./Footer";

function VirtualAssistant() {
  return (
    <>
      <NavigationArrows title={' Zimmer Biomet'}/>
      <div className="flex overflow-hidden flex-col px-16 max-md:px-5">
        {/* <Header /> */}

        <Navbar />
        <MainContent />
        <FeatureCards />
        <IconCards />
        <MediaSection />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default VirtualAssistant;
