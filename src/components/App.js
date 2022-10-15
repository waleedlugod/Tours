import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Card from "./Card";

const url = "https://course-api.com/react-tours-project";

function App() {
	const [tours, setTours] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	async function getData() {
		setIsLoading(true);
		const resp = await fetch(url);
		const data = await resp.json();
		setTours(data);
		setIsLoading(false);
	}

	function handleRemoveTour(id) {
		setTours(() => tours.filter((tour) => tour.id != id));
	}

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="container">
			<Header
				empty={tours.length <= 0}
				getData={getData}
				isLoading={isLoading}
			/>
			<>
				{tours.map((tour) => {
					return (
						<Card key={tour.id} {...tour} handleRemoveTour={handleRemoveTour} />
					);
				})}
			</>
		</div>
	);
}

export default App;
