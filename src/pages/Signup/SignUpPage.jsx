import React from 'react';
// import Header from '../../layouts/MainLayout/Header';
import RegistrationForm from './RegistrationForm';
// import Footer from '../../layouts/MainLayout/Footer';
import NavigationArrows from '../../layouts/MainLayout/NavigationArrows';
function RegistrationPage() {
  return (
    <>
      <NavigationArrows />
      <main className="flex flex-col overflow-hidden px-16 max-md:px-5 max-w-full mt-10">
      <RegistrationForm />
      </main>
    </>
  );
}

export default RegistrationPage;
