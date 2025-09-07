import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useLocation } from "./hooks/useLocaton";

export default function App() {
	const { position } = useLocation();
	console.log(position);
	return (
		<>
			<MapContainer
				center={position}
				zoom={13}
				scrollWheelZoom={true}
				style={{ minHeight: "100vh", minWidth: "100vw" }}
			>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={position}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</>
	);
}
