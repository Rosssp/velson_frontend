import "./App.scss";

import { useEffect } from "react";

import { useLocation } from "react-router";
import { Routes, Route } from "react-router-dom";

import { scroller } from "react-scroll/modules";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/blocks/Footer";

import MainPage from "./components/routes/MainPage";
import BuyVelsonPage from "./components/routes/buyVelsonPage/BuyVelsonPage";
import HealthySleep from "./components/routes/healthySleep/HealthySleep";

function App() {
	const location = useLocation();
	useEffect(() => {
		if (location.hash) {
			const link = location.hash.slice(1);
			setTimeout(() => scroller.scrollTo(link), 0);
		} else {
			window.scrollTo({
				top: 0,
				behavior: "instant",
			});
		}
	}, [location]);
	return (
		<>
			<Navbar />
			<div className="App">
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/buy" element={<BuyVelsonPage />} />

					<Route path="/healthy-sleep" element={<HealthySleep />} />
					<Route path='/insomnia' element={<HealthySleep />} />
					<Route path='/articles/kak-vosstanovit-normalnyj-son-pri-stresse-i-nevroze' element={<HealthySleep />} />
					<Route path='/tempo' element={<HealthySleep />} />


					<Route path='*' element={<MainPage />} />
				</Routes>
				<Footer />
			</div>
		</>
	);
}

export default App;
