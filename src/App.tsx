import { BrowserRouter, Routes, Route } from "react-router";
import Map from "./pages/Map";
import Building7 from "./pages/Building7";

export default function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route index element={<Map />} />
					<Route path="building7" element={<Building7 />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}
