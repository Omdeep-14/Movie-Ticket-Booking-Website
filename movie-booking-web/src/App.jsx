import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Route, Routes, useLocation } from "react-router";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import MovieDetails from "./Pages/MovieDetails";
import SeatLayout from "./Pages/SeatLayout";
import MyBookings from "./Pages/MyBookings";
import Favourite from "./Pages/Favourite";
import { Toaster } from "react-hot-toast";
import Footer from "./Components/Footer";

function App() {
  const isAdminRoute = useLocation().pathname.startsWith("/admin");

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/:id/:date" element={<SeatLayout />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;
