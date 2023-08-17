import { Route, Routes } from "react-router-dom"; //https://reactrouter.com/docs/en

import Footer from "./components/bundel/Footer";
import Glas from "./pages/Glas";
import Imprint from "./pages/Imprint";
import Navbar from "./components/bundel/Navbar";
import Organisator from "./pages/Organisator";
import React from "react";

function App(props) {
  return (
    <div className="flex flex-col min-h-screen bg-fairpage">
      <Navbar />
      <div className="flex-grow overflow-y-auto">
        <Routes>
          <Route path="/" index element={<Organisator />} />
          <Route path="/glas" element={<Glas />} />
          <Route path="/imprint" element={<Imprint />} />
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
