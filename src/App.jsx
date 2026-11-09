import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollManager from "./components/layout/ScrollManager";
import Home from "./pages/Home";

// Inner pages are code-split; the home page ships in the main bundle.
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Work = lazy(() => import("./pages/Work"));
const Careers = lazy(() => import("./pages/Careers"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollManager />
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Suspense fallback={<div className="min-h-[100svh]" aria-hidden="true" />}>
          {/* Keyed wrapper = a light fade-in on every route change, with no exit delay */}
          <div key={location.pathname} className="page-enter">
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/work" element={<Work />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
