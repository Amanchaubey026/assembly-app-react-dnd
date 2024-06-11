import { Box, Divider } from "@chakra-ui/react";
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
import Footer from "./components/Footer";
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
      <Divider color={'wheat'}/>
      <Footer/>
    </Box>
  );
}

export default App;
