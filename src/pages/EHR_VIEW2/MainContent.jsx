import React from 'react';
// import Header from './Header';
import SearchBar from './SearchBar';
import EHRHeader from './EHRHeader';
import PatientDemographics from './PatientDemographics';
import MedicalHistorySection from './MedicalHistorySection';
import DiagnosticRecords from './DiagnosticRecordsSection';
import TreatmentPlan from './TreatmentPlanSection';
import ProgressNotes from './ProgressNotesSection';
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
        
      </main>
    </>
  );
};

export default MainContent;
