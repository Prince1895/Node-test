import React from "react";

const Header = () => {
  return (
    <header style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px" }}>
      <div><strong>Logo</strong></div>

      <nav>
        <a href="/" style={{ marginRight: "15px" }}>Home</a>
        <a href="/work">Work</a>
      </nav>
    </header>
  );
};

export default Header;
