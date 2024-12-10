// import React from 'react';

// const PatientDemographics = () => {
//   const demographicData = [
//     { label: "Full Name:", value: "Alex Thomas" },
//     { label: "Date of Birth:", value: "08/15/1985" },
//     { label: "Gender:", value: "Male" },
//     { label: "Phone Number:", value: "9876543210" },
//     { label: "Emergency Phone Number:", value: "9876543210" },
//     { label: "Email Address:", value: "alex.thomas@sample.com" },
//     { label: "Medical Record Number:", value: "CA456456" },
//     { label: "Primary Case Physician:", value: "Rupert Mark" },
//     { label: "Oncologist Name:", value: "David Anderson" }
//   ];

//   return (
//     <section className="flex flex-col p-6 bg-white rounded-none max-md:px-5 max-md:max-w-full">
//       <div className="flex flex-col w-full min-h-[440px] max-md:max-w-full">
//         <h3 className="text-xl font-medium text-blue-800">Patient Demographics</h3>
//         <div className="flex flex-wrap gap-4 mt-4 w-full max-md:max-w-full">
//           <div className="flex flex-col flex-1 shrink self-start text-base basis-4 min-w-[240px] text-neutral-700 max-md:max-w-full">
//             {demographicData.map((item, index) => (
//               <div key={index} className="flex flex-wrap gap-4 items-center px-4 py-2 w-full bg-stone-50 max-md:max-w-full">
//                 <div className="self-stretch my-auto w-[250px]">{item.label}</div>
//                 <div className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
//                   {item.value}
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="flex flex-col py-4 pl-4 bg-blue-50 rounded border border-solid border-black border-opacity-20 min-w-[240px] w-[345px]">
//             <div className="flex gap-10 justify-between items-start w-full text-blue-800">
//               <h4 className="text-base font-medium">Image Reports</h4>
//               <button className="text-sm">View More</button>
//             </div>
//             <div className="flex flex-wrap gap-4 items-start mt-4 max-w-full w-[329px]">
//               {[1, 2, 3, 4].map((item) => (
//                 <div key={item} className="flex flex-col grow shrink min-h-[150px] w-[120px]">
//                   <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fdc7e0ad049cc903535f49c7a0ad4ffcbd1a18a7dbaa931a51c5e48d0961a63f?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6" alt={`Image report ${item}`} className="object-contain flex-1 aspect-square w-[150px]" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PatientDemographics;

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
    { label: 'Full Name:', value: 'Alex Thomas' },
    { label: 'Date of Birth:', value: '08/15/1985' },
    { label: 'Gender:', value: 'Male' },
    { label: 'Phone Number:', value: '9876543210' },
    { label: 'Emergency Phone Number:', value: '9876543210' },
    { label: 'Email Address:', value: 'alex.thomas@sample.com' },
    { label: 'Medical Record Number:', value: 'CA456456' },
    { label: 'Primary Case Physician:', value: 'Rupert Mark' },
    { label: 'Oncologist Name:', value: 'David Anderson' }
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