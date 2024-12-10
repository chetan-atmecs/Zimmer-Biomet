import React, { useState } from 'react';

function ProgressNotes() {
  // Define state variables to store form data
  const [formData, setFormData] = useState({
    consultationDate: '',
    summary: '',
    nursingDate: '',
    vitalSigns: '',
    sideEffectsObserved: '',
    painScore: '',
    fatigueLevels: '',
    nausea: 'None',
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section className="flex flex-col p-4 w-full rounded-none bg-white bg-opacity-10 max-md:max-w-full">
      <h2 className="text-xl font-medium text-white max-md:max-w-full">Progress Notes</h2>
      
      {/* Physician Notes */}
      <div className="flex flex-col mt-6 w-full max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <h3 className="text-base font-medium text-white">Physician Notes</h3>
          <div className="flex flex-wrap gap-4 items-start mt-4 w-full max-md:max-w-full">
            <div className="flex flex-col w-[207px]">
              <label htmlFor="consultationDate" className="gap-1 self-start pb-1 text-sm text-white">Consultation Date</label>
              <input
                type="date"
                id="consultationDate"
                name="consultationDate"
                value={formData.consultationDate}
                onChange={handleInputChange}
                className="px-2.5 py-3 w-full text-base bg-white rounded border border-white border-solid text-neutral-700"
              />
            </div>

            <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
              <label htmlFor="summary" className="gap-1 self-start pb-1 text-sm text-white whitespace-nowrap">Summary</label>
              <textarea
                id="summary"
                name="summary"
                value={formData.summary}
                onChange={handleInputChange}
                className="px-2.5 pt-2.5 pb-16 w-full text-base bg-white rounded border border-white border-solid min-h-[100px] text-neutral-700 max-md:max-w-full"
                placeholder="Enter a summary here"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Nursing Notes */}
      <div className="flex flex-col mt-4 w-full max-md:max-w-full">
        <h3 className="text-base font-medium text-white">Nursing Notes</h3>
        <div className="flex flex-wrap gap-4 items-start mt-4 w-full max-md:max-w-full">
          <div className="flex flex-col whitespace-nowrap w-[207px]">
            <label htmlFor="nursingDate" className="gap-1 self-start pb-1 text-sm text-white">Date</label>
            <input
              type="date"
              id="nursingDate"
              name="nursingDate"
              value={formData.nursingDate}
              onChange={handleInputChange}
              className="px-2.5 py-3 w-full text-base bg-white rounded border border-white border-solid text-neutral-700"
            />
          </div>

          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
            <label htmlFor="vitalSigns" className="gap-1 self-start pb-1 text-sm text-white">Vital Signs</label>
            <textarea
              id="vitalSigns"
              name="vitalSigns"
              value={formData.vitalSigns}
              onChange={handleInputChange}
              className="px-2.5 pt-2.5 pb-16 w-full text-base bg-white rounded border border-white border-solid min-h-[100px] text-neutral-700 max-md:max-w-full"
              placeholder="e.g., BP: 120/80, HR: 72"
            />
          </div>

          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
            <label htmlFor="sideEffectsObserved" className="gap-1 self-start pb-1 text-sm text-white">Side Effects Observed</label>
            <textarea
              id="sideEffectsObserved"
              name="sideEffectsObserved"
              value={formData.sideEffectsObserved}
              onChange={handleInputChange}
              className="px-2.5 pt-2.5 pb-16 w-full text-base bg-white rounded border border-white border-solid min-h-[100px] text-neutral-700 max-md:max-w-full"
              placeholder="e.g., Nausea, fatigue"
            />
          </div>
        </div>
      </div>

      {/* Symptom Tracking */}
      <div className="flex flex-col mt-4 w-full max-md:max-w-full">
        <h3 className="text-base font-medium text-white">Symptom Tracking</h3>
        <div className="flex flex-wrap gap-4 items-start mt-4 w-full max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
            <label htmlFor="painScore" className="gap-1 self-start pb-1 text-sm text-white">Pain Score</label>
            <input
              type="number"
              id="painScore"
              name="painScore"
              value={formData.painScore}
              onChange={handleInputChange}
              className="px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
              placeholder="Enter pain score (0-10)"
            />
          </div>

          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
            <label htmlFor="fatigueLevels" className="gap-1 self-start pb-1 text-sm text-white">Fatigue Levels</label>
            <input
              type="text"
              id="fatigueLevels"
              name="fatigueLevels"
              value={formData.fatigueLevels}
              onChange={handleInputChange}
              className="px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
              placeholder="e.g., Mild, Moderate, Severe"
            />
          </div>

          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
            <label htmlFor="nausea" className="gap-1 self-start pb-1 text-sm text-white">Nausea</label>
            <select
              id="nausea"
              name="nausea"
              value={formData.nausea}
              onChange={handleInputChange}
              className="px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
            >
              <option value="None">None</option>
              <option value="Mild">Mild</option>
              <option value="Moderate">Moderate</option>
              <option value="Severe">Severe</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgressNotes;
