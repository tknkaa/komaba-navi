import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function App() {
	return (
		<>
			<MapContainer
				center={[51.505, -0.09]}
				zoom={13}
				scrollWheelZoom={true}
				style={{ minHeight: "100vh", minWidth: "100vw" }}
			>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={[51.505, -0.09]}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</>
	);
}
