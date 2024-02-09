import React, { useEffect, useRef, useState } from "react";
import { images } from "../../constants";
import { motion } from "framer-motion";


const ActionGraph = () => {
	const [vivsible, setVisible] = useState(false);
	const reffer = useRef(null);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			const top =
				reffer.current.getBoundingClientRect().top - window.innerHeight;
			const bottom =
				reffer.current.getBoundingClientRect().top + window.innerHeight;
			if (top - 350 < 0 && bottom > 0) {
				setVisible(true);
			} else {
				setVisible(false);
			}
		});

		return () => {
			window.removeEventListener("scroll", () => {
				const top =
					reffer.current.getBoundingClientRect().top - window.innerHeight;
				const bottom =
					reffer.current.getBoundingClientRect().top + window.innerHeight;
				if (top - 350 < 0 && bottom > 0) {
					setVisible(true);
				} else {
					setVisible(false);
				}
			});
		};
	}, []);

	return (
		<motion.div className="actions__graph" ref={reffer}>
			<motion.div
				style={{
					animation: vivsible && "showline 3s linear forwards",
				}}
			>
				<img
					clipPath="url(#clipper)"
					className="graph__image-top"
					src={images.graphLineUpper}
					alt=""
				/>
				<img
					clipPath="url(#clipper)"
					className="graph__image-bottom"
					src={images.graphLineBottom}
					alt=""
				/>
			</motion.div>

			<motion.div
				className="graph__item"
				id="first"
				style={{
					visibility: "hidden",
					animation: vivsible && "showBlocks 1s linear .6s forwards",
				}}
			>
				<span className="graph__time">21:00</span>
				<p className="graph__text">Эпифиз «усиливает» выработку мелатонина</p>
				<img
					className="graph__pointer"
					src={images.graphPointer}
					alt="Pointer"
				/>
			</motion.div>
			<motion.div
				className="graph__item"
				id="second"
				style={{
					visibility: "hidden",
					animation: vivsible && "showBlocks 1s linear 1.2s forwards",
				}}
			>
				<span className="graph__time graph__time--violet">2:00 до 5:00</span>
				<p className="graph__text">
					Самый глубокий сон: пиковая концентрация мелатонина в крови.{" "}
					<b>ВЕЛСОН поддерживает фазу глубокого сна</b>
				</p>
				<img
					className="graph__pointer graph__pointer--accent"
					src={images.graphPointerAccent}
					alt="Pointer"
				/>
			</motion.div>

			<motion.div
				className="graph__item"
				id="third"
				style={{
					visibility: "hidden",
					animation: vivsible && "showBlocks 1s linear 1.8s forwards",
				}}
			>
				<span className="graph__time">06:00</span>
				<p className="graph__text">
					Происходит выработка гормона кортизола для подготовки организма к
					пробуждению
				</p>
				<img
					className="graph__pointer"
					src={images.graphPointer}
					alt="Pointer"
				/>
			</motion.div>

			<motion.div
				className="graph__item"
				id="fourth"
				style={{
					visibility: "hidden",
					animation: vivsible && "showBlocks 1s linear 2.4s forwards",
				}}
			>
				<span className="graph__time">07:00</span>
				<p className="graph__text">
					Прекращение выработки мелатонина (отличное время для пробуждения)
				</p>
				<img
					className="graph__pointer"
					src={images.graphPointer}
					alt="Pointer"
				/>
			</motion.div>
		</motion.div>
	);
};

export default ActionGraph;
