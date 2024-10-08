import { getMessages, markAsRead } from '../storage';

interface ChromeStorage {
  local: {
    get: jest.Mock;
    set: jest.Mock;
  };
}

const mockChrome: { storage: ChromeStorage } = {
  storage: {
    local: {
      get: jest.fn(),
      set: jest.fn(),
    },
  },
};


(global as any).chrome = mockChrome;  

describe('storage utilities', () => {
  beforeEach(() => {
    jest.clearAllMocks();  
  });

  test('getMessages should retrieve messages from chrome storage', async () => {
    const mockMessages = [
      { id: 'msg1', content: 'Message 1', read: false },
      { id: 'msg2', content: 'Message 2', read: true },
    ];

    mockChrome.storage.local.get.mockImplementation((keys, callback) => {
      callback({ messages: mockMessages });
    });

    const messages = await getMessages();
    
    expect(messages).toEqual(mockMessages);
    expect(mockChrome.storage.local.get).toHaveBeenCalledWith('messages');
  });

  test('markAsRead should update the read status of a message', async () => {
    const mockMessages = [
      { id: 'msg1', content: 'Message 1', read: false },
      { id: 'msg2', content: 'Message 2', read: true },
    ];

    mockChrome.storage.local.get.mockImplementation((keys, callback) => {
      callback({ messages: mockMessages });
    });

    await markAsRead('msg1');

    expect(mockChrome.storage.local.set).toHaveBeenCalledWith({
      messages: [
        { id: 'msg1', content: 'Message 1', read: true },
        { id: 'msg2', content: 'Message 2', read: true },
      ],
    });
  });
});
