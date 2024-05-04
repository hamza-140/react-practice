import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import Quote from './Quote.jsx'
import NotFound from './NotFound.jsx'


function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/quote" element={<Quote />} />        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
