"use client";

import React, { useState } from "react";
import styles from "../../styles/SpeedTest.module.css";

interface SpeedTestResults {
  download: number;
  upload: number;
  ping: number;
}

const SpeedTest = () => {
  const [status, setStatus] = useState("Click GO to start the test");
  const [results, setResults] = useState<SpeedTestResults | null>(null);

  const startTest = async () => {
    setStatus("Finding optimal server...");

    try {
      const response = await fetch('http://localhost:5000/speedtest');
      const data: SpeedTestResults = await response.json();

      // Log the data to verify its structure
      console.log("Data received from backend:", data);

      setStatus("Test complete!");
      setResults(data);
    } catch (error) {
      setStatus("Failed to run speed test");
      console.error("Error during speed test:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>SPEEDTEST</h1>
      <div className={styles.circle}>
        <button className={styles.goButton} onClick={startTest}>GO</button>
      </div>
      <p className={styles.status}>{status}</p>
      {results && (
        <div className={styles.results}>
          <p>Download: {results.download} Mbps</p>
          <p>Upload: {results.upload} Mbps</p>
          <p>Ping: {results.ping} ms</p>
        </div>
      )}
    </div>
  );
};

export default SpeedTest;