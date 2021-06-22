import React from 'react';
import './App.css';
import Navbar from './components';
import Footer from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Bio from './pages/bio';
import Work from './pages/work';
import Contact from './pages/contact';
import 'bootstrap/dist/css/bootstrap.min.css';
  
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Bio} />
        <Route path='/work' component={Work} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>
  );
}
  
export default App;