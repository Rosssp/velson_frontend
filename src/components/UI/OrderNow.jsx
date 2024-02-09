import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants/index";
import { Link } from "react-router-dom";

const OrderNow = () => {

	const [scrollPosition, setScrollPosition] = useState(0);

	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const animationVariants = {
		show: { opacity: 1 },
		hide: { opacity: 0 },
	};

	return (
		<Link className="order-now__link" to="/buy">
		<motion.div
			id="widget"
			className="order-now"
			animate={scrollPosition >= 1244 ? "show" : "hide"}
			variants={animationVariants}
		>
			<div className="order-now__left">
				<img src={images.ShoppingCart} alt="Купить сейчас" />
			</div>

			<p className="order-now__text">КУПИТЬ ВЕЛСОН</p>
		</motion.div>
		</Link>
	);
};

export default OrderNow;
