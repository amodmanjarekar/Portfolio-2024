import { useEffect, useState } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Work from "./components/Work/Work";
import WorkDetails from "./components/Work/WorkDetails";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./components/Footer/Footer";

function App() {
  const location = useLocation();
  const [aboutNav, setAboutNav] = useState(0);
  const [workNav, setWorkNav] = useState(0);

  const Home = () => {
    useEffect(() => {
      setAboutNav(document.getElementById("about").offsetTop);
      setWorkNav(document.getElementById("work").offsetTop);
    }, [window.screen]);

    return (
      <motion.div>
        <Navbar aboutnav={aboutNav} worknav={workNav} />
        <Hero />
        <section id="about">
          <About />
        </section>
        <section id="work">
          <Work />
        </section>
        <Footer />
        <motion.div
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          className="transitioner transitioner-home"
        ></motion.div>
      </motion.div>
    );
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="work/:workId" element={<WorkDetails />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
