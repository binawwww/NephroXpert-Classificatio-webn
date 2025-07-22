import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./ui/Header";
import Docs from "./pages/Docs";
import Tools from "./pages/Tools";

function App() {

  return (
    <div className="bg-blackCustom min-h-screen text-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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