import Home from "./components/Home/Home";
import Footer from "./components/footer/Footer";
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./components/details/Details";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
