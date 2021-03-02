import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Blog from './components/Blog'
import Admin from './components/Admin'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Blog} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </Router>
    
     
  )
}

export default App;
