import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./screens/HomePage";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<HomePage />} />
	      <Route path="homescreen" element={<HomeScreen />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App
