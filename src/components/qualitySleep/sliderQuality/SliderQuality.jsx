import styles from "./styles/slider.module.css";

import { useState } from "react";

import Switch from "./switch/Switch";

import Phone from "../../../assets/images/healthy/quality/slider/phone.webp";
import Lamp from "../../../assets/images/healthy/quality/slider/lamp.webp";
import Bath from "../../../assets/images/healthy/quality/slider/bath.webp";
import Yoga from "../../../assets/images/healthy/quality/slider/yoga.webp";
import { useEffect } from "react";

const slider_items = [
	{
		id: 1,
		name: "Гаджеты перед сном",
		text: "Не проводите вечернее время за отдыхом перед экранами телевизора или смартфона: излучение экранов негативно влияет на качество предстоящего сна",
		src: Phone,
		alt: "phone",
	},
	{
		id: 2,
		name: "Подготовьте спальню",
		text: "Проветривание и приятный полумрак за 1 час до сна способствует выработке мелатонина",
		src: Lamp,
		alt: "lamp",
	},
	{
		id: 3,
		name: "Теплая ванна с аромамаслами",
		text: "Способствует физическому расслаблению, позволяет успокоить нервную систему и подготовить организм ко сну",
		src: Bath,
		alt: "bath",
	},
	{
		id: 4,
		name: "Медитации",
		text: "Способствуют нормализации дыхания, концентрации внимания на своем теле и его расслаблении",
		src: Yoga,
		alt: "yoga",
	},
];

const SliderQuality = () => {
	const [active, setActive] = useState(1);
	const [size, setSize] = useState(1980);
	const handleResize = () => {
		setSize(window.screen.width);
	};
	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	useEffect(() => {
		handleResize();
	}, []);
	return (
		<div className={styles.slider__body}>
			{size < 1024 &&
				slider_items.map((item) => (
					<p
						key={item.id}
						className={styles.item__title_mobile}
						style={{
							display: active === item.id ? "block" : "none",
						}}
					>
						{item.name}
					</p>
				))}
			<Switch active={active} setActive={setActive} />

			{slider_items.map((item) => (
				<div
					key={item.id}
					className={styles.slider__item}
					style={{ display: active === item.id ? "flex" : "none" }}
				>
					<div className={styles.item__text}>
						<p className={styles.item__title}>{item.name}</p>
						<p className={styles.item__subtitle}>{item.text}</p>
					</div>
					<div className={styles.item__image}>
						<img loading="lazy" src={item.src} alt={item.alt} />
					</div>
				</div>
			))}
		</div>
	);
};

export default SliderQuality;
