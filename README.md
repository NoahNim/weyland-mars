# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Project Guide

### Weyland-Yutani

This web app is a website and directory for the fictional Weyland-Yutani Corporation (FAIR USE ACT TO USE) from the Aliens franchise (it's also in Avatar) and its fictional Mars settlement colony. Of course things aren't exactly going as planned, but all settlers sign a waiver and Mars is the anarcho-capitalist dream. The app is from the point of view of a high ranking office/exec of the Mars colony

### Data Set

The app uses a hardcoded data set the includes multiple arrays with their elements being objects. These arrays will be passed through props to display them on the app. The data sets are: Files, Important, Messages, Logs

### Components

The App will include multiple components:

#### Welcome Page

This component is the home page for the employee. It displays a greeting and the most important information (news, bulletins, etc) on it, as well as links to other components in the app

#### Files and File

This contains important reports, each is a file. Employee can create, read, update, and delete files.

#### Messages

This contains messages to the employee from other employees. The employee can also send messages. (This messaging system is just fake though, pulled and pushed to the data set).

#### Important

This component contains information deemed important. News, PSA's, etc.

#### Logs

This component contains logs recorded by the employee. The employee can create new logs, edit logs, and delete logs too.
