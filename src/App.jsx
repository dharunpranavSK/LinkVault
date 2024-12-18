import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LinkCard from "./components/LinkCard";
import "./index.css";

const App = () => {
  const links = [
    { title: "Medium", url: "https://medium.com/@dharunnirai" },
    { title: "Instagram", url: "https://www.instagram.com/dharun_pranav/" },
    { title: "GitHub", url: "https://github.com/dharunpranavSK/" },
    { title: "LinkedIn", url: "https://www.linkedin.com/in/dharunpranavsk/" },
  ];

  return (
    <div className="app">
      <Header />
      <div className="links">
        {links.map((link, index) => (
          <LinkCard key={index} title={link.title} url={link.url} />
        ))}
        <Footer/>
      </div>
      
    </div>
  );
};

export default App;
