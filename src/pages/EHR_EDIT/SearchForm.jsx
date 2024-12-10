import React, { useState } from 'react';

function SearchForm() {
  const color = "bg-[#096AB0]";
  const [ssn, setSsn] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    if (ssn.trim() === '') return; // Avoid API call if input is empty

    try {
      // Fetch data from the API using the entered SSN
      const response = await fetch(`/patient-info?patient_id=${ssn}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data); // Print the response data to the console
    } catch (error) {
      console.error('Error fetching patient info:', error);
    }
  };

  return (
    <form 
      className={`flex flex-col justify-center items-center p-4 mt-4 ${color} rounded-lg border border-solid border-white border-opacity-20 max-md:max-w-full`}
      onSubmit={handleSubmit} // Set up the submit handler
    >
      <div className="flex flex-col max-w-full w-[526px]">
        <div className="flex flex-wrap gap-2.5 items-center px-2.5 py-3 mt-2 w-full text-base bg-white border border-white border-solid min-h-[48px] rounded-[40px] text-neutral-400 max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e821e984d1c2d815266090b49b34187095013e0b725631f5299bcfcf6a1708c0?placeholderIfAbsent=true&apiKey=9ba532e0ef57418181adc9d3c43d33c6"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
          <input
            id="searchInput"
            className="flex-1 shrink gap-2.5 self-stretch my-auto min-w-[240px] max-md:max-w-full"
            type="text"
            placeholder="Search with MRN/SSN"
            aria-label="Search with MRN/SSN"
            value={ssn} // Bind input value to state
            onChange={(e) => setSsn(e.target.value)} // Update state on input change
          />
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
