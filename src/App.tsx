import "./App.css";
import { Routes, Route } from "react-router";
import { Layout } from "./components/organism/index";
import { Home, About, Contact, Portfolio } from "./components/pages/index";


function App() {
  

  return (
    
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
   
  );
}

export default App;
