import React from 'react'
import { Link } from 'react-router-dom'

const Header = props => {
  return (
    <header className="c-header">
      <nav className="c-navigation">
        <ul className="c-navigation__menu">
          <li className="c-navigation__menu-item">
            <Link to={'/'} className="c-navigation__menu-link">
              Home
            </Link>
          </li>

          <li className="c-navigation__menu-item">
            <Link to={'/heroes'} className="c-navigation__menu-link">
              Heroes
            </Link>
          </li>

          <li className="c-navigation__menu-item">
            <Link to={'/hero-add'} className="c-navigation__menu-link">
              Add a hero
            </Link>
          </li>

          <li className="c-navigation__menu-item">
            <Link to={'/about'} className="c-navigation__menu-link">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

Header.defaultProps = {
  title: 'Heroes battle ground',
  subtitle: 'Choose your destiny',
}

export default Header
