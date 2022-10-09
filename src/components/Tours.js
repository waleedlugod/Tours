import React, { useState, useEffect } from "react";
import Tour from "./Tour";

const url = "https://course-api.com/react-tours-project";

function Tours() {
	const [tours, setTours] = useState([]);

	async function getData() {
		const resp = await fetch(url);
		const data = await resp.json();
		setTours(data);
	}

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			{tours.map((tour) => {
				return <Tour key={tour.id} {...tour} />;
			})}
		</>
	);
}

export default Tours;
