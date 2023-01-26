import { Routes, Route } from "react-router-dom";

import Header from "./views/header/Header";
import Footer from "./views/footer/Footer";
import SideNav from "./views/sidenav/SideNav";

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
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/projects" element={<h1>Projects</h1>} />
            <Route path="/contact" element={<h1>Contact</h1>} />
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
