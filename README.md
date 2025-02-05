# Fitness App Front-end

## Overview

Fitness App is a full-stack application that allows users to create accounts, browse and review fitness courses, favorite courses, watch videos, and more. Admin users can manage courses and categories. The app features a modern design with a color palette of black, grey, and bright green.

### Features

- **User Authentication**: Users can create an account, log in, and manage their profile.
- **Course Management**: Browse, favorite, and review courses, as well as watch course videos.
- **Admin Role**: Admins can create new courses and categories.
- **Modern UI**: The app is built with Tailwind CSS and DaisyUI for a fresh, responsive interface.

---

## Table of Contents

- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Usage](#usage)
- [Contributing](#contributing)

---

## Installation

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (v14+ recommended)
- **npm** (v6+)

### Step-by-Step Guide

#### 1. Install Tailwind CSS

To install Tailwind CSS as a Vite plugin:

```bash
npm install tailwindcss @tailwindcss/vite
```

This will install the necessary packages for integrating Tailwind CSS with Vite.

#### 2\. Configure the Vite Plugin

Next, you need to configure the Vite plugin. In your `vite.config.ts` file, add the `@tailwindcss/vite` plugin to ensure that Vite is set up to handle Tailwind CSS correctly.

```import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

This code sets up the necessary Vite configuration to integrate Tailwind CSS into your project.

#### 3\. Import Tailwind CSS

After setting up Tailwind CSS, you need to import it into your CSS file. Open your `index.css` (or whichever main CSS file you are using) and add the following line to import Tailwind CSS.

`@import "tailwindcss";`

This will allow Tailwind CSS classes to be applied globally in your app.

#### 4\. Install DaisyUI

To enhance the UI with ready-made components, you can install DaisyUI. Install the beta version of DaisyUI with the following command:

`npm i -D daisyui@beta`

Once installed, you need to add DaisyUI to your `index.css` file. Add the following lines to import both Tailwind CSS and DaisyUI:

```@import "tailwindcss";
@plugin "daisyui";
```

This setup will provide a wide range of pre-built components from DaisyUI that you can use to build your app's UI quickly.

#### 5\. Install JWT Decode

To handle JWT token decoding, you'll need to install the `jwt-decode` library. This library helps decode JSON Web Tokens and check their validity.

`npm i jwt-decode`

After installing, import the JWT decode function where you manage authentication, typically in the `authcontext.js` file, by adding this import statement:

`import { jwtDecode } from "jwt-decode";`

This will enable your app to decode JWT tokens for user authentication purposes.

---

## Folder Structure

Here is an overview of the folder structure for the project:

```
/node_modules
/public
/src
    /assets
        /components
    /context
        authContext.js
        userContext.js
        courseContext.js
        categoryContext.js
        reviewContext.js
    /pages
        HomePage.jsx
        CoursePage.jsx
        AdminPage.jsx
        ...
/.gitignore
/enlist.config.js
/index.html
/package-lock.json
/package.json
/readme.md
/vite.config.js
/src/App.jsx
/src/index.jsx
/src/main.jsx
```

### Description of Folder Structure

- **/node_modules**: Contains all the installed dependencies.
- **/public**: Contains static files like images, icons, etc.
- **/src**: This is where the main source code lives.
  - **/assets**: Contains reusable components, UI elements, and styles.
  - **/context**: Contains the context for global state management, such as authentication, user data, courses, etc.
  - **/pages**: Contains the components for different pages of the app (Home, Courses, Admin, etc.).
  - **App.jsx**: The main application component that serves as the entry point for the app.
  - **main.jsx**: The entry point for React, where the `App` component is rendered into the DOM using `createRoot`.
- **.gitignore**: Specifies files and directories that should be ignored by version control (Git).
- **enlist.config.js**: A configuration file for the application, possibly related to build or deployment settings.
- **index.html**: The main HTML file where the app is mounted.
- **package-lock.json**: Ensures that the exact same version of dependencies is installed across different machines.
- **package.json**: Contains metadata and dependencies for the project.
- **vite.config.js**: Configuration for Vite, the build tool used in the project.
- **readme.md**: This file, which provides documentation for the project.

### Context

The app uses global context management to share data across components. In the `main.jsx` file, the global contexts (authContext, userContext, courseContext, categoryContext, and reviewContext) are wrapped around the `App` component to make the data available globally throughout the app:

```
import { AuthContextProvider } from './context/authContext';
import { UserContextProvider } from './context/userContext';
import { CourseContextProvider } from './context/courseContext';
import { CategoryContextProvider } from './context/categoryContext';
import { ReviewContextProvider } from './context/reviewContext';

 createRoot(document.getElementById('root')).render(
    <StrictMode>
      <AuthContextProvider>
        <UserContextProvider>
          <CourseContextProvider>
            <CategoryContextProvider>
              <ReviewContextProvider>
                <App />
              </ReviewContextProvider>
            </CategoryContextProvider>
          </CourseContextProvider>
        </UserContextProvider>
      </AuthContextProvider>
    </StrictMode>,
  );
```

---

## Usage

`npm install` command to install all the dependencies automatically

Once the app is set up, you can start the development server by running:

`npm run dev`

This command will start a development server and launch the app in your browser, usually accessible at `http://localhost:5173` or the port configured in your project.

### Features

- **Browse Courses**: Users can browse a list of fitness courses.
- **Favorite Courses**: Mark courses as favorites for easy access later.
- **Review Courses**: Add reviews to courses to share feedback with others.
- **Admin Controls**: Admin users can create new courses and categories, manage content, and more.

---

## Contributing

We welcome contributions to the project! If you'd like to contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your changes.
3.  Commit your changes and push to your fork.
4.  Submit a pull request with a description of the changes.

Make sure to follow the project's coding standards and provide tests for any new features.

---

### Folder Structure Diagram

Below is a diagram representation of the folder structure:

```
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   │   └── components/
│   ├── context/
│   │   ├── authContext.js
│   │   ├── userContext.js
│   │   ├── courseContext.js
│   │   ├── categoryContext.js
│   │   └── reviewContext.js
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── CoursePage.jsx
│   │   └── AdminPage.jsx
│   ├── App.jsx
│   ├── index.jsx
│   └── main.jsx
├── .gitignore
├── enlist.config.js
├── index.html
├── package-lock.json
├── package.json
├── readme.md
└── vite.config.js
```
