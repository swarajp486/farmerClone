import React, { useContext, useEffect } from "react";
import { WindowSizeContext } from "./ContextApi/WindowSize";
import "./App.css";
import {
  FAQ,
  Testimonials,
  Features,
  Footer,
  Navbar,
  Prising,
  HomePage,
  Card,
} from "./componand/index";

const AppContent = () => {
  const { size, setSize } = useContext(WindowSizeContext);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setSize(window.innerWidth);
    };

    handleWindowSizeChange();

    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [setSize]);

  return (
    <>
      <Navbar />
      <HomePage />
      <Features />
      <FAQ />
      <Prising />
      <Testimonials />
      <Card />
      <Footer />
    </>
  );
};

export default AppContent;
