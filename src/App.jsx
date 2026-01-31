// import React, { useState, useEffect } from 'react';
// import LandingPage from "./Home"
// import { Menu, X } from 'lucide-react';
// import ContactPage from "./contact"



// function App() {
//   return (
//     <div className="App">
      
//       <LandingPage />
//     </div>
//   );
// }

// export default App;



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./Home";
import ContactPage from "./contact";
import AboutUs from "./AboutUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
           <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
