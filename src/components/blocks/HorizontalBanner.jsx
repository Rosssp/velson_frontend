import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./verticalBanner.scss";
import { useRef } from "react";

import { ReactComponent as ArrowPointer } from "../../assets/images/ArrowPointer.svg";
import useOnScreen from "../../useOnScreen";

const HorizontalBanner = () => {
	const [currentActive, setCurrentActive] = useState(1);

	let changeCurrentActive = (action) => {
		let plus = function () {
			if (currentActive === 1) {
				setCurrentActive(2);
			}

			if (currentActive === 2) {
				setCurrentActive(3);
			}
		};
		let minus = function () {
			if (currentActive === 3) {
				setCurrentActive(2);
			}

			if (currentActive === 2) {
				setCurrentActive(1);
			}
		};

		if (action == "plus") {
			plus();
		}

		if (action == "minus") {
			minus();
		}
	};


	return (
		<div className="banner mobile" >
			<div className="banner__wrapper">
				<div className="banner__title">
					<p className="m3__title">
						Преимущества <b>ВЕЛСОН</b>
					</p>
				</div>
				<div className="banner__swiper">
					<div className="benefit-list">
						<ArrowPointer
							className={currentActive === 1 ? "disabled" : ""}
							onClick={() => changeCurrentActive("minus")}
						/>

						<div
							className={`benefit-list__item ${
								currentActive === 1 ? "active" : ""
							}`}
							onClick={()=>setCurrentActive(1)}
						/>
						<div
							className={`benefit-list__item ${
								currentActive === 2 ? "active" : ""
							}`}
							onClick={()=>setCurrentActive(2)}
						/>
						<div
							className={`benefit-list__item ${
								currentActive === 3 ? "active" : ""
							}`}
							onClick={()=>setCurrentActive(3)}
						/>

						<ArrowPointer
							className={currentActive === 3 ? "disabled" : ""}
							onClick={() => changeCurrentActive("plus")}
						/>
					</div>
				</div>

				<div className="banner__content">
					<div className="content_left">
						{currentActive === 1 && (
							<motion.div className="m3__copy m3__copy-1">
								<motion.div
									className="m3__text"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.5 }}
								>
									<p className="list__text">
										<ul>
											Помогает
											<li>
												засыпать уже через 2
												<img className="inline_icon" src={images.time} alt="" />
												&nbsp;минут
											</li>
											<li>крепко спать всю ночь</li>
											<li>легко просыпаться утром</li>
										</ul>
									</p>
								</motion.div>
							</motion.div>
						)}

						{currentActive === 2 && (
							<motion.div className="m3__copy m3__copy-1">
								<motion.div
									className="m3__text"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0, display: "none" }}
									transition={{ duration: 0.5 }}
								>
									<p className="list__text">
										Пол
										<img className="inline_icon" src={images.smiley} alt="" />
										жительно влияет на память, концентрацию, запоминание.
										<br />
										Снижает стрессовые реакции.
									</p>
								</motion.div>
							</motion.div>
						)}

						{currentActive === 3 && (
							<motion.div className="m3__copy m3__copy-1">
								<motion.div
									className="m3__text"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0, display: "none" }}
									transition={{ duration: 0.5 }}
								>
									<p className="list__text">
										Высокая степень без
										<img
											className="inline_icon"
											src={images.shieldCheck}
											alt=""
										/>
										пасности: не вызывает привыкания. <br />
										<br />
										Прекращение курса после 6 месяцев терапии не приводило к
										проявлениям отсроченной бессонницы и синдрома отмены.
									</p>
								</motion.div>
							</motion.div>
						)}
					</div>
					<div className="content_right">
						<div
							className="content__bg"
							style={{
								backgroundImage: `url(${images.benefitsBg})`,
							}}
							onClick={() => changeCurrentActive("plus")}
						>
							{currentActive === 1 && (
								<motion.img
									className="image__icon"
									src={images.benefitsIcon1}
									id="benefits__icon1"
									alt="Преимущества"
									initial={{ opacity: 0, display: "none" }}
									animate={{ opacity: 1, display: "block" }}
									exit={{ opacity: 0, display: "none" }}
									transition={{ duration: 0.5 }}
								/>
							)}

							{currentActive === 2 && (
								<motion.img
									className="image__icon"
									src={images.benefitsIcon2}
									id="benefits__icon2"
									alt="Преимущества"
									initial={{ opacity: 0, display: "none" }}
									animate={{ opacity: 1, display: "block" }}
									exit={{ opacity: 0, display: "none" }}
									transition={{ duration: 0.5 }}
								/>
							)}

							{currentActive === 3 && (
								<motion.img
									className="image__icon"
									src={images.benefitsIcon3}
									id="benefits__icon3"
									alt="Преимущества"
									initial={{ opacity: 0, display: "none" }}
									animate={{ opacity: 1, display: "block" }}
									exit={{ opacity: 0, display: "none" }}
									transition={{ duration: 0.5 }}
								/>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HorizontalBanner;
