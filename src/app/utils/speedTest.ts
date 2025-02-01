export async function testDownloadSpeed() {
    const fileUrl = "https://speed.hetzner.de/100MB.bin"; // 100MB test file
    const fileSizeInBits = 100 * 8 * 1024 * 1024; // Convert 100MB to bits
  
    const startTime = performance.now();
    await fetch(fileUrl);
    const endTime = performance.now();
  
    const duration = (endTime - startTime) / 1000; // Convert ms to seconds
    const speedMbps = (fileSizeInBits / duration) / 1_000_000; // Convert to Mbps
    return speedMbps.toFixed(2);
  }
  
  export async function testUploadSpeed() {
    const data = new Blob([new ArrayBuffer(1 * 1024 * 1024)]); // 1MB file
  
    const startTime = performance.now();
    await fetch("https://httpbin.org/post", { method: "POST", body: data });
    const endTime = performance.now();
  
    const duration = (endTime - startTime) / 1000;
    const speedMbps = (1 * 8) / duration; // Convert to Mbps
    return speedMbps.toFixed(2);
  }
  
  export async function testPing() {
    const startTime = performance.now();
    await fetch("https://www.google.com");
    const endTime = performance.now();
    return (endTime - startTime).toFixed(2);
  }
  
  export async function testJitter() {
    const pings = [];
    for (let i = 0; i < 5; i++) {
      const ping = await testPing();
      pings.push(parseFloat(ping));
    }
    const jitter = Math.max(...pings) - Math.min(...pings);
    return jitter.toFixed(2);
  }
  