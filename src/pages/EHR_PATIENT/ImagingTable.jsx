import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';

const ImagingTable=forwardRef((props,ref)=>{
  const [imagingData, setImagingData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchImagingData = async () => {
    setLoading(true);
    const ssn = JSON.parse(sessionStorage.getItem('ssn'));
    if(!ssn){
      console.log("NO SSN found in session storage, skipping API call");
      setLoading(false);
      return;
    }
    try {
      const response = await fetch(`http://66.66.66.23:9601/imaging_studies?patient_id=${JSON.parse(sessionStorage.getItem('ssn'))}`); // Replace with your actual API endpoint
      const data = await response.json();
      setImagingData(data);
    } catch (error) {
      console.error('Error fetching imaging data:', error);
    } finally {
      setLoading(false);
    }
  };
  useImperativeHandle(ref, () => ({
    fetchImagingData,
  }));
  useEffect(() => {
    // fetchImagingData();
  }, []);

  return (
    <div className="p-4 bg-stone-50 bg-opacity-10 rounded-lg">
      <h2 className="text-xl font-medium text-white">Imaging Details</h2>
      {/* <button 
        onClick={fetchImagingData}
        className="mt-4 px-4 py-2 bg-[#08615F] text-white rounded hover:bg-blue-700 transition duration-300"
      >
        Refresh Imaging Data
      </button> */}
      <div className="overflow-x-auto mt-4 max-h-96">
        <table className="min-w-full text-left border-collapse">
          <thead className="bg-[#08615F] text-white sticky top-0">
            <tr>
              <th className="py-3 px-4 border-b">ID</th>
              <th className="py-3 px-4 border-b">Date</th>
              <th className="py-3 px-4 border-b">Encounter</th>
              <th className="py-3 px-4 border-b">Series UID</th>
              <th className="py-3 px-4 border-b">Body Site Code</th>
              <th className="py-3 px-4 border-b">Body Site Description</th>
              <th className="py-3 px-4 border-b">Modality Code</th>
              <th className="py-3 px-4 border-b">Modality Description</th>
              <th className="py-3 px-4 border-b">Instance UID</th>
              <th className="py-3 px-4 border-b">SOP Code</th>
              <th className="py-3 px-4 border-b">SOP Description</th>
              <th className="py-3 px-4 border-b">Procedure Code</th>
            </tr>
          </thead>
          <tbody className="bg-white text-neutral-700">
            {loading ? (
              <tr>
                <td colSpan={12} className="text-center py-4">Loading...</td>
              </tr>
            ) : imagingData.length === 0 ? (
              <tr>
                <td colSpan={12} className="text-center py-4">No imaging data found</td>
              </tr>
            ) : (
              imagingData.map((imaging) => (
                <tr key={imaging.id}>
                  <td className="py-2 px-4 border-b">{imaging.id || "No Data"}</td>
                  <td className="py-2 px-4 border-b">{new Date(imaging.date).toLocaleDateString() || "No Data"}</td>
                  <td className="py-2 px-4 border-b">{imaging.encounter || "No Data"}</td>
                  <td className="py-2 px-4 border-b">{imaging.series_uid || "No Data"}</td>
                  <td className="py-2 px-4 border-b">{imaging.bodysite_code || "No Data"}</td>
                  <td className="py-2 px-4 border-b">{imaging.bodysite_description || "No Data"}</td>
                  <td className="py-2 px-4 border-b">{imaging.modality_code || "No Data"}</td>
                  <td className="py-2 px-4 border-b">{imaging.modality_description || "No Data"}</td>
                  <td className="py-2 px-4 border-b">{imaging.instance_uid || "No Data"}</td>
                  <td className="py-2 px-4 border-b">{imaging.sop_code || "No Data"}</td>
                  <td className="py-2 px-4 border-b">{imaging.sop_description || "No Data"}</td>
                  <td className="py-2 px-4 border-b">{imaging.procedure_code || "No Data"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
);
export default ImagingTable;
