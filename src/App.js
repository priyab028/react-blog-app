import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss'
import Create from './components/Create';
import Home from './components/Home';
import NavBar from './components/Navbar';
import BlogDetails from './components/BlogDetails'
import PageNotFound from './components/PageNotFound';


function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
             <Home />
            </Route>
            <Route  exact path="/create">
             <Create />
            </Route>
            <Route  exact path="/blogs/:id">
             <BlogDetails />
            </Route>
            <Route path="*">
             <PageNotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
