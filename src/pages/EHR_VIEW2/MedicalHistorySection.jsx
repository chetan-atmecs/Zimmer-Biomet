import React from 'react';
import SectionHeader from './SectionHeader';
import InfoRow from './InfoRow';

function MedicalHistorySection() {
  const oncologyHistory = [
    { label: 'Type of Cancer:', value: 'Breast Cancer' },
    { label: 'Date of Diagnosis:', value: '06/15/2020' },
    { label: 'TNM:', value: 'N' },
    { label: 'Grade:', value: 'Grade 2' }
  ];

  const generalMedicalHistory = [
    { label: 'Past Medical Conditions:', value: 'Hypertension, Diabetes' },
    { label: 'Surgical History:', value: 'Appendectomy (2015)' },
    { label: 'Family History of Cancer:', value: 'Father - Prostate Cancer' }
  ];

  const labResults = [
    { label: 'Past Medical Conditions:', value: 'Hypertension, Diabetes' },
    { label: 'Surgical History:', value: 'Appendectomy (2015)' },
    { label: 'Family History of Cancer:', value: 'Father - Prostate Cancer' }
  ];

  return (
    <section className="flex flex-col mt-6 w-full text-base max-md:max-w-full">
      <SectionHeader title="Medical History" />
      <div className="flex flex-col mt-4 w-full max-md:max-w-full">
        <h3 className="font-medium text-blue-800 max-md:max-w-full">Oncology History</h3>
        <div className="flex flex-col mt-2 w-full text-neutral-700 max-md:max-w-full">
          {oncologyHistory.map((item, index) => (
            <InfoRow key={index} label={item.label} value={item.value} />
          ))}
        </div>
      </div>
      <div className="flex flex-col mt-4 w-full max-md:max-w-full">
        <h3 className="font-medium text-blue-800 max-md:max-w-full">General Medical History</h3>
        <div className="flex flex-col mt-2 w-full text-neutral-700 max-md:max-w-full">
          {generalMedicalHistory.map((item, index) => (
            <InfoRow key={index} label={item.label} value={item.value} />
          ))}
        </div>
      </div>
      <div className="flex flex-col mt-4 w-full max-md:max-w-full">
        <h3 className="font-medium text-blue-800 max-md:max-w-full">Lab Results</h3>
        <div className="flex flex-col mt-2 w-full text-neutral-700 max-md:max-w-full">
          {labResults.map((item, index) => (
            <InfoRow key={index} label={item.label} value={item.value} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MedicalHistorySection;