import React from 'react';

function TreatmentPlan() {
  return (
    <section className="flex flex-col p-4 w-full bg-white bg-opacity-10 max-md:max-w-full">
      <h2 className="text-xl font-medium text-white max-md:max-w-full">Treatment Plan</h2>
      <div className="flex flex-col mt-6 w-full max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <h3 className="text-base font-medium text-white">Current Treatment</h3>
          <div className="flex flex-col mt-4 w-full max-md:max-w-full">
            <div className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full">
              <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
                <label htmlFor="chemotherapy" className="gap-1 self-start pb-1 text-sm text-white whitespace-nowrap">Chemotherapy</label>
                <div className="flex gap-2.5 items-start px-2.5 pt-2.5 pb-16 w-full text-base bg-white rounded border border-white border-solid min-h-[100px] text-neutral-700 max-md:max-w-full">
                  <p id="chemotherapy" className="gap-2.5 self-stretch min-w-[240px]">Doxorubicin, Cyclophosphamide</p>
                </div>
              </div>
              <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
                <label htmlFor="radiationTherapy" className="gap-1 self-start pb-1 text-sm text-white">Radiation Therapy</label>
                <div className="flex gap-2.5 items-start px-2.5 pt-2.5 pb-16 w-full text-base bg-white rounded border border-white border-solid min-h-[100px] text-neutral-700 max-md:max-w-full">
                  <p id="radiationTherapy" className="gap-2.5 self-stretch min-w-[240px]">Whole breast radiation, 50 Gy in 25 fractions</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 items-center mt-4 w-full max-md:max-w-full">
              <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
                <label htmlFor="immunotherapy" className="gap-1 self-start pb-1 text-sm text-white whitespace-nowrap">Immunotherapy</label>
                <div className="flex gap-2.5 items-start px-2.5 pt-2.5 pb-16 w-full text-base bg-white rounded border border-white border-solid min-h-[100px] text-neutral-700 max-md:max-w-full">
                  <p id="immunotherapy" className="gap-2.5 self-stretch min-w-[240px]">Pembrolizumab</p>
                </div>
              </div>
              <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
                <label htmlFor="surgery" className="gap-1 self-start pb-1 text-sm text-white whitespace-nowrap">Surgery</label>
                <div className="flex gap-2.5 items-start px-2.5 pt-2.5 pb-16 w-full text-base bg-white rounded border border-white border-solid min-h-[100px] text-neutral-700 max-md:max-w-full">
                  <p id="surgery" className="gap-2.5 self-stretch min-w-[240px]">Lumpectomy with sentinel lymph node biopsy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-4 w-full max-md:max-w-full">
          <h3 className="text-base font-medium text-white">Medication Records</h3>
          <div className="flex flex-wrap gap-4 items-start mt-4 w-full max-md:max-w-full">
            <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
              <label htmlFor="drugName1" className="gap-1 self-start pb-1 text-sm text-white">Drug Name</label>
              <div className="flex gap-2.5 items-center px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700 max-md:max-w-full">
                <p id="drugName1" className="gap-2.5 self-stretch my-auto min-w-[240px]">Doxorubicin</p>
              </div>
            </div>
            <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
              <label htmlFor="dosage1" className="gap-1 self-start pb-1 text-sm text-white whitespace-nowrap">Dosage</label>
              <div className="flex gap-2.5 items-center px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700 max-md:max-w-full">
                <p id="dosage1" className="gap-2.5 self-stretch my-auto min-w-[240px]">60 mg/m² IV, every 3 weeks</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 items-start mt-4 w-full max-md:max-w-full">
            <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
              <label htmlFor="drugName2" className="gap-1 self-start pb-1 text-sm text-white">Drug Name</label>
              <div className="flex gap-2.5 items-center px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700 max-md:max-w-full">
                <p id="drugName2" className="gap-2.5 self-stretch my-auto min-w-[240px]">Cyclophosphamide.</p>
              </div>
            </div>
            <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
              <label htmlFor="dosage2" className="gap-1 self-start pb-1 text-sm text-white whitespace-nowrap">Dosage</label>
              <div className="flex gap-2.5 items-center px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700 max-md:max-w-full">
                <p id="dosage2" className="gap-2.5 self-stretch my-auto min-w-[240px]">600 mg/m² IV, every 3 weeks.</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-start mt-4 w-full max-md:max-w-full">
            <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
              <label htmlFor="administrationSchedule" className="gap-1 self-start pb-1 text-sm text-white">Administration Schedule</label>
              <div className="flex gap-2.5 items-center px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700 max-md:max-w-full">
                <p id="administrationSchedule" className="gap-2.5 self-stretch my-auto min-w-[240px]">Chemotherapy given on days 1 and 22 of a 42-day cycle</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-4 w-full max-md:max-w-full">
          <h3 className="text-base font-medium text-white">Clinical Trials</h3>
          <div className="flex flex-wrap gap-4 items-start mt-4 w-full max-md:max-w-full">
            <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
              <label htmlFor="clinicalTrialProtocol" className="gap-1 self-start pb-1 text-sm text-white">rotocol Name/Number</label>
              <div className="flex gap-2.5 items-center px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700 max-md:max-w-full">
                <p id="clinicalTrialProtocol" className="gap-2.5 self-stretch my-auto min-w-[240px]">3424</p>
              </div>
            </div>
            <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
              <label htmlFor="participationStatus" className="gap-1 self-start pb-1 text-sm text-white">Participation Status</label>
              <div id="participationStatus" className="flex flex-wrap gap-2.5 items-center p-2.5 w-full rounded min-h-[48px] max-md:max-w-full">
                <div className="flex gap-3 items-center self-stretch my-auto">
                  <div className="flex flex-col self-stretch my-auto w-7">
                    <div className="flex flex-col justify-center items-center px-1.5 w-7 h-7 rounded-2xl border-2 border-rose-400 border-solid">
                      <div className="flex shrink-0 bg-rose-400 rounded-2xl h-[18px] w-[18px]"/>
                    </div>
                  </div>
                  <p className="self-stretch my-auto text-base leading-none text-white">Yes</p>
                </div>
                <div className="flex gap-3 items-center self-stretch my-auto text-base leading-none text-white whitespace-nowrap">
                  <div className="flex shrink-0 self-stretch my-auto w-7 h-7 bg-white rounded-2xl border border-solid border-neutral-200"/>
                  <p className="self-stretch my-auto">No</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-4 w-full max-md:max-w-full">
          <h3 className="text-base font-medium text-white">Supportive Care</h3>
          <div className="flex flex-wrap gap-4 items-start mt-4 w-full max-md:max-w-full">
            <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
              <label htmlFor="painManagement" className="gap-1 self-start pb-1 text-sm text-white">Pain Management</label>
              <div className="flex gap-2.5 items-center px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700">
                <p id="painManagement" className="gap-2.5 self-stretch my-auto min-w-[240px]">Oxycodone 5 mg every 6 hours as needed</p>
              </div>
            </div>
            <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
              <label htmlFor="nutritionalSupport" className="gap-1 self-start pb-1 text-sm text-white">Nutritional Support</label>
              <div className="flex gap-2.5 items-center px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700">
                <p id="nutritionalSupport" className="gap-2.5 self-stretch my-auto min-w-[240px]">Nutritional counseling, high-protein supplements.</p>
              </div>
            </div>
            <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
              <label htmlFor="psychologicalCounseling" className="gap-1 self-start pb-1 text-sm text-white">Psychological Counseling</label>
              <div className="flex gap-2.5 items-center px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700">
                <p id="psychologicalCounseling" className="gap-2.5 self-stretch my-auto min-w-[240px]">Weekly individual therapy sessions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TreatmentPlan;