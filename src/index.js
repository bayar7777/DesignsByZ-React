import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Pricing from './views/pricing'
import Legal1 from './views/legal1'
import Home from './views/home'
import Legal from './views/legal'
import Contact from './views/contact'
import About from './views/about'
import Legal2 from './views/legal2'
import About1 from './views/about1'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Pricing} exact path="/pricing" />
        <Route component={Legal1} exact path="/legal1" />
        <Route component={Home} exact path="/" />
        <Route component={Legal} exact path="/legal" />
        <Route component={Contact} exact path="/contact" />
        <Route component={About} exact path="/about" />
        <Route component={Legal2} exact path="/legal2" />
        <Route component={About1} exact path="/about1" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
