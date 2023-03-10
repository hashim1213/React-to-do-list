To-Do List App
--------------
This is a simple to-do list app built using React, where you can add tasks to a list, mark them as completed, and watch flowers grow in a virtual garden as you complete your tasks.

Features
---------
Add tasks with due dates to the list
Mark tasks as completed by clicking on them
Watch flowers grow in the garden as you complete your tasks
Reset the list and the garden by clicking on a button

How to run the app
----
Clone the repository to your local machine
Navigate to the project directory in your terminal
Run npm install to install the dependencies
Run npm start to start the app
Open http://localhost:3000 to view it in the browser

How to use the app
----
Type in your list name and your name in the input fields provided.
Add a task to the list by typing in the task name and its due date in the input fields provided and click on the "Add Task" button.
Once you complete a task, click on it to mark it as completed.
As you complete tasks, flowers will grow in the garden.
To reset the list and the garden, click on the "Reset List" button.

Dependencies
----
React: A JavaScript library for building user interfaces.
useState: A hook that allows functional components to have state.
useEffect: A hook that allows functional components to use lifecycle methods.
Task component: A child component that displays a task and its due date.
styles.css: A CSS file that provides styling to the app.

---

Explanation of the code
The App function is the main function that renders the app. It uses useState and useEffect hooks to manage the app's state and lifecycle. The app's state includes an array of tasks, an array of flowers, an array of garden locations, a list name, and a user name.

The useEffect hook is used to add a new flower to the garden every 24 hours. This is done by creating a timer using setInterval that runs every 24 hours and adds a new flower to the flowers state array using setFlowers. The useEffect hook also returns a function that clears the timer using clearInterval when the component unmounts.

The handleTaskGrow function is used to update the state when a task is marked as completed. It updates the tasks state by setting the isCompleted property of the completed task to true. It also updates the garden and flowers state by adding a new flower to each array with a random size and location.

The addTask function is used to add a new task to the tasks state array when the "Add Task" button is clicked. It extracts the task name and due date from the input fields and adds a new task object to the tasks state array using setTasks. It then resets the input fields using e.target.reset().

The resetList function is used to reset the tasks, flowers, and garden state arrays to an empty array when the "Reset List" button is clicked. It does this by calling setTasks([]) and setFlowers([]).

The deleteTask function is used to delete a task from the tasks state array when the "Delete" button is clicked. It does this by creating a copy of the tasks state array using the spread operator, removing the task at the specified index using splice, and updating the tasks state array using setTasks.

The Task component is a child component that displays a task and its due date. It receives the task object as a prop and uses the onGrow and onDelete functions to handle the "Grow" and "Delete" buttons respectively.

Conclusion
This to-do list app is a simple example of how React can be used to build user interfaces. It uses React hooks to manage state and lifecycle, and child components to modularize the code. The app can be further extended by adding features like persistent storage, filtering, and sorting.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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
