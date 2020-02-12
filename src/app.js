import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.scss'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Nav from './components/common/Nav'
import Home from './components/common/Home'
import PubIndex from './components/pubs/PubIndex'
import PubShow from './components/pubs/PubShow'
import EventIndex from './components/events/EventIndex'
import EventNew from './components/events/EventNew'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import TeamIndex from './components/teams/TeamIndex'
import Unknown from './components/common/Unknown'
import Profile from './components/profile/Profile'
// import StarRating from './components/common/StarRating'

class App extends React.Component {
  render() {
    return (
      <main> 
        <BrowserRouter>   
          <Nav />
          <Switch>
            <Route exact path='/' component={Home}></Route>
            {/* <Route path='/' component={StarRating}></Route> */}
            <Route path='/pubs/:id' component={PubShow}></Route>
            <Route path='/pubs' component={PubIndex}></Route>
            <Route path='/profiles/:id' component={Profile}></Route>
            <Route path='/events/new' component={EventNew}></Route>
            <Route path='/events' component={EventIndex}></Route>
            <Route path='/register' component={Register}></Route>
            <Route path='/login' component={Login}></Route>
            {/* //! XW: TEST ROUTE; DELETE LATER */}
            <Route path='/teams' component={TeamIndex}></Route>
            <Route path='/*' component={Unknown}></Route>
          </Switch>
        </BrowserRouter>
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)


//! PAGES
//* HOME
//TODO COMPONENTS: NAVBAR

//* PUB INDEX
//TODO COMPONENTS: SEARCHBAR, NAVBAR, MAP, FEATURED PUBS(IMPORT FROM PUBCARD COMPONENT), CREATE NEW PUBS BUTTON

//* EVENT INDEX
//TODO COMPONENTS: SEARCHBAR, NAVBAR, MAP, FEATURED PUBS(IMPORT FROM PUBCARD COMPONENT), CREATE NEW EVENTS BUTTON