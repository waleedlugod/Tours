import React from "react";

function Header({ empty, getData, isLoading }) {
	if (isLoading) {
		return (
			<div className="header">
				<h2>Loading...</h2>
			</div>
		);
	} else if (empty) {
		return (
			<div className="header">
				<h2>No Tours Left</h2>
				<button className="refresh-btn" onClick={getData}>
					Refresh
				</button>
			</div>
		);
	} else {
		return (
			<div className="header">
				<h2>Our Tours</h2>
				<div className="line"></div>
			</div>
		);
	}
}

export default Header;
