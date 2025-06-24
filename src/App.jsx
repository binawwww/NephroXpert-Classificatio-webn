import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./ui/Header";
import Docs from "./pages/Docs";
import Tools from "./pages/Tools";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-blackCustom min-h-screen text-white">
      <div className="w-7xl mx-auto">
        <Header />
        
        <Routes>
          <Route index element={<Home />} />
          <Route path="docs" element={<Docs />} />
          <Route path="tools" element={<Tools />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
