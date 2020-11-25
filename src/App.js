import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TableView from './components/TableView';
import PersonForm from './components/PersonForm';

function App() {
  return (
    <div>
    <Router>
      <Switch> 
          <Route path = "/" exact component = {TableView}></Route>
          <Route path = "/person-form" component = {PersonForm}></Route>
          <Route path = "/person-view" component = {TableView}></Route>
      </Switch>
    </Router>
  </div>
  );
}

export default App;
