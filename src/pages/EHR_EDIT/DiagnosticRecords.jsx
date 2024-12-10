import React, { useState } from 'react';

function DiagnosticRecords() {
  const [cbc, setCbc] = useState('Hemoglobin: 12.5 g/dL, Platelets: 250,000/uL');
  const [tumorMarkers, setTumorMarkers] = useState('CEA: 5.2 ng/mL, CA-15-3: 35 U/mL');
  const [mri, setMri] = useState('Findings: 2.5 cm mass in upper outer quadrant of left breast');
  const [ctScans, setCtScans] = useState('No evidence of metastatic disease');
  const [petScans, setPetScans] = useState('Increased FDG uptake in left breast mass, no distant lesions');
  const [xrays, setXrays] = useState('No significant findings');
  const [histopathology, setHistopathology] = useState('Invasive ductal carcinoma, ER+, PR+, HER2-');
  const [molecularTests, setMolecularTests] = useState('BRCA1/2: Negative');

  return (
    <section className="flex flex-col p-4 w-full bg-white bg-opacity-10 max-md:max-w-full">
      <h2 className="text-xl font-medium text-white max-md:max-w-full">Diagnostic Records</h2>
      
      <div className="flex flex-col mt-6 w-full max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <h3 className="text-base font-medium text-white">Lab Results</h3>
          <div className="flex flex-wrap gap-4 items-start mt-4 w-full max-md:max-w-full">
            <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
              <label htmlFor="cbc" className="gap-1 self-start pb-1 text-sm text-white whitespace-nowrap">CBC</label>
              <textarea 
                id="cbc" 
                value={cbc} 
                onChange={(e) => setCbc(e.target.value)} 
                className="flex gap-2.5 items-center px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
              />
            </div>
            <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
              <label htmlFor="tumorMarkers" className="gap-1 self-start pb-1 text-sm text-white">Tumor Markers</label>
              <textarea 
                id="tumorMarkers" 
                value={tumorMarkers} 
                onChange={(e) => setTumorMarkers(e.target.value)} 
                className="flex gap-2.5 items-center px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-4 w-full max-md:max-w-full">
          <h3 className="text-base font-medium text-white">Imaging Reports</h3>
          <div className="flex flex-wrap gap-4 items-start mt-4 w-full max-md:max-w-full">
            <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
              <label htmlFor="mri" className="gap-1 self-start pb-1 text-sm text-white">MRI</label>
              <textarea 
                id="mri" 
                value={mri} 
                onChange={(e) => setMri(e.target.value)} 
                className="flex gap-2.5 items-center py-4 px-2.5 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
              />
            </div>
            <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
              <label htmlFor="ctScans" className="gap-1 self-start pb-1 text-sm text-white">CT Scans</label>
              <textarea 
                id="ctScans" 
                value={ctScans} 
                onChange={(e) => setCtScans(e.target.value)} 
                className="flex gap-2.5 items-center px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
              />
            </div>
            <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
              <label htmlFor="petScans" className="gap-1 self-start pb-1 text-sm text-white">PET Scans</label>
              <textarea 
                id="petScans" 
                value={petScans} 
                onChange={(e) => setPetScans(e.target.value)} 
                className="flex gap-2.5 items-center px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
              />
            </div>
            <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
              <label htmlFor="xrays" className="gap-1 self-start pb-1 text-sm text-white">X-rays</label>
              <textarea 
                id="xrays" 
                value={xrays} 
                onChange={(e) => setXrays(e.target.value)} 
                className="flex gap-2.5 items-center px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-4 w-full max-md:max-w-full">
          <h3 className="text-base font-medium text-white">Biopsy Reports</h3>
          <div className="flex flex-wrap gap-4 items-start mt-4 w-full max-md:max-w-full">
            <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
              <label htmlFor="histopathology" className="gap-1 self-start pb-1 text-sm text-white whitespace-nowrap">Histopathology</label>
              <textarea 
                id="histopathology" 
                value={histopathology} 
                onChange={(e) => setHistopathology(e.target.value)} 
                className="flex gap-2.5 items-center px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
              />
            </div>
            <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
              <label htmlFor="molecularTests" className="gap-1 self-start pb-1 text-sm text-white">Molecular/Genetic Tests</label>
              <textarea 
                id="molecularTests" 
                value={molecularTests} 
                onChange={(e) => setMolecularTests(e.target.value)} 
                className="flex gap-2.5 items-center px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DiagnosticRecords;
