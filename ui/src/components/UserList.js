import React from 'react'

import User from './User'
import Navbar from './Navbar'
    
const UserPage = (props) => {
	const usersContainerStyles = {
		width: "80%",
		margin: "0 auto",
		fontFamily: "avenir"
	}

	const titleStyles = {
		textAlign: "center",
		marginTop: "50px",
		marginBottom: "70px"
	}

	const usersListStyles = {
		width: "80%",
		margin: "0 auto",
		display: "flex",
		flexWrap: "wrap",
		alignContent: "stretch"
	}

  return (
    <div id="users-wrapper">
    	<Navbar />
    	<div style={usersContainerStyles}>
    		<h2 style={titleStyles}>Admin</h2>
    		<div style={usersListStyles}>
    			{
		        props.users.map((user, index) => {
		          return (
		            <User
		              user={user}
		              key={index}
		              index={index}
		              deleteUser={props.deleteUser}
		              handleUserChange={props.handleUserChange}
		              updateUser={props.updateUser} />
		          )
		        })
		      }
    		</div>
    	</div>
    </div>
  )
}

export default UserPage