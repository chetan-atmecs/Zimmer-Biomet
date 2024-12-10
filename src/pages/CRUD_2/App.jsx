import React from 'react';
// import Header from './Header';
import MainContent from './MainContent';
import NavigationArrows from '../../layouts/MainLayout/NavigationArrows';

const App = () => {
  return (
    <>
      <NavigationArrows  />
      <div className="flex overflow-hidden flex-col px-16  max-md:px-5 max-md:pb-24">
        {/* <Header /> */}
        <MainContent />
      </div>
    </>
  );
};

export default App;
