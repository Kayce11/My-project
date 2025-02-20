import "./App.css";
import Hero from "./assets/components/Hero";
import { Routes, Route } from "react-router-dom";
import AboutMe from "./assets/components/AboutMe";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<AboutMe />} />
    </Routes>
  );
}

export default App;
