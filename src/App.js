import React from 'react'
import injectContext from './store/appContext'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Home from './views/Home'
import Planets from './components/planets/Planets'
import PlanetCard from './components/planets/PlanetCard'
import Vehicles from './components/vehicles/Vehicles'
import VehicleCard from './components/vehicles/VehicleCard'
import People from './components/people/People'
import PeopleCard from './components/people/PeopleCard'
import NavbarTop from './components/NavbarTop'

function App() {
  return (
    <Container>
      <BrowserRouter>
        <NavbarTop />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/people" component={People}></Route>
          <Route exact path="/people/:id" component={PeopleCard}></Route>
          <Route exact path="/planets" component={Planets}></Route>
          <Route exact path="/planets/:id" component={PlanetCard}></Route>
          <Route exact path="/vehicles" component={Vehicles}></Route>
          <Route exact path="/vehicles/:id" component={VehicleCard}></Route>
          <Route render={() => <h1>Not Found!</h1>} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default injectContext(App);
