interface Message {
    id: string;
    content: string;
    priority: string;
    timestamp: string;
    read: boolean;
}

export function getMessages(): Promise<Message[]> {
    return new Promise((resolve) => {
        chrome.storage.local.get(["messages"], (result) => {
            resolve(result.messages || []);
        });
    });
}

export function markAsRead(id: string): void {
    getMessages().then((messages) => {
        const updatedMessages = messages.map((msg) =>
            msg.id === id ? { ...msg, read: true } : msg
        );
        chrome.storage.local.set({ messages: updatedMessages });
    });
}
