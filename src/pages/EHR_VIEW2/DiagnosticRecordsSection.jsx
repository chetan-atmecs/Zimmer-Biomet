import React from 'react';
import SectionHeader from './SectionHeader';
import InfoRow from './InfoRow';

function DiagnosticRecordsSection() {
  const labResults = [
    { label: 'CBC:', value: 'Hemoglobin: 12.5 g/dL, Platelets: 250,000/uL' },
    { label: 'Tumor Markers:', value: 'CEA: 5.2 ng/mL, CA-15-3: 35 U/mL' }
  ];

  const imagingReports = [
    { label: 'MRI:', value: 'Findings: 2.5 cm mass in upper outer quadrant of left breast' },
    { label: 'CT Scans:', value: 'No evidence of metastatic disease' },
    { label: 'PET Scans:', value: 'Increased FDG uptake in left breast mass, no distant lesions' },
    { label: 'X-rays:', value: 'No significant findings' }
  ];

  const biopsyReports = [
    { label: 'Histopathology:', value: 'Invasive ductal carcinoma, ER+, PR+, HER2-' },
    { label: 'Molecular/Genetic Tests:', value: 'BRCA1/2: Negative' }
  ];

  return (
    <section className="flex flex-col mt-6 w-full text-base max-md:max-w-full">
      <SectionHeader title="Diagnostic Records" />
      <div className="flex flex-col mt-4 w-full max-md:max-w-full">
        <h3 className="font-medium text-blue-800 max-md:max-w-full">Lab Results</h3>
        <div className="flex flex-col mt-2 w-full text-neutral-700 max-md:max-w-full">
          {labResults.map((item, index) => (
            <InfoRow key={index} label={item.label} value={item.value} />
          ))}
        </div>
      </div>
      <div className="flex flex-col mt-4 w-full max-md:max-w-full">
        <h3 className="font-medium text-blue-800 max-md:max-w-full">Imaging Reports:</h3>
        <div className="flex flex-col mt-2 w-full text-neutral-700 max-md:max-w-full">
          {imagingReports.map((item, index) => (
            <InfoRow key={index} label={item.label} value={item.value} />
          ))}
        </div>
      </div>
      <div className="flex flex-col mt-4 w-full max-md:max-w-full">
        <h3 className="font-medium text-blue-800 max-md:max-w-full">Biopsy Reports:</h3>
        <div className="flex flex-col mt-2 w-full text-neutral-700 max-md:max-w-full">
          {biopsyReports.map((item, index) => (
            <InfoRow key={index} label={item.label} value={item.value} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default DiagnosticRecordsSection;