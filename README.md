This is a event management application built with React for the frontend and Node.js with MongoDB for the backend. The application is unfinished due to time contraints.

Technologies Used
React: A JavaScript library for building user interfaces.
Node.js: A JavaScript runtime environment for executing JavaScript code outside of a web browser.
Express.js: A web application framework for Node.js used for building RESTful APIs.
MongoDB: A NoSQL database used for storing event data.
React Router: A routing library for React applications.

Approach Taken
Frontend: The frontend of the application is built with React, providing a user-friendly interface for users to view and create events. 

Backend: The backend is built with Node.js and Express.js, providing RESTful API endpoints for fetching and creating events. 

Usage Instructions
To run the application locally, follow these steps:

Clone the repository to your local machine:

bash
Copy code
git clone <repository-url>
Navigate to the project directory:

bash
Copy code
cd client
npm install
cd ..
npm install
Start the backend server:

bash
Copy code
cd client
npm start
Open your web browser and navigate to http://localhost:3000 to view the application.

Unsolved Problems
Display: Getting my events in containers on the page

Database: The server is not yet connected to MongoDB. I created my API - the database orginially written in Express soon to be converted.

Authentication: User authentication and authorization features are not implemented in this version of the application. Adding authentication would enhance security and allow users to manage their own events.

Error handling: Error handling mechanisms for handling invalid input or server errors are minimal in this version and will become more robust. 

Testing: Automated tests for frontend and backend components are not included in this version.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
