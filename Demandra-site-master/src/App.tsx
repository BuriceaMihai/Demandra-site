import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ContactPage from "./pages/ContactPage";
import PrezentareProdus from "./pages/PrezentareProdus";
import * as ContentEN from "./pages/ContentEN";
import * as ContentRO from "./pages/ContentRO";

const App: React.FC = () => {
  const [language, setLanguage] = useState<"EN" | "RO">("EN");

  const handleLanguageChange = (lang: string) => {
    if (lang === "EN" || lang === "RO") setLanguage(lang);
  };

  // Selectează constantale potrivite în funcție de limba selectată
  const content = useMemo(() => {
    return language === "RO" ? ContentRO : ContentEN;
  }, [language]);

  return (
    <Router>
      <NavBar language={language} onLanguageChange={handleLanguageChange} />
      <main>
        <Routes>
          <Route
            path="/prezentare"
            element={<PrezentareProdus content={content} />}
          />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
