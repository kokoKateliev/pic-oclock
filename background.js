function setHourlyAlarm() {
    let now = new Date();
    let minutesUntilNextHour = 60 - now.getMinutes();
    chrome.alarms.create("hourlyAlarm", {
      delayInMinutes: minutesUntilNextHour,
      periodInMinutes: 60
    });
  }
  
  chrome.runtime.onStartup.addListener(() => {
    setHourlyAlarm();
  });
  
  chrome.runtime.onInstalled.addListener(() => {
    setHourlyAlarm();
  });
  
  chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "hourlyAlarm") {
      chrome.action.openPopup();
    }
  });
  