import React from "react";

function Card({ name, info, image, price }) {
	return (
		<div className="card">
			<div
				className="image-container"
				style={{ backgroundImage: `url(${image})` }}
			></div>
			<h4>{name}</h4>
		</div>
	);
}

export default Card;
