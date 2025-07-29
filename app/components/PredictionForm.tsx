
"use client";

import { useState } from "react";
import { predictIrrigation, predictFertilizer, predictPest, predictAll } from "@/lib/api";
import ResultCard from "./ResultCard";

export default function PredictionForm() {
  const [soilMoisture, setSoilMoisture] = useState("");
  const [temperature, setTemperature] = useState("");
  const [cropYield, setCropYield] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("soil_moisture", soilMoisture);
    formData.append("temperature", temperature);
    formData.append("crop_yield", cropYield);
    if (file) formData.append("file", file);

    try {
      const response = await predictAll(formData);
      setResult(response.data);
    } catch (error) {
      console.error(error);
      alert("Error predicting data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">AI Crop Prediction</h2>
      <div className="mb-2">
        <label>Soil Moisture (%)</label>
        <input type="number" className="border p-2 w-full" value={soilMoisture} onChange={e => setSoilMoisture(e.target.value)} />
      </div>
      <div className="mb-2">
        <label>Temperature (°C)</label>
        <input type="number" className="border p-2 w-full" value={temperature} onChange={e => setTemperature(e.target.value)} />
      </div>
      <div className="mb-2">
        <label>Expected Crop Yield</label>
        <input type="number" className="border p-2 w-full" value={cropYield} onChange={e => setCropYield(e.target.value)} />
      </div>
      <div className="mb-2">
        <label>Upload Crop Image</label>
        <input type="file" className="border p-2 w-full" onChange={e => setFile(e.target.files?.[0] || null)} />
      </div>
      <button onClick={handlePredict} className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 w-full" disabled={loading}>
        {loading ? "Predicting..." : "Predict All"}
      </button>
      {result && <ResultCard result={result} />}
    </div>
  );
}
