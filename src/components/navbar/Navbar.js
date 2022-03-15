import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className='navbar'>
          <ul>
              <Link to="/" className="brand"
              ><h1>Cooking Ninja</h1></Link>

              <Link to="/create">Create Recipe</Link>

          </ul>
        </nav>
  )
}
