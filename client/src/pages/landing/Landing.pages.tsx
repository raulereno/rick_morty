import React from 'react';
import {Link} from "react-router-dom"
export interface LandingInterface {}


const Landing : React.FC<LandingInterface> = () => {
	return <div id='container_landing'>

	<Link to={"/home"}>Start</Link>
	</div>;
};

export default Landing;
