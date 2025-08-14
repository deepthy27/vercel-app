import React, { useState, useEffect } from "react";

function App() {
  const [backendData, setBackendData] = useState(null);

  useEffect(() => {
    fetch("/api/hello")
      .then(res => res.json())
      .then(data => setBackendData(data));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h1>🚀 Full-Stack App on Vercel</h1>
      <p>This is the React frontend.</p>

      <h2>Backend Response:</h2>
      {backendData ? (
        <div>
          <p>{backendData.message}</p>
          <p>Server Time: {backendData.time}</p>
        </div>
      ) : (
        <p>Loading backend data...</p>
      )}
    </div>
  );
}

export default App;
