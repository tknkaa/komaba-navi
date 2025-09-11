import { BrowserRouter, Routes, Route } from "react-router";
import Map from "./pages/Map";
import Building7 from "./pages/Building7";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<Routes>
						<Route index element={<Map />} />
						<Route path="building7" element={<Building7 />} />
					</Routes>
				</BrowserRouter>
			</QueryClientProvider>
		</>
	);
}
