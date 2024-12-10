import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';

const EncounterTable= forwardRef((props,ref)=> {
  const [encounters, setEncounters] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchEncounters = async () => {
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
      const response = await fetch(`http://66.66.66.23:9601/encounters?patient_id=${ssn}`);
      const data = await response.json();
      setEncounters(data); // Assuming data is an array of encounters
    } catch (error) {
      console.error('Error fetching encounters:', error);
    } finally {
      setLoading(false); // Stop loading spinner after the fetch completes
    }
  };
  useImperativeHandle(ref, () => ({
    fetchEncounters,
  }));
 

  return (
    <div className="p-4 bg-stone-50 bg-opacity-10 rounded-lg">
      <h2 className="text-xl font-medium text-white">Encounter Details</h2>
      <button
        onClick={fetchEncounters}
        className="mt-4 px-4 py-2 bg-[#096AB0] text-white rounded hover:bg-blue-700 transition duration-300"
      >
        Refresh Encounters
      </button>

      {/* Table container with scrollable behavior */}
      <div className="overflow-x-auto overflow-y-auto mt-4 max-h-[400px] border border-gray-300 rounded-lg">
        <table className="min-w-full text-left border-collapse">
          <thead className="bg-[#096AB0] text-white sticky top-0">
            <tr>
              <th className="py-3 px-4 border-b">Encounter #</th>
              <th className="py-3 px-4 border-b">Start Date</th>
              <th className="py-3 px-4 border-b">Stop Date</th>
              <th className="py-3 px-4 border-b">Organization</th>
              <th className="py-3 px-4 border-b">Provider</th>
              <th className="py-3 px-4 border-b">Payer</th>
              <th className="py-3 px-4 border-b">Encounter Class</th>
              <th className="py-3 px-4 border-b">Description</th>
              <th className="py-3 px-4 border-b">Base Encounter Cost</th>
              <th className="py-3 px-4 border-b">Total Claim Cost</th>
              <th className="py-3 px-4 border-b">Payer Coverage</th>
              <th className="py-3 px-4 border-b">Reason Description</th>
            </tr>
          </thead>
          <tbody className="bg-white text-neutral-700">
            {loading ? (
              <tr>
                <td colSpan={12} className="text-center py-4">
                  Loading...
                </td>
              </tr>
            ) : encounters.length === 0 ? (
              <tr>
                <td colSpan={12} className="text-center py-4">
                  No encounters found
                </td>
              </tr>
            ) : (
              encounters.map((encounter) => (
                <tr key={encounter.encounterNumber}>
                  <td className="py-2 px-4 border-b">{encounter.id}</td>
                  <td className="py-2 px-4 border-b">{new Date(encounter.start).toLocaleDateString()}</td>
                  <td className="py-2 px-4 border-b">{new Date(encounter.stop).toLocaleDateString()}</td>
                  <td className="py-2 px-4 border-b">{encounter.organization}</td>
                  <td className="py-2 px-4 border-b">{encounter.provider}</td>
                  <td className="py-2 px-4 border-b">{encounter.payer}</td>
                  <td className="py-2 px-4 border-b">{encounter.encounterclass}</td>
                  <td className="py-2 px-4 border-b">{encounter.description}</td>
                  <td className="py-2 px-4 border-b">
                    {encounter.baseencountercost}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {encounter.totalclaimcost}
                  </td>
                  <td className="py-2 px-4 border-b">{encounter.payercoverage || "No Data"}</td>
                  <td className="py-2 px-4 border-b">{encounter.reasondescription || "No Data"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
})

export default EncounterTable;
