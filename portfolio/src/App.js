import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Bio from './pages/bio';
import Work from './pages/work';
import Contact from './pages/contact';
  
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/bio' exact component={Bio} />
        <Route path='/work' component={Work} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>
  );
}
  
export default App;