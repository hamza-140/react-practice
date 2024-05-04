import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import Login from './Login.jsx'
import Quote from './Quote.jsx'
import Weather from './Weather.jsx'
import NotFound from './NotFound.jsx'


function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<App />} />
        <Route path="/quote" element={<Quote />} />        
        <Route path="/weather" element={<Weather />} />        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
