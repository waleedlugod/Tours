import React, { useState, useEffect } from "react";
import Card from "./Card";

const url = "https://course-api.com/react-tours-project";

function Cards() {
	const [tours, setTours] = useState([]);

	async function getData() {
		const resp = await fetch(url);
		const data = await resp.json();
		setTours(data);
	}

	function handleRemoveTour(id) {
		setTours(() => tours.filter((tour) => tour.id != id));
	}

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			{tours.map((tour) => {
				return (
					<Card key={tour.id} {...tour} handleRemoveTour={handleRemoveTour} />
				);
			})}
		</>
	);
}

export default Cards;
