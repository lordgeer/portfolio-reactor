import React from 'react';
import './App.css';
import Header from './components/index.js';
import Footer from './components/footer.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Bio from './pages/bio';
import Work from './pages/work';
import Contact from './pages/contact';
import 'bootstrap/dist/css/bootstrap.min.css';
  
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path='/' exact component={Bio} />
          <Route path='/work' component={Work} />
          <Route path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
  
export default App;