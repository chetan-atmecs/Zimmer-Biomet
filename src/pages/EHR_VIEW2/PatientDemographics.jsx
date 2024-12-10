import React from 'react';
import InfoRow from './InfoRow';
import ImageReports from './ImageReports';
import SectionHeader from './SectionHeader';
import MedicalHistorySection from './MedicalHistorySection';
import DiagnosticRecordsSection from './DiagnosticRecordsSection';
import TreatmentPlanSection from './TreatmentPlanSection';
import ProgressNotesSection from './ProgressNotesSection';

function PatientDemographics() {
  const patientInfo = [
    { label: 'Full Name:', value: 'Emily Johnson' },
    { label: 'Date of Birth:', value: '05/28/1978' },
    { label: 'Gender:', value: 'Female' },
    { label: 'Phone Number:', value: '555-1234-5678' },
    { label: 'Emergency Phone Number:', value: '555-9876-5432' },
    { label: 'Email Address:', value: 'emily.johnson@example.com' },
    { label: 'Medical Record Number:', value: 'PA987654' },
    { label: 'Primary Case Physician:', value: 'Dr. Sarah Lee' },
    { label: 'Oncologist Name:', value: 'Dr. Michael Wong' }
  ];

  return (
    <main className="flex flex-col p-6 bg-white rounded-none max-md:px-5">
      <div className="flex flex-col w-full min-h-[440px] max-md:max-w-full">
        <SectionHeader title="Patient Demographics" />
        <div className="flex flex-wrap gap-4 mt-4 w-full max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink self-start text-base basis-4 min-w-[240px] text-neutral-700 max-md:max-w-full">
            {patientInfo.map((item, index) => (
              <InfoRow key={index} label={item.label} value={item.value} />
            ))}
          </div>
          <ImageReports />
        </div>
      </div>
      <MedicalHistorySection />
      <DiagnosticRecordsSection />
      <TreatmentPlanSection />
      <ProgressNotesSection />
    </main>
  );
}

export default PatientDemographics;