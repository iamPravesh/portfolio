import { Routes, Route } from "react-router-dom";

import Header from "./views/header/Header";
import Footer from "./views/footer/Footer";
import SideNav from "./views/sidenav/SideNav";

import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Blog from "./pages/blog/Blog";
import Experience from "./pages/experience/Experience";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="main-container">
        <div className="sidenav">
          <SideNav />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
