"use client";

import { useEffect, useState } from "react";

// Define the NetworkInformation type
interface NetworkInformation extends EventTarget {
  effectiveType: string;
  downlink: number;
  rtt: number;
}

// Extend the Navigator interface to include the connection property
interface NavigatorWithConnection extends Navigator {
  connection?: NetworkInformation;
}

export default function NetworkInfo() {
  const [networkType, setNetworkType] = useState<string | null>(null);
  const [downlink, setDownlink] = useState<number | null>(null);
  const [latency, setLatency] = useState<number | null>(null);

  useEffect(() => {
    const navigatorWithConnection = navigator as NavigatorWithConnection;

    if ("connection" in navigatorWithConnection && navigatorWithConnection.connection) {
      const connection = navigatorWithConnection.connection;
      setNetworkType(connection.effectiveType);
      setDownlink(connection.downlink);
      setLatency(connection.rtt);
    }
  }, []);

  return (
    <div className="mt-4 text-center text-gray-300">
      <p>Network: {networkType || "Unknown"}</p>
      <p>Downlink: {downlink ? `${downlink} Mbps` : "Unknown"}</p>
      <p>Latency: {latency ? `${latency} ms` : "Unknown"}</p>
    </div>
  );
}