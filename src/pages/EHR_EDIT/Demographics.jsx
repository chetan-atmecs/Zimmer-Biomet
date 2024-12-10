import React from 'react';

function Demographics() {
  return (
    <section className="flex flex-col p-4 w-full bg-stone-50 bg-opacity-10 max-md:max-w-full rounded-b-lg rounded-t-none">
      <h2 className="text-xl font-medium text-white max-md:max-w-full">Patient Demographics</h2>
      <div className="flex flex-col mt-6 w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full">
          {/* Full Name */}
          <div className="flex flex-col self-stretch my-auto w-[207px]">
            <label htmlFor="fullName" className="gap-1 self-start pb-1 text-sm text-white">Full Name</label>
            <input 
              type="text" 
              id="fullName" 
              name="fullName" 
              placeholder="Emily Johnson" 
              className="px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
            />
          </div>

          {/* Date of Birth */}
          <div className="flex flex-col self-stretch my-auto w-[207px]">
            <label htmlFor="dob" className="gap-1 self-start pb-1 text-sm text-white">Date of Birth</label>
            <input 
              type="date" 
              id="dob" 
              name="dob" 
              defaultValue="1978-05-28" 
              className="px-2.5 py-3 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
            />
          </div>

          {/* Gender */}
          <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
            <label htmlFor="gender" className="gap-1 self-start pb-1 text-sm text-white whitespace-nowrap">Gender</label>
            <div id="gender" className="flex flex-wrap gap-2.5 items-center p-2.5 w-full rounded min-h-[48px] max-md:max-w-full">
              <div className="flex gap-3 items-center self-stretch my-auto">
                <input type="radio" id="female" name="gender" value="female" className="w-7 h-7 border-rose-400 border-solid" defaultChecked />
                <label htmlFor="female" className="text-base leading-none text-white">Female</label>
              </div>
              <div className="flex gap-3 items-center self-stretch my-auto">
                <input type="radio" id="male" name="gender" value="male" className="w-7 h-7 border-neutral-200 border-solid" />
                <label htmlFor="male" className="text-base leading-none text-white">Male</label>
              </div>
              <div className="flex gap-3 items-center self-stretch my-auto">
                <input type="radio" id="other" name="gender" value="other" className="w-7 h-7 border-neutral-200 border-solid" />
                <label htmlFor="other" className="text-base leading-none text-white">Other</label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 items-start mt-4 w-full max-md:max-w-full">
          {/* Phone Number */}
          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
            <label htmlFor="phoneNumber" className="gap-1 self-start pb-1 text-sm text-white">Phone Number</label>
            <input 
              type="tel" 
              id="phoneNumber" 
              name="phoneNumber" 
              placeholder="555-1234-5678" 
              className="px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
            />
          </div>

          {/* Emergency Phone Number */}
          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
            <label htmlFor="emergencyPhoneNumber" className="gap-1 self-start pb-1 text-sm text-white">Emergency Phone Number</label>
            <input 
              type="tel" 
              id="emergencyPhoneNumber" 
              name="emergencyPhoneNumber" 
              placeholder="555-9876-5432" 
              className="px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
            />
          </div>

          {/* Email Address */}
          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
            <label htmlFor="emailAddress" className="gap-1 self-start pb-1 text-sm text-white">Email Address</label>
            <input 
              type="email" 
              id="emailAddress" 
              name="emailAddress" 
              placeholder="emily.johnson@example.com" 
              className="px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 items-start mt-4 w-full max-md:max-w-full">
          {/* Medical Record Number */}
          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
            <label htmlFor="mrn" className="gap-1 self-start pb-1 text-sm text-white">Medical Record Number (MRN)</label>
            <input 
              type="text" 
              id="mrn" 
              name="mrn" 
              placeholder="PA987654" 
              className="px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
            />
          </div>

          {/* Primary Case Physician */}
          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
            <label htmlFor="primaryPhysician" className="gap-1 self-start pb-1 text-sm text-white">Primary Case Physician</label>
            <input 
              type="text" 
              id="primaryPhysician" 
              name="primaryPhysician" 
              placeholder="Dr. Sarah Lee" 
              className="px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
            />
          </div>

          {/* Oncologist Name */}
          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
            <label htmlFor="oncologistName" className="gap-1 self-start pb-1 text-sm text-white">Oncologist Name</label>
            <input 
              type="text" 
              id="oncologistName" 
              name="oncologistName" 
              placeholder="Dr. Michael Wong" 
              className="px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Demographics;
