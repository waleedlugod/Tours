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

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			{tours.map((tour) => {
				return <Card key={tour.id} {...tour} />;
			})}
		</>
	);
}

export default Cards;
