import type { LatLngExpression } from "leaflet";
import { useState, useEffect } from "react";

export const useLocation = () => {
	const [position, setPosition] = useState<LatLngExpression>({
		lat: 47.21725,
		lng: -1.55336,
	});
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			({ coords }) => {
				setPosition({
					lat: coords.latitude,
					lng: coords.longitude,
				});
			},
			(blocked) => {
				if (blocked) {
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
				}
			},
		);
	}, []);
	return { position };
};
