function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const timeText = `Часът е: ${hours}:${minutes}`;
    
    document.getElementById("time").textContent = timeText;
  }
  
  document.addEventListener("DOMContentLoaded", updateTime);
  