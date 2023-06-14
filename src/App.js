import { BrowserRouter as Router,Route,Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Home from './pages/home/Home';


function App() {
  return (
    <Router>
      <div className="App">
        {/* decides where the page contents to goes: going into different pages */}
         <Switch>
            <Route path='/'>
              <Home />
            </Route>
         </Switch>
      </div>
    </Router>
  );
}

export default App;
