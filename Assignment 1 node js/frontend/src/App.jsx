import React from "react";
import Header from "./components/header.jsx";
import HomePage from "./page/HomePage";   
import WorkPage from "./page/WorkPage";

const App = () => {
  return (
    <div>
      <Header />
      <HomePage />
      <WorkPage />
    </div>
  );
};

export default App;
