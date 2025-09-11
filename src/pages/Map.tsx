import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import type { LatLngExpression } from "leaflet";

const fetchLocation = async (): Promise<LatLngExpression> => {
	const res = await fetch("https://ipapi.co/json");
	const data = await res.json();
	return {
		lat: data.latitude,
		lng: data.longitude,
	};
};

export default function Map() {
	const { data } = useQuery({
		queryKey: ["location"],
		queryFn: fetchLocation,
	});
	return (
		<>
			<MapContainer
				// the location of Building 1
				center={[35.659901, 139.684867]}
				zoom={100}
				scrollWheelZoom={true}
				style={{ minHeight: "100vh", minWidth: "100vw" }}
			>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{data && (
					<Marker position={data}>
						<Popup>You are here!</Popup>
					</Marker>
				)}

				<Marker position={[35.660752, 139.684558]}>
					<Popup>
						<Link to="/building7">Go to Building 7 page</Link>
					</Popup>
				</Marker>
			</MapContainer>
		</>
	);
}
