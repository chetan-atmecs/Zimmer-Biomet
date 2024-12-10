import React, { useState } from "react";
import NavigationArrows from "../../layouts/MainLayout/NavigationArrows";

// Simple CSS spinner
const LoadingSpinner = () => (
  <div className="spinner">
    <style>{`
      .spinner {
        border: 4px solid rgba(0, 0, 0, 0.1);
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border-left-color: #09f;
        animation: spin 1s ease infinite;
      }
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

const MedicalReportGenerator = () => {
  const [patientId, setPatientId] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [report, setReport] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
  };

  const handleSubmit = async () => {
    setLoading(true); // Start loading when request is initiated

    const formData = new FormData();
    if (selectedFiles.length) {
      for (let i = 0; i < selectedFiles.length; i++) {
        formData.append("image", selectedFiles[i]);
      }
    }
    if (patientId) {
      formData.append("patient_id", patientId);
    }

    try {
      const response = await fetch(selectedFiles.length
        ? "http://66.66.66.23:8000/generate_report/"
        : `http://66.66.66.23:8231/generate_report/?patient_id=${patientId}`, {
        method: "POST",
        body: formData
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setReport(data.report); // Set the generated report

    } catch (error) {
      console.error("Error submitting the form", error);
    } finally {
      setLoading(false); // End loading when request completes
    }
  };

  return (
    <>
      <NavigationArrows title="Medical Report Generator" />

      <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
        <div className="bg-sky-100 text-neutral-900" style={{ flex: 1, marginRight: "20px", padding: "10px", borderRadius: "10px" }}>
          <h2 style={{ color: "black" }}>Upload Medical Image</h2>
          <div style={{ border: "2px dashed black", padding: "20px", textAlign: "center", borderRadius: "10px", marginBottom: "20px" }}>
            <input type="file" multiple onChange={handleFileChange} />
            <p style={{ color: "black" }}>Drop Image Here - or - Click to Upload</p>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ color: "black" }}>Patient ID</label>
            <input
              type="text"
              placeholder="Enter patient ID"
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
              style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button
              onClick={() => { setSelectedFiles([]); setPatientId(""); setReport(""); }}
              style={{ backgroundColor: "#565656", color: "white", padding: "10px 10px", border: "none", borderRadius: "5px" }}>
              Clear
            </button>
            <button
              onClick={handleSubmit}
              style={{ backgroundColor: "#096AB0", color: "white", padding: "10px 10px", border: "none", borderRadius: "5px" }}>
              {loading ? <LoadingSpinner /> : "Submit"} {/* Show spinner when loading */}
            </button>
          </div>
        </div>

        <div className="bg-sky-100" style={{ flex: 1, padding: "10px", borderRadius: "10px" }}>
          <h2 style={{ color: "black" }}>Generated Medical Report</h2>
          <div
            style={{
              backgroundColor: "#3a3a3a",
              padding: "20px",
              minHeight: "200px",
              borderRadius: "10px",
              color: "white",
              overflow: "auto",
              maxHeight: "400px",
              maxWidth: "700px",
              whiteSpace: "pre-wrap",
            }}>
            {loading ? (
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                <LoadingSpinner />
              </div>
            ) : report ? <pre>{report}</pre> : <p>No report generated yet</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicalReportGenerator;
