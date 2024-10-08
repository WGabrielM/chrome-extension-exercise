chrome.runtime.onInstalled.addListener(() => {
    fetchMessages();
  });
  
  function fetchMessages(): void {
    fetch("https://api.example.com/messages")
      .then((response) => response.json())
      .then((data) => {
        chrome.storage.local.set({ messages: data.messages });
        updateBadge(data.messages);
      })
      .catch((err) => {
        console.error("Error fetching messages", err);
      });
  }
  
  function updateBadge(messages: Message[]): void {
    const unreadCount = messages.filter((msg) => !msg.read).length;
    if (unreadCount > 0) {
      chrome.action.setBadgeText({ text: unreadCount.toString() });
      chrome.action.setBadgeBackgroundColor({ color: "red" });
    } else {
      chrome.action.setBadgeText({ text: "" });
    }
  }
  
  chrome.alarms.create("fetchMessages", { periodInMinutes: 1 });
  chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "fetchMessages") {
      fetchMessages();
    }
  });
  
  interface Message {
    id: string;
    content: string;
    priority: string;
    timestamp: string;
    read: boolean;
  }
  