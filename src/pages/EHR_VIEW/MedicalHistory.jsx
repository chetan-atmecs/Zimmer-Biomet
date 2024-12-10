import React from 'react';

const MedicalHistory = () => {
  const oncologyHistory = [
    { label: "Type of Cancer:", value: "Leukemia" },
    { label: "Date of Diagnosis:", value: "03/12/2016" },
    { label: "TNM:", value: "N" },
    { label: "Grade:", value: "Loren Lipsum" }
  ];

  const generalMedicalHistory = [
    { label: "Past Medical Conditions:", value: "Lorem ipsum dolor sit amet consectetur." },
    { label: "Surgical History:", value: "Lorem ipsum dolor sit amet consectetur." },
    { label: "Family History of Cancer:", value: "Lorem ipsum dolor sit amet consectetur. Ullamcorper enim rhoncus fringilla aliquam ornare mi. Suscipit in. Lorem ipsum dolor sit amet consectetur. Ullamcorper enim rhoncus fringilla aliquam ornare mi. Suscipit in." }
  ];

  const labResults = [
    { label: "Past Medical Conditions:", value: "Lorem ipsum dolor sit amet consectetur." },
    { label: "Surgical History:", value: "Lorem ipsum dolor sit amet consectetur." },
    { label: "Family History of Cancer:", value: "Lorem ipsum dolor sit amet consectetur. Ullamcorper enim rhoncus fringilla aliquam ornare mi. Suscipit in." }
  ];

  const renderSection = (title, data) => (
    <div className="flex flex-col mt-4 w-full max-md:max-w-full bg-stone-50">
      <h4 className="font-medium text-blue-800 max-md:max-w-full ">{title}</h4>
      <div className="flex flex-col mt-2 w-full text-neutral-700 max-md:max-w-full ">
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
      <h3 className="text-xl font-medium text-blue-800 max-md:max-w-full bg-stone-50">Medical History</h3>
      {renderSection("Oncology History", oncologyHistory)}
      {renderSection("General Medical History", generalMedicalHistory)}
      {renderSection("Lab Results", labResults)}
    </section>
  );
};

export default MedicalHistory;