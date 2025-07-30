
# AgroVision Dashboard (Next.js + Tailwind + Recharts)

This is the **frontend dashboard** for AgroVision, built with **Next.js**, **TailwindCSS**, and **Recharts**.  
It interacts with the FastAPI backend to visualize AI predictions, crop health analysis, and trend charts.

---

## **Features**
- **AI Crop Prediction Form** to send soil, temperature, yield, and crop image to the backend.
- **Real-time Charts** showing irrigation, fertilizer, and pest probability trends.
- **Crop Health Image Analyzer** panel with mock stress overlay.
- **Responsive Dashboard UI** using TailwindCSS.

---

## **Project Structure**
```
agrovision_dashboard/
│
├── app/
│   ├── page.tsx            # Main page (Prediction form)
│   ├── globals.css         # Global Tailwind styles
│   └── components/         # UI components (forms, charts, analyzer)
│
├── lib/
│   └── api.ts              # Axios service for API calls
├── package.json
└── tailwind.config.js
```

---

## **Installation**
```bash
cd agrovision_dashboard
npm install
```

---

## **Running the Dashboard**
```bash
npm run dev
```
Open: [http://localhost:3000](http://localhost:3000)

---

## **Environment Setup**
Make sure the **FastAPI backend** is running on `http://127.0.0.1:8000` (or update `API_BASE` in `lib/api.ts`).

---

## **Future Enhancements**
- Add a **"Crop Analytics" page** with historical stress data and image gallery.
- Integrate real-time WebSocket updates for predictions.
- Add authentication (optional).
