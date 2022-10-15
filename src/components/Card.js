import React, { useState } from "react";

function Card({ name, info, image, price }) {
	const [show, setShow] = useState(true);

	return (
		<div className="card">
			<div
				className="image-container"
				style={{ backgroundImage: `url(${image})` }}
			></div>
			<div className="desc">
				<div className="card-header">
					<h4>{name}</h4>
					<h4 className="price">{`$${price}`}</h4>
				</div>
				<p>
					{show ? info : info.substring(0, 200) + "..."}
					<button onClick={() => setShow(!show)}>Show Less</button>
				</p>
			</div>
		</div>
	);
}

export default Card;
