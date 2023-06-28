import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartingPage from "./pages/CartingPage";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<HomePage />} />
	      <Route path="making-cart" element={<CartingPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App
