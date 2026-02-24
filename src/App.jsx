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
import Terms from "./Terms";
import PrivacyPolicy from "./privacy";
import Plans from "./Plan";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
           <Route path="/AboutUs" element={<AboutUs />} />
           <Route path="/Terms" element={<Terms />} />
           <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
           <Route path="/plans" element={<Plans />} />
      </Routes>
    </Router>
  );
}

export default App;
