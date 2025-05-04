import "./App.css";
import Hero from "./assets/components/Hero";
import { Routes, Route } from "react-router-dom";
import AboutMe from "./assets/components/AboutMe";
import Skills from "./assets/components/Skills";
import Contact from "./assets/components/contact";
import Experience from "./assets/components/Experience";
import BlogHero from "./assets/pages/bloghero";
import BlogPost from "./assets/pages/blogpost";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/Experience" element={<Experience />} />
      <Route path="/blog" element={<BlogHero />} /> 
      <Route path="/blog/:id" element={<BlogPost />} />
    </Routes>
  );
}

export default App;
