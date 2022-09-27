import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import NotFound from "./../pages/notFound";
import About from "./../pages/about";
import Catalog from "../pages/catalog";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
