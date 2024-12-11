import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';

const ConditionsTable=forwardRef((props,ref)=> {
  const [conditionsData, setConditionsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchConditionsData = async () => {
    setLoading(true);
    const ssn = JSON.parse(sessionStorage.getItem('ssn'));
    if(!ssn){
      console.log("NO SSN found in session storage, skipping API call");
      setLoading(false);
      return;
    }
    try {
      const response = await fetch(`http://66.66.66.23:9600/conditions?patient_id=${JSON.parse(sessionStorage.getItem('ssn'))}`); // Replace with your actual API endpoint
      const data = await response.json();
      setConditionsData(data);
    } catch (error) {
      console.error('Error fetching conditions data:', error);
    } finally {
      setLoading(false);
    }
  };
  useImperativeHandle(ref, () => ({
    fetchConditionsData,
  }));

  useEffect(() => {
    // fetchConditionsData();
  }, []);

  return (
    <div className="p-4 bg-stone-50 bg-opacity-10 rounded-lg">
      <h2 className="text-xl font-medium text-white">Conditions Details</h2>
      {/* <button 
        onClick={fetchConditionsData}
        className="mt-4 px-4 py-2 bg-[#08615F] text-white rounded hover:bg-blue-700 transition duration-300"
      >
        Refresh Conditions Data
      </button> */}
      <div className="overflow-x-auto overflow-y-auto mt-4 max-h-[400px] border border-gray-300 rounded-lg">
        <table className="min-w-full text-left border-collapse">
          <thead className="bg-[#08615F] text-white sticky top-0">
            <tr>
              <th className="py-3 px-4 border-b">Start Date</th>
              <th className="py-3 px-4 border-b">Stop Date</th>
              <th className="py-3 px-4 border-b">Encounter</th>
              <th className="py-3 px-4 border-b">System</th>
              <th className="py-3 px-4 border-b">Condition Code</th>
              <th className="py-3 px-4 border-b">Condition Description</th>
            </tr>
          </thead>
          <tbody className="bg-white text-neutral-700">
            {loading ? (
              <tr>
                <td colSpan={6} className="text-center py-4">Loading...</td>
              </tr>
            ) : conditionsData.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-4">No conditions found</td>
              </tr>
            ) : (
              conditionsData.map((condition) => (
                <tr key={condition.conditionCode}>
                  <td className="py-2 px-4 border-b">{new Date(condition.start_date).toLocaleDateString()}</td>
                  <td className="py-2 px-4 border-b">{new Date(condition.stop_date).toLocaleDateString()}</td>
                  <td className="py-2 px-4 border-b">{condition.encounter}</td>
                  <td className="py-2 px-4 border-b">{condition.system}</td>
                  <td className="py-2 px-4 border-b">{condition.code}</td>
                  <td className="py-2 px-4 border-b">{condition.description}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
});

export default ConditionsTable;
