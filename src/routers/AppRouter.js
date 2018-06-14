import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

import AboutPage from '../pages/About.page'
import HeroesPage from '../pages/Heroes.page'
import HeroAddPage from '../pages/HeroAdd.page'
import HeroUpdateContainer from '../components/hero/HeroUpdate.container'

const AppRouter = () => (
  <BrowserRouter>
    <section className="c-page-wrapper">
      <Header />

      <div className="c-page-container">
        <Switch>
          <Route path="/heroes" component={HeroesPage} exact={true} />
          <Route
            path="/heroes/:id"
            render={props => <HeroUpdateContainer {...props} isDetailed />}
          />
          <Route path="/hero-add" component={HeroAddPage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </div>

      <Footer />
    </section>
  </BrowserRouter>
)

export default AppRouter
