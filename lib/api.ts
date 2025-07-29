
import axios from "axios";

const API_BASE = "http://127.0.0.1:8000";

export const api = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

export const predictIrrigation = (data: { soil_moisture: number, temperature: number, crop_yield: number }) =>
  api.post("/predict/irrigation", data);

export const predictFertilizer = (data: { soil_moisture: number, temperature: number, crop_yield: number }) =>
  api.post("/predict/fertilizer", data);

export const predictPest = (data: { soil_moisture: number, temperature: number }) =>
  api.post("/predict/pest", data);

export const predictAll = (formData: FormData) =>
  axios.post(API_BASE + "/predict/all", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
