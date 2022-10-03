import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import {createContext, useState} from 'react';
  
export const ThemeContext = createContext()

function App() {
  // true = light, false = dark
  const [theme, setTheme] = useState(true);
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>  
  );
}

export default App;
