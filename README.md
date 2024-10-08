# Chrome Extension: Admin Messages

This project is a Chrome extension that displays messages from an organization's admin to users. It provides a user-friendly interface for viewing messages, marking them as read, and managing message history.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Building the Project](#building-the-project)
- [Running Tests](#running-tests)
- [CI/CD](#cicd)
- [Contributing](#contributing)
- [License](#license)

## Features

- Show a badge icon for unread messages.
- Display messages in a popup when the extension icon is clicked.
- Allow users to mark messages as read.
- Store message history locally.
- Periodic checks for new messages via a background script.

## Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS (or Bootstrap)
- **Testing**: Jest, React Testing Library
- **CI/CD**: GitHub Actions

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/WGabrielM/chrome-extension-exercise.git
   cd chrome-extension-exercise

2. Install the dependencies and run the project:

   ```bash
   npm install
   npm run dev

This will launch the project in development mode. You can load the unpacked extension in Chrome by following these steps:

Open Chrome and go to chrome://extensions.
Enable "Developer mode" in the top right corner.
Click on "Load unpacked" and select the dist folder of your project.

3. Building the Project

   ```bash
   npm run build
  
4. Runing Tests

    ```bash
   npm run test
