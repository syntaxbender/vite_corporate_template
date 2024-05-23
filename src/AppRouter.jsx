import  React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import IsAnalitigi from "./pages/isAnalitigi";
import YazilimDanismanligi from "./pages/yazilimDanismanligi";
import YapayZekaAnalitik from "./pages/yapayZekaAnalitik";
import ButcePlanlamaCozumleri from "./pages/butcePlanlamaCozumleri";
import VeriDepolama from "./pages/veriDepolama";

import "../public/assets/css/templatemo-574-mexant.css"
import '@fontsource/poppins/100.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';
import RaporlamaIsZekasi from "./pages/raporlamaIsZekasi";
//import "./App.css";
//import Layout from "./components/layout";
// Works also with SSR as expected

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hizmetler/veri-analitigi-ve-is-zekasi-cozumleri" element={<IsAnalitigi />} />
        <Route path="/hizmetler/yazilim-danismanligi" element={<YazilimDanismanligi />} />
        <Route path="/hizmetler/yapay-zeka-ve-ileri-analitik" element={<YapayZekaAnalitik />} />
        <Route path="/hizmetler/butce-planlama-cozumleri" element={<ButcePlanlamaCozumleri />} />
        <Route path="/hizmetler/veri-depolama-cozumleri" element={<VeriDepolama />} />
        <Route path="/hizmetler/raporlama-ve-is-zekasi-cozumleri" element={<RaporlamaIsZekasi />} />
      </Routes>
    </Layout>
  );
}

export default App;
