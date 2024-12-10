import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';

const MedicationsTable=forwardRef((props,ref)=> {
  const [medications, setMedications] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMedications = async () => {
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
      const response = await fetch(`http://66.66.66.23:9601/medications?patient_id=${ssn}`);
      const data = await response.json();
      setMedications(data); // Assuming data is an array of medications
    } catch (error) {
      console.error('Error fetching medications:', error);
    } finally {
      setLoading(false); // Stop loading spinner after the fetch completes
    }
  };  
  useImperativeHandle(ref, () => ({
    fetchMedications,
  }));
  useEffect(() => {
    // fetchMedications();
  }, []);

  return (
    <div className="p-4 bg-stone-50 bg-opacity-10 rounded-lg">
      <h2 className="text-xl font-medium text-white">Medications</h2>
      <button
        onClick={fetchMedications}
        className="mt-4 px-4 py-2 bg-[#096AB0] text-white rounded hover:bg-blue-700 transition duration-300"
      >
        Refresh Medications
      </button>

      {/* Table container with scrollable behavior */}
      <div className="overflow-x-auto overflow-y-auto mt-4 max-h-[400px] border border-gray-300 rounded-lg">
        <table className="min-w-full text-left border-collapse">
          <thead className="bg-[#096AB0] text-white sticky top-0">
            <tr>
              <th className="py-3 px-4 border-b">Start</th>
              <th className="py-3 px-4 border-b">Stop</th>
              <th className="py-3 px-4 border-b">Payer</th>
              <th className="py-3 px-4 border-b">Encounter</th>
              <th className="py-3 px-4 border-b">Medication Code</th>
              <th className="py-3 px-4 border-b">Medication Description</th>
              <th className="py-3 px-4 border-b">Base Cost</th>
              <th className="py-3 px-4 border-b">Payer Coverage</th>
              <th className="py-3 px-4 border-b">Dispenses</th>
              <th className="py-3 px-4 border-b">Total Cost</th>
              <th className="py-3 px-4 border-b">Reason Code</th>
              <th className="py-3 px-4 border-b">Reason Description</th>
            </tr>
          </thead>
          <tbody className="bg-white text-neutral-700">
            {loading ? (
              <tr>
                <td colSpan={12} className="text-center py-4">Loading...</td>
              </tr>
            ) : medications.length === 0 ? (
              <tr>
                <td colSpan={12} className="text-center py-4">No medications found</td>
              </tr>
            ) : (
              medications.map((medication) => (
                <tr key={medication.medicationCode}>
                  <td className="py-2 px-4 border-b">{new Date(medication.start).toLocaleDateString()}</td>
                  <td className="py-2 px-4 border-b">{new Date(medication.stop).toLocaleDateString()}</td>
                  <td className="py-2 px-4 border-b">{medication.payer || "No Data"}</td>
                  <td className="py-2 px-4 border-b">{medication.encounter || "No Data"}</td>
                  <td className="py-2 px-4 border-b">{medication.code || "No Data"}</td>
                  <td className="py-2 px-4 border-b">{medication.description || "No Data"}</td>
                  <td className="py-2 px-4 border-b">
                    {medication.baseCost?.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) || "No Data"}
                  </td>
                  <td className="py-2 px-4 border-b">{medication.payerCoverage || "No Data"}</td>
                  <td className="py-2 px-4 border-b">{medication.dispenses || "No Data"}</td>
                  <td className="py-2 px-4 border-b">
                    {medication.totalCost?.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) || "No Data"}
                  </td>
                  <td className="py-2 px-4 border-b">{medication.reason_code || "No Data"}</td>
                  <td className="py-2 px-4 border-b">{medication.reason_description || "No Data"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
});

export default MedicationsTable;