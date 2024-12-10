import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';

const AllergiesTable=forwardRef((props,ref)=> {
  const [allergies, setAllergies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllergies = async () => {
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
      const response = await fetch(`http://66.66.66.23:9600/allergies?patient_id=${ssn}`);
      const data = await response.json();
      setAllergies(data); // Assuming data is an array of allergies
    } catch (error) {
      console.error('Error fetching allergies:', error);
    } finally {
      setLoading(false); // Stop loading spinner after the fetch completes
    }
  };
  
  useImperativeHandle(ref, () => ({
    fetchAllergies,
  }));
  useEffect(() => {
    // fetchAllergies();
  }, []);

  return (
    <div className="p-4 bg-stone-50 bg-opacity-10 rounded-lg">
      <h2 className="text-xl font-medium text-white">Allergies</h2>
      <button
        onClick={fetchAllergies}
        className="mt-4 px-4 py-2 bg-[#096AB0] text-white rounded hover:bg-blue-700 transition duration-300"
      >
        Refresh Allergies
      </button>

      {/* Table container with scrollable behavior */}
      <div className="overflow-x-auto overflow-y-auto mt-4 max-h-[400px] border border-gray-300 rounded-lg">
        <table className="min-w-full text-left border-collapse">
          <thead className="bg-[#096AB0] text-white">
            <tr>
              <th className="py-3 px-4 border-b">Start</th>
              <th className="py-3 px-4 border-b">Stop</th>
              <th className="py-3 px-4 border-b">Encounter Description</th>
              <th className="py-3 px-4 border-b">Code</th>
              <th className="py-3 px-4 border-b">System</th>
              <th className="py-3 px-4 border-b">Description</th>
              <th className="py-3 px-4 border-b">Type</th>
              <th className="py-3 px-4 border-b">Category</th>
              <th className="py-3 px-4 border-b">Reaction 1</th>
              <th className="py-3 px-4 border-b">Reaction Description 1</th>
              <th className="py-3 px-4 border-b">Severity 1</th>
              <th className="py-3 px-4 border-b">Reaction 2</th>
              <th className="py-3 px-4 border-b">Reaction Description 2</th>
              <th className="py-3 px-4 border-b">Severity 2</th>
            </tr>
          </thead>
          <tbody className="bg-white text-neutral-700">
            {loading ? (
              <tr>
                <td colSpan={14} className="text-center py-4">Loading...</td>
              </tr>
            ) : allergies.length === 0 ? (
              <tr>
                <td colSpan={14} className="text-center py-4">No allergies found</td>
              </tr>
            ) : (
              allergies.map((allergy) => (
                <tr key={allergy.code}>
                  <td className="py-2 px-4 border-b">{new Date(allergy.start).toLocaleDateString()}</td>
                  <td className="py-2 px-4 border-b">{new Date(allergy.stop).toLocaleDateString()}</td>
                  <td className="py-2 px-4 border-b">{allergy.encounter}</td>
                  <td className="py-2 px-4 border-b">{allergy.code}</td>
                  <td className="py-2 px-4 border-b">{allergy.system}</td>
                  <td className="py-2 px-4 border-b">{allergy.description}</td>
                  <td className="py-2 px-4 border-b">{allergy.type}</td>
                  <td className="py-2 px-4 border-b">{allergy.category}</td>
                  <td className="py-2 px-4 border-b">{allergy.reaction1 || "No Data"}</td>
                  <td className="py-2 px-4 border-b">{allergy.description1 || "No Data"}</td>
                  <td className="py-2 px-4 border-b">{allergy.severity1 || "No Data"}</td>
                  <td className="py-2 px-4 border-b">{allergy.reaction2 || "No Data"}</td>
                  <td className="py-2 px-4 border-b">{allergy.description2 || "No Data"}</td>
                  <td className="py-2 px-4 border-b">{allergy.severity2 || "No Data"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
});

export default AllergiesTable;