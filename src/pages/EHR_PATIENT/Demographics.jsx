import {React, useState} from 'react';

function Demographics({ehrDetailData, setEhrDetailData}) {
  console.log("in Demographic")
  console.log(ehrDetailData)

  const [showPersonalInfo, setShowPersonalInfo] = useState(true);
  
  // Function to simulate API call with random delay up to 10 seconds
  const togglePersonalInfo = () => {
    const randomDelay = Math.floor(Math.random() * 5000); // Random delay between 0 to 10 sec
    setTimeout(() => {
      setShowPersonalInfo((prev) => !prev);
    }, randomDelay);
  };

  return (
    <section className="flex flex-col p-4 w-full bg-stone-50 bg-opacity-10 max-md:max-w-full rounded-b-lg rounded-t-none">

    <div className="flex items-center mt-4">
      <label className="mr-3 text-white">Hide Personal Info</label>
      <label className="switch">
        <input type="checkbox" onChange={togglePersonalInfo} />
        <span className="slider"></span>
      </label>
    </div>



      <h2 className="text-xl font-medium text-white max-md:max-w-full">Patient Demographics</h2>
      <div className="flex flex-col mt-6 w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full">
          {/* Prefix */}
          <div className="flex flex-col self-stretch my-auto w-[207px]">
            <label htmlFor="prefix" className="gap-1 self-start pb-1 text-sm text-white">Prefix</label>
            <input 
              type="text" 
              id="prefix" 
              name="prefix" 
              placeholder="Mrs." 
              value={ehrDetailData.prefix}
              className="px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
            />
          </div>

          {showPersonalInfo && (
            <div className="flex flex-col self-stretch my-auto w-[207px]">
              <label htmlFor="fullName" className="gap-1 self-start pb-1 text-sm text-white">Full Name</label>
              <input 
                type="text" 
                id="fullName" 
                name="fullName" 
                placeholder="Claudia Considine"
                value={(ehrDetailData.first || "") + " " + (ehrDetailData.last || "")} 
                className="px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
              />
            </div>
          )}

          {/* Middle Name */}
          {showPersonalInfo && <div className="flex flex-col self-stretch my-auto w-[207px]">
            <label htmlFor="middleName" className="gap-1 self-start pb-1 text-sm text-white">Middle Name</label>
            <input 
              type="text" 
              id="middleName" 
              name="middleName" 
              placeholder="Willena"
              value={ehrDetailData.middle} 
              className="px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
            />
          </div>}
          

          {/* Maiden Name */}
          <div className="flex flex-col self-stretch my-auto w-[207px]">
            <label htmlFor="maidenName" className="gap-1 self-start pb-1 text-sm text-white">Maiden Name</label>
            <input 
              type="text" 
              id="maidenName" 
              name="maidenName" 
              value={ehrDetailData.maiden}
              placeholder="Walker" 
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
              value={ehrDetailData.birthdate || ""}
              placeholder="1989-10-06"
              className="px-2.5 py-3 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
            />
          </div>

          {/* Marital Status */}
          <div className="flex flex-col self-stretch my-auto w-[207px]">
            <label htmlFor="maritalStatus" className="gap-1 self-start pb-1 text-sm text-white">Marital Status</label>
            <input 
              type="text" 
              id="maritalStatus" 
              name="maritalStatus" 
              value={ehrDetailData.marital}
              placeholder="M" 
              className="px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
            />
          </div>

          {/* Race */}
          <div className="flex flex-col self-stretch my-auto w-[207px]">
            <label htmlFor="race" className="gap-1 self-start pb-1 text-sm text-white">Race</label>
            <input 
              type="text" 
              id="race" 
              name="race"
              value={ehrDetailData.race}
              placeholder="White" 
              className="px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
            />
          </div>

          {/* Ethnicity */}
          <div className="flex flex-col self-stretch my-auto w-[207px]">
            <label htmlFor="ethnicity" className="gap-1 self-start pb-1 text-sm text-white">Ethnicity</label>
            <input 
              type="text" 
              id="ethnicity" 
              name="ethnicity" 

              value={ehrDetailData.ethnicity}
              placeholder="Non-Hispanic" 
              className="px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
            />
          </div>

          {/* Gender */}
          <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
  <label htmlFor="gender" className="gap-1 self-start pb-1 text-sm text-white whitespace-nowrap">Gender</label>
  <div id="gender" className="flex flex-wrap gap-2.5 items-center p-2.5 w-full rounded min-h-[48px] max-md:max-w-full">
    <div className="flex gap-3 items-center self-stretch my-auto">
      <input 
        type="radio" 
        id="female" 
        name="gender" 
        value="F" 
        checked={ehrDetailData.gender === 'F'} 
        readOnly 
        className="w-7 h-7 border-rose-400 border-solid"
      />
      <label htmlFor="female" className="text-base leading-none text-white">Female</label>
    </div>
    <div className="flex gap-3 items-center self-stretch my-auto">
      <input 
        type="radio" 
        id="male" 
        name="gender" 
        value="M" 
        checked={ehrDetailData.gender === 'M'} 
        readOnly 
        className="w-7 h-7 border-neutral-200 border-solid"
      />
      <label htmlFor="male" className="text-base leading-none text-white">Male</label>
    </div>
    <div className="flex gap-3 items-center self-stretch my-auto">
      <input 
        type="radio" 
        id="other" 
        name="gender" 
        value="O" 
        checked={ehrDetailData.gender === 'O'} 
        readOnly 
        className="w-7 h-7 border-neutral-200 border-solid"
      />
      <label htmlFor="other" className="text-base leading-none text-white">Other</label>
    </div>
  </div>
</div>
        </div>

        <div className="flex flex-wrap gap-4 items-start mt-4 w-full max-md:max-w-full">
          {/* Phone Number */}
          {/* <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
            <label htmlFor="phoneNumber" className="gap-1 self-start pb-1 text-sm text-white">Phone Number</label>
            <input 
              type="tel" 
              id="phoneNumber" 
              name="phoneNumber" 
              value={ehrDetailData.}
              placeholder="555-1234-5678" 
              className="px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
            /> */}
          </div>

          {/* Emergency Phone Number */}
          {/* <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
            <label htmlFor="emergencyPhoneNumber" className="gap-1 self-start pb-1 text-sm text-white">Emergency Phone Number</label>
            <input 
              type="tel" 
              id="emergencyPhoneNumber" 
              name="emergencyPhoneNumber" 
              placeholder="555-9876-5432" 
              className="px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
            />
          </div> */}

          {/* Email Address */}
          {/* <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
            <label htmlFor="emailAddress" className="gap-1 self-start pb-1 text-sm text-white">Email Address</label>
            <input 
              type="email" 
              id="emailAddress" 
              name="emailAddress" 
              placeholder="emily.johnson@example.com" 
              className="px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
            />
          </div> */}
        </div>

        <div className="flex flex-wrap gap-4 items-start mt-4 w-full max-md:max-w-full">
          {/* Medical Record Number */}
          {/* <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
            <label htmlFor="mrn" className="gap-1 self-start pb-1 text-sm text-white">Medical Record Number (MRN)</label>
            <input 
              type="text" 
              id="mrn" 
              name="mrn" 
              placeholder="PA987654" 
              className="px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
            />
          </div> */}

          {/* Primary Case Physician */}
          {/* <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
            <label htmlFor="primaryPhysician" className="gap-1 self-start pb-1 text-sm text-white">Primary Case Physician</label>
            <input 
              type="text" 
              id="primaryPhysician" 
              name="primaryPhysician" 
              placeholder="Dr. Sarah Lee" 
              className="px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
            />
          </div> */}

          {/* Oncologist Name */}
          {/* <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
            <label htmlFor="oncologistName" className="gap-1 self-start pb-1 text-sm text-white">Oncologist Name</label>
            <input 
              type="text" 
              id="oncologistName" 
              name="oncologistName" 
              placeholder="Dr. Michael Wong" 
              className="px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
            />
          </div> */}
        </div>

        <div className="flex flex-wrap gap-4 items-start mt-4 w-full max-md:max-w-full">
        { showPersonalInfo && <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
            <label htmlFor="driversLicense" className="gap-1 self-start pb-1 text-sm text-white">Driver's License</label>
            <input 
              type="text" 
              value={ehrDetailData.drivers}
              id="driversLicense" 
              name="driversLicense" 
              placeholder="S99967185" 
              className="px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
            />
          </div>}
          {/* Driver's License */}
          

          {/* Passport */}
          { showPersonalInfo && <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
            <label htmlFor="passport" className="gap-1 self-start pb-1 text-sm text-white">Passport</label>
            <input 
              type="text" 
              id="passport" 
              name="passport" 
              placeholder="X51740587X" 
              value={ehrDetailData.passport}
              className="px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
            />
          </div>}
          

          {/* Birthplace */}
          {showPersonalInfo && <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
            <label htmlFor="birthplace" className="gap-1 self-start pb-1 text-sm text-white">Birthplace</label>
            <input 
              type="text" 
              id="birthplace" 
              name="birthplace" 
              value={ehrDetailData.birthplace}
              placeholder="Peabody, Massachusetts, US" 
              className="px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
            />
          </div>}
          
        </div>

        <div className="flex flex-wrap gap-4 items-start mt-4 w-full max-md:max-w-full">
          {/* County */}
          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
            <label htmlFor="county" className="gap-1 self-start pb-1 text-sm text-white">County</label>
            <input 
              type="text" 
              id="county" 
              name="county" 
              value={ehrDetailData.county}
              placeholder="Worcester County" 
              className="px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
            />
          </div>

          {/* FIPS Code */}
          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
            <label htmlFor="fipsCode" className="gap-1 self-start pb-1 text-sm text-white">FIPS Code</label>
            <input 
              type="text" 
              id="fipsCode" 
              name="fipsCode" 
              value={ehrDetailData.fips}
              placeholder="nan" 
              className="px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
            />
          </div>

          {/* Coordinates */}
          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
            <label htmlFor="coordinates" className="gap-1 self-start pb-1 text-sm text-white">Coordinates</label>
            <input 
              type="text" 
              id="coordinates" 
              name="coordinates" 
              value={ehrDetailData.lat && ehrDetailData.lon ? `(${ehrDetailData.lat}, ${ehrDetailData.lon})` : ""}
              placeholder="(42.0418377438988, -71.51172360577198)"
              className="px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 items-start mt-4 w-full max-md:max-w-full">
          {
            showPersonalInfo && <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
            {/* SSN */}
            <label htmlFor="ssn" className="gap-1 self-start pb-1 text-sm text-white">SSN</label>
            <input 
              type="text" 
              id="ssn" 
              name="ssn" 
              placeholder="999-58-1934" 
              value={ehrDetailData.ssn}
              className="px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
            />
          </div>
          }
          

          {/* Address */}
          {showPersonalInfo && <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
            <label htmlFor="address" className="gap-1 self-start pb-1 text-sm text-white">Address</label>
            <input 
              type="text" 
              id="address" 
              name="address" 
              value={ehrDetailData.address}
              placeholder="127 Dibbert Underpass Unit 45, Blackstone, Massachusetts" 
              className="px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
            />
          </div>}
          
        </div>

        <div className="flex flex-wrap gap-4 items-start mt-4 w-full max-md:max-w-full">
          {/* Healthcare Expenses */}
          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
            <label htmlFor="healthcareExpenses" className="gap-1 self-start pb-1 text-sm text-white">Healthcare Expenses</label>
            <input 
              type="text" 
              id="healthcareExpenses" 
              name="healthcareExpenses" 
              value={ehrDetailData.healthcareexpenses}
              placeholder="$15,562.09" 
              className="px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
            />
          </div>

          {/* Healthcare Coverage */}
          <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
            <label htmlFor="healthcareCoverage" className="gap-1 self-start pb-1 text-sm text-white">Healthcare Coverage</label>
            <input 
              type="text" 
              id="healthcareCoverage" 
              name="healthcareCoverage"
              value={ehrDetailData.healthcarecoverage}

              placeholder="$1,419,588.07" 
              className="px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
            />
          </div>

          {/* Income */}
          {/* <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
            <label htmlFor="income" className="gap-1 self-start pb-1 text-sm text-white">Income</label>
            <input 
              type="text" 
              id="income" 
              name="income" 
              placeholder="$22,003.00" 
              className="px-2.5 py-4 w-full text-base bg-white rounded border border-white border-solid min-h-[48px] text-neutral-700"
            />
          </div> */}
        </div>
      {/* </div> */}
    </section>
  );
}

export default Demographics;
