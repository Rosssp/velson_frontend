import "./styles/healthySleep.css";

import MainHealthy from "../../mainHealthy/MainHealthy";
import Reasons from "../../reasons/Reasons";
import FallSleep from "../../fallSleep/FallSleep";
import Advantages from "../../advantages/Advantages";
import QualitySleep from "../../qualitySleep/QualitySleep";

const HealthySleep = () => {
	return (
		<>
			<div className="healthySleep__blue_block">
				<MainHealthy />
				<Reasons />
			</div>
			<FallSleep />
			<Advantages />
			<QualitySleep />
		</>
	);
};

export default HealthySleep;
