import React, { useState } from "react";

const WorkPage = () => {
  const [data, setData] = useState("");

  const getFreeMemory = async () => {
    const res = await fetch("http://localhost:5000/free-memory");
    const result = await res.json();
    setData(
      `Free Memory: ${result.freeMemory} \nTotal Memory: ${result.totalMemory}`
    );
  };

  const getUserInfo = async () => {
    const res = await fetch("http://localhost:5000/user-info");
    const result = await res.json();
    setData(
      `Platform: ${result.platform}
User: ${result.user}
CPU: ${result.cpu}
Uptime: ${result.uptime}
Home Directory: ${result.homedir}
Hostname: ${result.hostname}`
    );
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Work Page</h2>

      <button onClick={getFreeMemory} style={{ marginRight: "10px" }}>
        Free Memory
      </button>

      <button onClick={getUserInfo}>
        User Info
      </button>

      <pre style={{ marginTop: "20px", textAlign: "left" }}>
        {data}
      </pre>
    </div>
  );
};

export default WorkPage;
