import React from 'react';

const ProgressNotes = () => {
  const physicianNotes = [
    { label: "Consultation Date:", value: "MM/DD/YYYY" },
    { label: "Summary:", value: "Lorem ipsum dolor sit amet consectetur." }
  ];

  const nursingNotes = [
    { label: "Date:", value: "MM/DD/YYYY" },
    { label: "Vital Signs:", value: "Lorem ipsum dolor sit amet consectetur." },
    { label: "Side Effects Observed:", value: "Lorem ipsum dolor sit amet consectetur." }
  ];

  const symptomTracking = [
    { label: "Pain Score:", value: "250" },
    { label: "Fatigue Levels:", value: "8" },
    { label: "Nausea:", value: "Moderate" }
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
      <h3 className="text-xl font-medium text-blue-800 max-md:max-w-full">Progress Notes</h3>
      {renderSection("Physician Notes:", physicianNotes)}
      {renderSection("Nursing Notes:", nursingNotes)}
      {renderSection("Symptom Tracking:", symptomTracking)}
    </section>
  );
};

export default ProgressNotes;