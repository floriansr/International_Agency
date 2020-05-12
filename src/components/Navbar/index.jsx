import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<div className="container">
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/works">Projects</Link>
			</div>
		</>
	);
};

export default Navbar;
