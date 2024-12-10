import React from 'react';
// import Header from './components/Header';
import SearchForm from './SearchForm';
import EHRDetails from './EHRDetails';
import Demographics from './Demographics';
import MedicalHistory from './MedicalHistory';
import DiagnosticRecords from './DiagnosticRecords';
import TreatmentPlan from './TreatmentPlan';
import ProgressNotes from './ProgressNotes';
import NavigationArrows from '../../layouts/MainLayout/NavigationArrows';
// import Footer from './components/Footer';

function MainPage() {
  return (
    <div>
      {/* <Header /> */}
      <NavigationArrows title={'Search Electronic Medical Record'}/>
      <main className="flex overflow-hidden flex-col px-16 max-md:px-5">
        <SearchForm />
        <EHRDetails />
        <Demographics />
        <MedicalHistory />
        <DiagnosticRecords />
        <TreatmentPlan />
        <ProgressNotes />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default MainPage;
