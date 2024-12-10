import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';

const ImmunizationTable=forwardRef((props,ref)=> {
  const [immunizations, setImmunizations] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchImmunizations = async () => {
    setLoading(true);
  
    // Retrieve SSN from session storage
    const ssn = JSON.parse(sessionStorage.getItem('ssn'));
  
    // Only make the API call if SSN exists
    if (!ssn) {
      console.log('No SSN found in session storage, skipping API call');
      setLoading(false); // Stop loading spinner
      return; // Exit the function without making the API call
    }
  
    try {
      // Make the API call if SSN is found
      const response = await fetch(`http://66.66.66.23:9601/immunizations?patient_id=${ssn}`);
      const data = await response.json();
      setImmunizations(data); // Assuming data is an array of immunizations
    } catch (error) {
      console.error('Error fetching immunizations:', error);
    } finally {
      setLoading(false); // Stop loading spinner after the fetch completes
    }
  };  
  useImperativeHandle(ref, () => ({
    fetchImmunizations,
  }));
  useEffect(() => {
    // fetchImmunizations();
  }, []);

  return (
    <div className="p-4 bg-stone-50 bg-opacity-10 rounded-lg">
      <h2 className="text-xl font-medium text-white">Immunizations</h2>
      {/* <button
        onClick={fetchImmunizations}
        className="mt-4 px-4 py-2 bg-[#08615F] text-white rounded hover:bg-blue-700 transition duration-300"
      >
        Refresh Immunizations
      </button> */}

      {/* Table container with scrollable behavior */}
      <div className="overflow-x-auto overflow-y-auto mt-4 max-h-[400px] border border-gray-300 rounded-lg">
        <table className="min-w-full text-left border-collapse">
          <thead className="bg-[#08615F] text-white sticky top-0">
            <tr>
              <th className="py-3 px-4 border-b">Date</th>
              <th className="py-3 px-4 border-b">Encounter</th>
              <th className="py-3 px-4 border-b">Immunization Code</th>
              <th className="py-3 px-4 border-b">Immunization Description</th>
              <th className="py-3 px-4 border-b">Base Cost</th>
            </tr>
          </thead>
          <tbody className="bg-white text-neutral-700">
            {loading ? (
              <tr>
                <td colSpan={5} className="text-center py-4">Loading...</td>
              </tr>
            ) : immunizations.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-4">No immunizations found</td>
              </tr>
            ) : (
              immunizations.map((immunization) => (
                <tr key={immunization.code}>
                  <td className="py-2 px-4 border-b">{new Date(immunization.date).toLocaleDateString()}</td>
                  <td className="py-2 px-4 border-b">{immunization.encounter || "No Data"}</td>
                  <td className="py-2 px-4 border-b">{immunization.code || "No Data"}</td>
                  <td className="py-2 px-4 border-b">{immunization.description || "No Data"}</td>
                  <td className="py-2 px-4 border-b">
                    {immunization.base_cost?.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) || "No Data"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
});

export default ImmunizationTable;