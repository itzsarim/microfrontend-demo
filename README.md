# Microfrontend Demo

![Kapture 2025-08-05 at 21 44 29](https://github.com/user-attachments/assets/016f0710-4504-417f-954b-aea820f8a850)


This project demonstrates the concept of microfrontends using a simple, modular architecture. Each part of the frontend is developed, deployed, and maintained independently, allowing teams to work on different features without impacting each other.

## Overview

The application is composed of one host app and one remote microfrontend counter app. Each microfrontend can be developed using different frameworks or libraries, and is responsible for a specific feature or section of the overall application. Here both are developed in react

Typical microfrontend features in this demo include:
- Independent builds for each microfrontend
- Lazy loading and dynamic federation
- Clear separation of concerns between container and microfrontends
- Example microfrontends (counterapp)

## How It Works

- The shell application (main host) loads remote microfrontends at runtime.
- Microfrontends here are independant and do not communicate with each other.
- Each microfrontend can be updated and deployed independently.

## Running the Microfrontend Demo

### Prerequisites

- Node.js (v16 or above recommended)
- npm or yarn

### Install Dependencies

From the host-app directory, install all dependencies:

```bash
npm install
```

### Start the Application

Start the host app

```bash
npm start
```

you need to run each microfrontend independently. For example:

```bash
# In each microfrontend directory:
npm start
```

Check the documentation or scripts in each microfrontend folder for specific commands.

### Access the App

Once started, open your browser and navigate to:

```
http://localhost:8081
```

and to 
```
http://localhost:8080
```


## Learn More

- [Microfrontends.org](https://microfrontends.org/)
- [Webpack Module Federation](https://webpack.js.org/concepts/module-federation/)
- [Single SPA](https://single-spa.js.org/)

---

This demo is for educational and experimentation purposes. Contributions are welcome!
