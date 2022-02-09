import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Views/Home/Home';
import CustomHook from './Components/CustomHook/CustomHook';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <CustomHook />
      </div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
