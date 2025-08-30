import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import PageNotFound from './pages/PageNotFound';
import Experience from './pages/Experience';
import TechStack from "./pages/TechStack";
function App() {
  return (
    <>
    <BrowserRouter future={{
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }}>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/experience" element={<Experience />}/>
      <Route path="/projects" element={<Projects />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/tools" element={<TechStack />}/>
      <Route path="*" element={<PageNotFound />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
