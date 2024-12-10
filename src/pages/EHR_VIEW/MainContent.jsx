import React from 'react';
// import Header from './Header';
import SearchBar from './SearchBar';
import EHRHeader from './EHRHeader';
import PatientDemographics from './PatientDemographics';
import MedicalHistory from './MedicalHistory';
import DiagnosticRecords from './DiagnosticRecords';
import TreatmentPlan from './TreatmentPlan';
import ProgressNotes from './ProgressNotes';
import NavigationArrows from '../../layouts/MainLayout/NavigationArrows';
// import Footer from './Footer';

const MainContent = () => {
  return (
    <>
      <NavigationArrows title={'Search Electronic Medical Record'}/>
      <main className="flex overflow-hidden flex-col px-16 max-md:px-5 ">
        {/* <Header /> */}
        
        
        <SearchBar />
        <EHRHeader />
        <PatientDemographics />
        <MedicalHistory />
        <DiagnosticRecords />
        <TreatmentPlan />
        <ProgressNotes />
        {/* <Footer /> */}
      </main>
    </>
  );
};

export default MainContent;
