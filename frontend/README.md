# React frontend

## How to build docker image and start container

This is just a short manual for building React part, there are some APIs available for learning purposes, so my python part is not necessary to continue development on React.
An example API for fetching: https://jsonplaceholder.typicode.com/posts taken from https://rahmanfadhil.com/fetch-data-with-react-hooks/

Building:

```
cd frontend
docker run --rm -d -v ${PWD}:/app -w /app --name node node npm install
docker build -f Dockerfile.prod -t tymik/frontend .
```

Starting container:

```
docker run -it -d --rm -p 80:80 --name frontend tymik/frontend
```

You also need to use `docker run --rm -d -v ${PWD}:/app -w /app --name node node npm install` every time you add new dependencies to `package.json`.

## Debugging mode

In case you need unmimified version for debugging

Building:

```
cd frontend
docker run --rm -d -v ${PWD}:/app -w /app --name node node npm install
docker build -f Dockerfile.debug -t tymik/frontend:debug .
```

Starting container:

```
docker run -it -d --rm -p 80:3000 --name frontend tymik/frontend:debug
```

## ORIGINAL README FROM BOOTSTRAPPED APP BELOW

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
