// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Products from "./pages/Products";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
