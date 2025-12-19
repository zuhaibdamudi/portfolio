import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import HabitualProject from './HabitualProject';
import DiffusionProject from './DiffusionProject';
import LiftLogProject from './LiftLogProject';
import RunnalyticsProject from './RunnalyticsProject';
import TypeRacerProject from './TypeRacerProject';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects/habitual" element={<HabitualProject />} />
        <Route path="/projects/diffusion" element={<DiffusionProject />} />
        <Route path="/projects/liftlog" element={<LiftLogProject />} />
        <Route path="/projects/runnalytics" element={<RunnalyticsProject />} />
        <Route path="/projects/typeracer" element={<TypeRacerProject />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
