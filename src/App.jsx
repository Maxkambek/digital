/** @format */
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PortfolioPage from "./pages/PortfolioPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Audit from "./pages/Audit";
import Marketing from "./pages/Marketing";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Quiz from "./pages/Quiz";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<PortfolioPage />} path="/portfolio" />
        <Route element={<Quiz />} path="/quiz" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Audit />} path="/audit" />
        <Route element={<Marketing />} path="/marketing" />
        <Route element={<Blog />} path="/blog" />
        <Route element={<BlogDetail />} path="/blog/:id" />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
