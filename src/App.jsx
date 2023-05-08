// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import { Contact} from "./components";
import { ProjectPage, HomePage } from "./pages";

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/projects/:id/:name"
          element={<ProjectPage />}
        />
      </Routes>
      <Contact />
    </div>
  );
}

export default App;
