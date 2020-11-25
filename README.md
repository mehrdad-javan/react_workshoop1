# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Create Project
## install bootstrap
`npm install bootstrap --save`
### import bootstrap resource in src/index.js
```jsx
import 'bootstrap/dist/css/bootstrap.min.css';
```
## Ex1 Form
1. Create **function Component Person** with arrow function
2. Create **class Component PersonForm**
    - static HTML Form
    - constructor(props)
    - savePersonHandler empty method
    - handleChange for FirstName LastName empty method
    - add attribute value and onChange in all foem fields
    - add Person component at the end of form

## EX2 Table

1. Create TableHeader
2. Create TableStaticRow
3. Create TableView
4. Create TableRow
5. Change TableStaticRow to TableRow in TableView


## EX3 Routing

1. install react couter
    - `npm install react-router-dom`
    - import int App.js `import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';`
2. Change App.js
```jsx
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PersonForm from './components/PersonForm';
import TableView from './components/TableView';
import Menu from './components/Menu';

function App() {
  return (
    <div>
      <Router>
        <Switch> 
            <Route path = "/menu" exact component = {Menu}></Route>
            <Route path = "/" exact component = {TableView}></Route>
            <Route path = "/person-form" component = {PersonForm}></Route>
            <Route path = "/person-view" component = {TableView}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

```

3. Create Menu Component and add rout in App.js
` <Route path = "/menu" exact component = {Menu}></Route>`