import React from 'react';
import SectionHeader from './SectionHeader';
import InfoRow from './InfoRow';

function ProgressNotesSection() {
  const physicianNotes = [
    { label: 'Consultation Date:', value: '08/15/2020' },
    { label: 'Summary:', value: 'Patient presented with a palpable mass in the left breast. Diagnostic workup confirmed invasive ductal carcinoma. Treatment plan includes neoadjuvant chemotherapy, followed by lumpectomy and radiation therapy.' }
  ];

  const nursingNotes = [
    { label: 'Date:', value: '08/17/2020' },
    { label: 'Vital Signs:', value: 'BP: 120/80, HR: 72, Temp: 98.6°F, SpO2: 97%' },
    { label: 'Side Effects Observed:', value: 'Nausea, fatigue, hair loss' }
  ];

  const symptomTracking = [
    { label: 'Pain Score:', value: '250' },
    { label: 'Fatigue Levels:', value: '8' },
    { label: 'Nausea:', value: 'Moderate' }
  ];

  return (
    <section className="flex flex-col mt-6 w-full text-base max-md:max-w-full">
      <SectionHeader title="Progress Notes" />
      <div className="flex flex-col mt-4 w-full max-md:max-w-full">
        <h3 className="font-medium text-blue-800 max-md:max-w-full">Physician Notes:</h3>
        <div className="flex flex-col mt-2 w-full text-neutral-700 max-md:max-w-full">
          {physicianNotes.map((item, index) => (
            <InfoRow key={index} label={item.label} value={item.value} />
          ))}
        </div>
      </div>
      <div className="flex flex-col mt-4 w-full max-md:max-w-full">
        <h3 className="font-medium text-blue-800 max-md:max-w-full">Nursing Notes:</h3>
        <div className="flex flex-col mt-2 w-full text-neutral-700 max-md:max-w-full">
          {nursingNotes.map((item, index) => (
            <InfoRow key={index} label={item.label} value={item.value} />
          ))}
        </div>
      </div>
      <div className="flex flex-col mt-4 w-full max-md:max-w-full">
        <h3 className="font-medium text-blue-800 max-md:max-w-full">Symptom Tracking:</h3>
        <div className="flex flex-col mt-2 w-full text-neutral-700 max-md:max-w-full">
          {symptomTracking.map((item, index) => (
            <InfoRow key={index} label={item.label} value={item.value} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgressNotesSection;