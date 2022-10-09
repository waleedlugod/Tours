import React from "react";

function Tour({ img, name, info, image, price }) {
	return (
		<>
			<img src={img} alt={name} />
		</>
	);
}

export default Tour;
