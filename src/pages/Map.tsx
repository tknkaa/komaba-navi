import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useLocation } from "../hooks/useLocaton";
import { Link } from "react-router";

export default function Map() {
	const { position } = useLocation();
	return (
		<>
			<MapContainer
				center={position}
				zoom={100}
				scrollWheelZoom={true}
				style={{ minHeight: "100vh", minWidth: "100vw" }}
			>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={position}>
					<Popup>
						You are here!
					</Popup>
				</Marker>
			<Marker position={[35.660752, 139.684558]}>
				<Popup>
					<Link to="/building7">Go to Building 7 page</Link>
				</Popup>
			</Marker>
			</MapContainer>
		</>
	);
}
