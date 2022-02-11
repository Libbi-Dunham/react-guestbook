import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Views/Home/Home';
import CustomHook from './Components/CustomHook/CustomHook';
import Footer from './Views/Footer/Footer';
import './App.css';
import EntryList from './Components/EntryList/EntryList';

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
          <Route exact path="/entries">
            <EntryList />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
