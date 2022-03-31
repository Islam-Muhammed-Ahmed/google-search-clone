import React from "react";
import { NavLink } from "react-router-dom";
import "./links.css";
const links = [
  { url: "/search", text: "🔎 All" },
  { url: "/news", text: "📰 News" },
  { url: "/image", text: "📸 Images" },
  { url: "/video", text: "🎥 Videos" },
];

const Links = () => {
  return (
    <div className="d-flex justify-content-sm-around flex-wrap justify-content-md-between align-align-items-center mt-4">
      {links.map(({ url, text }, index) => (
        <NavLink key={index} className="nav-link" to={url}>
          <p> {text}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default Links;
