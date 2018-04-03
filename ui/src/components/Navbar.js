import React from 'react'
import { Link } from 'react-router-dom'
    
const Navbar = () => {

  return (
    <div id='navbar'>
      <h1>Find Me NYC</h1>
      <Link to="/users">Users</Link>
      <Link to="/search">Search</Link>
    </div>
  )
}

export default Navbar