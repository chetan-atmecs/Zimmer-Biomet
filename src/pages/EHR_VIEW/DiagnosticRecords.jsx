import React from 'react';

const DiagnosticRecords = () => {
  const labResults = [
    { label: "CBC:", value: "Lorem ipsum dolor sit amet consectetur." },
    { label: "Tumor Markers:", value: "Lorem ipsum dolor sit amet consectetur." }
  ];

  const imagingReports = [
    { label: "MRI:", value: "Lorem ipsum dolor sit amet consectetur." },
    { label: "CT Scans:", value: "Lorem ipsum dolor sit amet consectetur." },
    { label: "PET Scans:", value: "Lorem ipsum dolor sit amet consectetur." },
    { label: "X-rays:", value: "Lorem ipsum dolor sit amet consectetur." }
  ];

  const biopsyReports = [
    { label: "Histopathology:", value: "Lorem ipsum dolor sit amet consectetur." },
    { label: "Molecular/Genetic Tests:", value: "Lorem ipsum dolor sit amet consectetur." }
  ];

  const renderSection = (title, data) => (
    <div className="flex flex-col mt-4 w-full max-md:max-w-full">
      <h4 className="font-medium text-blue-800 max-md:max-w-full">{title}</h4>
      <div className="flex flex-col mt-2 w-full text-neutral-700 max-md:max-w-full">
        {data.map((item, index) => (
          <div key={index} className="flex flex-wrap gap-4 items-center px-4 py-2 w-full bg-stone-50 max-md:max-w-full">
            <div className="self-stretch my-auto w-[250px]">{item.label}</div>
            <div className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="flex flex-col mt-6 w-full text-base max-md:max-w-full">
      <h3 className="text-xl font-medium text-blue-800 max-md:max-w-full">Diagnostic Records</h3>
      {renderSection("Lab Results", labResults)}
      {renderSection("Imaging Reports:", imagingReports)}
      {renderSection("Biopsy Reports:", biopsyReports)}
    </section>
  );
};

export default DiagnosticRecords;