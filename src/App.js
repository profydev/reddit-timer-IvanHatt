import React from 'react'
import Content from './components/Content'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './index.css'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Content} />
          <Route path='/search' />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
