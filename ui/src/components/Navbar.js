import React from 'react'
import { Link } from 'react-router-dom'
    
const Navbar = () => {
	const wrapperStyles = {
    width: "80%",
    margin:" 0 auto",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "10px"
  }

  const logoStyles = {
  	margin: "0"
  }

  const linkItemStyles = {
  	marginLeft: "10px",
  	textDecoration: "none"
  }

  return (
    <div id='navbar' style={wrapperStyles}>
      <h1 style={logoStyles}>Find Me NYC</h1>
      <div>
      	<Link style={linkItemStyles} to="/admin">admin</Link>
      	<Link style={linkItemStyles} to="/search">search</Link>
      	<Link style={linkItemStyles} to="/signup">logout</Link>
      </div>
    </div>
  )
}

export default Navbar