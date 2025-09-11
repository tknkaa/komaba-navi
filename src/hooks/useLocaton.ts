import type { LatLngExpression } from "leaflet";
import { useState, useEffect } from "react";

export const useLocation = () => {
	const [position, setPosition] = useState<LatLngExpression>({
		// location of Komaba campus
		lat: 35.659901,
		lng: 139.684867,
	});
	useEffect(() => {
		const fetchLocation = async () => {
			try {
				const res = await fetch("https://ipapi.co/json");
				const data = await res.json();
				setPosition({ lat: data.latitude, lng: data.longitude });
			} catch (err) {
				console.error(err);
			}
		};
		fetchLocation();
	}, []);
	return { position };
};
