chrome.runtime.onInstalled.addListener(() => {
  fetchMessages();
});

const response = await fetch('https://your-mock-api/messages');
const data = await response.json();
async function fetchMessages() {
  try {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return data;
  } catch (error) {
    console.error('Error fetching messages:', error);
    if (!data || !Array.isArray(data.messages) || data.messages.length === 0) {
      console.warn('No messages or invalid data format.');
    }
    chrome.action.setBadgeText({ text: 'ERR' });
  }
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
