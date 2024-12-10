import React, { useEffect, useRef, useState } from 'react';
// import Header from './components/Header';
import SearchForm from './SearchForm';
import EHRDetails from './EHRDetails';
import Demographics from './Demographics';
// import MedicalHistory from './MedicalHistory';
// import DiagnosticRecords from './DiagnosticRecords';
// import TreatmentPlan from './TreatmentPlan';
// import ProgressNotes from './ProgressNotes';
import NavigationArrows from '../../layouts/MainLayout/NavigationArrows';
// import Footer from './components/Footer';
import EncounterTable from './Encounter';
import MedicationsTable from './MedicationTable';
import AllergiesTable from './AllergiesTable';
import ImmunizationTable from './ImmunizationTable';
import ConditionsTable from './ConditionsTable';
import ImagingTable from './ImagingTable';
function MainPage() {

  const [ehrDetailData, setEhrDetailData] = useState({})
  const encounterTableRef=useRef();
  const medicationTableRef=useRef();
  const allergiesTableRef=useRef();
  const immunizationTableRef=useRef();
  const conditionTableRef=useRef();
  const imagingTableRef=useRef();


  
  const fetchAllData = () => {
    const ssn = JSON.parse(sessionStorage.getItem('ssn'));
    console.log("inside the fetch all method",ssn)
     if(ssn){
      console.log("fetchencounter ref",encounterTableRef)
      encounterTableRef.current.fetchEncounters();  
      medicationTableRef.current.fetchMedications();  
      conditionTableRef.current.fetchConditionsData();  
      allergiesTableRef.current.fetchAllergies();  
      immunizationTableRef.current.fetchImmunizations();  
      imagingTableRef.current.fetchImagingData();  

     } // Trigger fetch in MedicationsTable
    
  };

  useEffect(() => {
    console.log("page is rendering ")
    fetchAllData();
  }, []);
  return (
    <div>
      {/* <Header /> */}
      <NavigationArrows title={'Search Electronic Medical Record'}/>
      <main className="flex overflow-hidden flex-col px-16 max-md:px-5">
        <SearchForm  ehrDetailData={ehrDetailData} setEhrDetailData={setEhrDetailData} fetchAllData={fetchAllData}/>
        <EHRDetails ehrDetailData={ehrDetailData} setEhrDetailData={setEhrDetailData}/>
        <Demographics ehrDetailData={ehrDetailData} setEhrDetailData={setEhrDetailData}/>
        <EncounterTable ref={encounterTableRef}/>
        <AllergiesTable ref={allergiesTableRef}/>
        <MedicationsTable ref={medicationTableRef}/>
        <ImmunizationTable ref={immunizationTableRef}/>
        <ImagingTable ref={imagingTableRef}/>
        <ConditionsTable ref={conditionTableRef}/>
        {/* <MedicalHistory /> */}
        {/* <DiagnosticRecords /> */}
        {/* <TreatmentPlan /> */}
        {/* <ProgressNotes />   */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default MainPage;
