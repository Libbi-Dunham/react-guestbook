import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Views/Home/Home';
import CustomHook from './Components/CustomHook/CustomHook';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
      <div className="navbar">
        <CustomHook />
      </div>
    </div>
  );
}

export default App;
