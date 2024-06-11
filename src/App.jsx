import { Box } from "@chakra-ui/react";
import {
  Route,
  Routes,
} from "react-router-dom";
import ProductDescription from "./components/ProductDescription";
import PartsSelection from "./components/PartsSelection";
import Assembly from "./components/Assembly";
import FinalProduct from "./components/FinalProduct";
import './App.css'
import Navbar from "./components/Navbar";
function App() {
  return (
    <Box>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ProductDescription/>} />
        <Route path="/parts-selection" element={<PartsSelection/>} />
        <Route path="/assembly" element={<Assembly/>} />
        <Route path="/final-product" element={<FinalProduct/>} />
      </Routes>
    </Box>
  );
}

export default App;
