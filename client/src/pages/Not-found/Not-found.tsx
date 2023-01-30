import React from 'react';
import {Link} from "react-router-dom"

export interface NotfoundInterface {}

const Notfound: React.FC<NotfoundInterface> = () => {
	return <div id='container_notFound'>

		<div>
			<h1>404 Not Found</h1>
			<Link to={"/home"}>Home</Link>
		</div>	
	</div>;
};

export default Notfound;
