import React from 'react';
import SectionHeader from './SectionHeader';
import InfoRow from './InfoRow';

function TreatmentPlanSection() {
  const currentTreatment = [
    { label: 'Chemotherapy:', value: 'Doxorubicin, Cyclophosphamide' },
    { label: 'Radiation Therapy:', value: 'Whole breast radiation, 50 Gy in 25 fractions' },
    { label: 'Immunotherapy:', value: 'Pembrolizumab' },
    { label: 'Surgery:', value: 'Lumpectomy with sentinel lymph node biopsy' }
  ];

  const medicationRecords = [
    { label: 'Drug Name:', value: 'Doxorubicin' },
    { label: 'Dosage:', value: '60 mg/m² IV, every 3 weeks' },
    { label: 'Administration Schedule:', value: 'Chemotherapy given on days 1 and 22 of a 42-day cycle' }
  ];

  const clinicalTrials = [
    { label: 'Participation Status:', value: 'Active' },
    { label: 'Protocol Name/Number:', value: '123456' }
  ];

  const supportiveCare = [
    { label: 'Pain Management:', value: 'Oxycodone 5 mg every 6 hours as needed' },
    { label: 'Nutritional Support:', value: 'Nutritional counseling, high-protein supplements' },
    { label: 'Psychological Counseling:', value: 'Weekly individual therapy sessions' }
  ];

  return (
    <section className="flex flex-col mt-6 w-full text-base max-md:max-w-full">
      <SectionHeader title="Treatment Plan" />
      <div className="flex flex-col mt-4 w-full max-md:max-w-full">
        <h3 className="font-medium text-blue-800 max-md:max-w-full">Current Treatment:</h3>
        <div className="flex flex-col mt-2 w-full text-neutral-700 max-md:max-w-full">
          {currentTreatment.map((item, index) => (
            <InfoRow key={index} label={item.label} value={item.value} />
          ))}
        </div>
      </div>
      <div className="flex flex-col mt-4 w-full max-md:max-w-full">
        <h3 className="font-medium text-blue-800 max-md:max-w-full">Medication Records:</h3>
        <div className="flex flex-col mt-2 w-full text-neutral-700 max-md:max-w-full">
          {medicationRecords.map((item, index) => (
            <InfoRow key={index} label={item.label} value={item.value} />
          ))}
        </div>
      </div>
      <div className="flex flex-col mt-4 w-full max-md:max-w-full">
        <h3 className="font-medium text-blue-800 max-md:max-w-full">Clinical Trials:</h3>
        <div className="flex flex-col mt-2 w-full text-neutral-700 max-md:max-w-full">
          {clinicalTrials.map((item, index) => (
            <InfoRow key={index} label={item.label} value={item.value} />
          ))}
        </div>
      </div>
      <div className="flex flex-col mt-4 w-full max-md:max-w-full">
        <h3 className="font-medium text-blue-800 max-md:max-w-full">Supportive Care:</h3>
        <div className="flex flex-col mt-2 w-full text-neutral-700 max-md:max-w-full">
          {supportiveCare.map((item, index) => (
            <InfoRow key={index} label={item.label} value={item.value} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default TreatmentPlanSection;