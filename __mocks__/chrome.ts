export const chrome = {
    storage: {
        local: {
            get: jest.fn(),
            set: jest.fn(),
        },
    },
    action: {
        setBadgeText: jest.fn(),
        setBadgeBackgroundColor: jest.fn(),
    },
    runtime: {
        onInstalled: {
            addListener: jest.fn(),
        },
    },
    alarms: {
        create: jest.fn(),
        onAlarm: {
            addListener: jest.fn(),
        },
    },
};
