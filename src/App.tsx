import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import LoginPage from "./pages/Login/Login";
import { ConfigProvider } from "antd";
import Layout from "./Layout";
import SearchEventsPage from "./pages/SearchEvents/SearchEvents";




function App() {

	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: '#ff8242',
				},
				components: {}
			}}
		>
			<BrowserRouter>
				<Routes>
					<Route path="/auth" element={<LoginPage />} />
					<Route path="/" element={<Layout />}>
						<Route path="home" element={<HomePage />} />
						<Route path="search-events" element={<SearchEventsPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ConfigProvider>
	)
}

export default App
