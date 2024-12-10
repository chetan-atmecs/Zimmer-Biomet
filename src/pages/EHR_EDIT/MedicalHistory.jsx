import React, { useState } from 'react';

function MedicalHistory() {
  // Define state variables to store form data
  const [formData, setFormData] = useState({
    cancerType: '',
    diagnosisDate: '',
    staging: { T: '', N: '', M: '' },
    cancerGrade: '',
    medicalConditions: '',
    surgicalHistory: '',
    familyCancerHistory: '',
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle staging (T, N, M) separately
  const handleStagingChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      staging: { ...formData.staging, [name]: value },
    });
  };

  return (
    <section className="flex flex-col p-4 w-full bg-white bg-opacity-10 max-md:max-w-full">
      <h2 className="text-xl font-medium text-white max-md:max-w-full">Medical History</h2>
      
      {/* Oncological History */}
      <div className="flex flex-col mt-6 w-full max-md:max-w-full">
        <h3 className="text-base font-medium text-white">Oncological History</h3>
        <div className="flex flex-wrap gap-4 items-start mt-4 w-full max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
            <label htmlFor="cancerType" className="gap-1 self-start pb-1 text-sm text-white">Type of Cancer</label>
            <input
              type="text"
              id="cancerType"
              name="cancerType"
              value={formData.cancerType}
              onChange={handleInputChange}
              className="px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid text-neutral-700"
              placeholder="e.g., Breast Cancer"
            />
          </div>

          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
            <label htmlFor="diagnosisDate" className="gap-1 self-start pb-1 text-sm text-white">Date of Diagnosis</label>
            <input
              type="date"
              id="diagnosisDate"
              name="diagnosisDate"
              value={formData.diagnosisDate}
              onChange={handleInputChange}
              className="px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid text-neutral-700"
            />
          </div>

          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
            <label htmlFor="staging" className="gap-1 self-start pb-1 text-sm text-white">Staging (TNM)</label>
            <div id="staging" className="flex gap-2.5 items-start w-full text-base text-neutral-700">
              <input
                type="text"
                name="T"
                value={formData.staging.T}
                onChange={handleStagingChange}
                placeholder="T"
                className="flex flex-1 px-2.5 py-4 bg-white rounded border border-white border-solid"
              />
              <input
                type="text"
                name="N"
                value={formData.staging.N}
                onChange={handleStagingChange}
                placeholder="N"
                className="flex flex-1 px-2.5 py-4 bg-white rounded border border-white border-solid"
              />
              <input
                type="text"
                name="M"
                value={formData.staging.M}
                onChange={handleStagingChange}
                placeholder="M"
                className="flex flex-1 px-2.5 py-4 bg-white rounded border border-white border-solid"
              />
            </div>
          </div>

          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
            <label htmlFor="cancerGrade" className="gap-1 self-start pb-1 text-sm text-white whitespace-nowrap">Grade</label>
            <input
              type="text"
              id="cancerGrade"
              name="cancerGrade"
              value={formData.cancerGrade}
              onChange={handleInputChange}
              className="px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid text-neutral-700"
              placeholder="e.g., Grade 2"
            />
          </div>
        </div>
      </div>

      {/* General Medical History */}
      <div className="flex flex-col mt-4 w-full max-md:max-w-full">
        <h3 className="text-base font-medium text-white">General Medical History</h3>
        <div className="flex flex-wrap gap-4 items-start mt-4 w-full max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
            <label htmlFor="medicalConditions" className="gap-1 self-start pb-1 text-sm text-white">Past Medical Conditions</label>
            <textarea
              id="medicalConditions"
              name="medicalConditions"
              value={formData.medicalConditions}
              onChange={handleInputChange}
              className="px-2.5 pt-2.5 pb-4 w-full text-base bg-white rounded border border-white border-solid text-neutral-700 min-h-[100px]"
              placeholder="e.g., Hypertension, Diabetes"
            />
          </div>

          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
            <label htmlFor="surgicalHistory" className="gap-1 self-start pb-1 text-sm text-white">Surgical History</label>
            <textarea
              id="surgicalHistory"
              name="surgicalHistory"
              value={formData.surgicalHistory}
              onChange={handleInputChange}
              className="px-2.5 pt-2.5 pb-4 w-full text-base bg-white rounded border border-white border-solid text-neutral-700 min-h-[100px]"
              placeholder="e.g., Appendectomy (2015)"
            />
          </div>

          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
            <label htmlFor="familyCancerHistory" className="gap-1 self-start pb-1 text-sm text-white">Family History of Cancer</label>
            <textarea
              id="familyCancerHistory"
              name="familyCancerHistory"
              value={formData.familyCancerHistory}
              onChange={handleInputChange}
              className="px-2.5 pt-2.5 pb-4 w-full text-base bg-white rounded border border-white border-solid text-neutral-700 min-h-[100px]"
              placeholder="e.g., Father - Prostate Cancer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MedicalHistory;
