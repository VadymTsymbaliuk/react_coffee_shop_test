import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './app/App';
import OurCoffee from "./routes/ourCoffee/OurCoffee";
import ForYourPleasure from "./routes/forYourPleasure/ForYourPleasure";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="/our-coffee" element={<OurCoffee/>}/>
              <Route path="/for-your-pleasure" element={<ForYourPleasure />}/>
          </Routes>

      </BrowserRouter>
  </React.StrictMode>
);



