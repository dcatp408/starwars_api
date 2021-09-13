import {BrowserRouter, Switch, Route } from "react-router-dom"
import Form from './components/Form';
import People from './components/People';
import Error from './components/Error';
import Planet from './components/Planet';



const Home = (props) => {
  return (
    <Form />
  )
}
function App() {
  return (
    <BrowserRouter>
      <fieldset>
        <legend>Starwars</legend>
        <Form />
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/planet/:id">
            <Planet />
          </Route>
          <Route path="/people/:id">
            <People />
          </Route>
          <Route path="/error">
            <Error />
          </Route>
        </Switch>
      </fieldset>
    
    </BrowserRouter>
  );
}

export default App;
