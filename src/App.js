import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Movies from "./components/Movies";
import Events from "./components/Events";
import Sports from "./components/Sports";
import Offers from "./components/Offers";
import Login from "./components/Login";
import CarouselPage from "./components/Carousel";
import Register from "./components/Register";
import { ThemeProvider } from "./context/ThemeContext";

function AppContent() {
  const location = useLocation();
  const [category, setCategory] = useState("movies");
  const [showCarousel, setShowCarousel] = useState(true); // Control carousel visibility

  useEffect(() => {
    const pathToCategory = {
      "/movies": "movies",
      "/events": "events",
      "/sports": "sports",
      "/offers": "offers",
    };

    setCategory(pathToCategory[location.pathname] || "movies");

    // Hide carousel on login & register pages
    if (location.pathname === "/login" || location.pathname === "/register") {
      setShowCarousel(false);
    } else {
      setShowCarousel(true);
    }
  }, [location.pathname]);

  return (
    <>
      <NavigationBar />
      {showCarousel && <CarouselPage category={category} />}
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/events" element={<Events />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
