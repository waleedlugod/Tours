import React, { useState } from "react";

function Card({ id, name, info, image, price, handleRemoveTour }) {
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
					<button className="sl-btn" onClick={() => setShow(!show)}>
						Show Less
					</button>
				</p>
				<button className="ni-btn" onClick={() => handleRemoveTour(id)}>
					Not Interested
				</button>
			</div>
		</div>
	);
}

export default Card;
