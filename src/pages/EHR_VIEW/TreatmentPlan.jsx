import React from 'react';

const TreatmentPlan = () => {
  const currentTreatment = [
    { label: "Chemotherapy:", value: "Lorem ipsum dolor sit amet consectetur." },
    { label: "Radiation Therapy:", value: "Lorem ipsum dolor sit amet consectetur." },
    { label: "Immunotherapy:", value: "Lorem ipsum dolor sit amet consectetur." },
    { label: "Surgery:", value: "Lorem ipsum dolor sit amet consectetur." }
  ];

  const medicationRecords = [
    { label: "Drug Name:", value: "Lorem ipsum dolor sit amet consectetur." },
    { label: "Dosage:", value: "Lorem ipsum dolor sit amet consectetur." },
    { label: "Administration Schedule:", value: "Lorem ipsum dolor sit amet consectetur." }
  ];

  const clinicalTrials = [
    { label: "Participation Status:", value: "Active" },
    { label: "Protocol Name/Number:", value: "123456" }
  ];

  const supportiveCare = [
    { label: "Pain Management:", value: "Active" },
    { label: "Nutritional Support:", value: "Lorem ipsum dolor sit amet consectetur." },
    { label: "Psychological Counseling:", value: "Lorem ipsum dolor sit amet consectetur." }
  ];

  const renderSection = (title, data) => (
    <div className="flex flex-col mt-4 w-full max-md:max-w-full">
      <h4 className="font-medium text-blue-800 max-md:max-w-full">{title}</h4>
      <div className="flex flex-col mt-2 w-full text-neutral-700 max-md:max-w-full">
        {data.map((item, index) => (
          <div key={index} className="flex flex-wrap gap-4 items-center px-4 py-2 w-full bg-zinc-100 max-md:max-w-full">
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
      <h3 className="text-xl font-medium text-blue-800 max-md:max-w-full">Treatment Plan</h3>
      {renderSection("Current Treatment:", currentTreatment)}
      {renderSection("Medication Records:", medicationRecords)}
      {renderSection("Clinical Trials:", clinicalTrials)}
      {renderSection("Supportive Care:", supportiveCare)}
    </section>
  );
};

export default TreatmentPlan;