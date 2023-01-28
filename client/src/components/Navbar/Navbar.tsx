import { AppBar, IconButton, Toolbar } from '@mui/material';
import React from 'react';
import logo from "./../../assets/logo12.png"

export interface NavbarInterface {}

const Navbar : React.FC<NavbarInterface> = () => {
	return (
	<AppBar position="fixed" color="transparent" id='navbar'>
		<Toolbar>
		<IconButton
			size="large"
			edge="start"
			color="inherit"
			aria-label="menu"
			sx={{ mr: 2 }}
		>
			<img height="60" src={logo} alt="Logo" srcSet="" />
		</IconButton>
		
		{/* <Button color="inherit">Login</Button> */}
		</Toolbar>
  	</AppBar>
  );
};

export default Navbar;
