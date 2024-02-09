import React, { useMemo } from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./verticalBanner.scss";
import { useRef } from "react";

import { ReactComponent as ArrowPointer } from "../../assets/images/ArrowPointer.svg";
import useOnScreen from "../../useOnScreen";

const VerticalBanner = () => {
	const ref1 = useRef();
	const ref2 = useRef();
	const ref3 = useRef();
	const isVisible1 = useOnScreen(ref1);
	const isVisible2 = useOnScreen(ref2);
	const isVisible3 = useOnScreen(ref3);

	const leftWrapper = useRef(null);
	let leftWrapperTopOffset = leftWrapper?.current?.offsetTop;

	const endOfBlock = useRef(null);

	let icon1 = document.getElementById("benefits__icon1");
	let icon2 = document.getElementById("benefits__icon2");
	let icon3 = document.getElementById("benefits__icon3");

	let changeCurrentActive = (action) => {
		let plus = function () {
			if (isVisible1) {
				icon2.scrollIntoView({
					block: "center",
					behavior: "smooth",
				})
			}

			if (isVisible2) {
				icon3.scrollIntoView({
					block: "center",
					behavior: "smooth",
				})
			}
			
		};
		let minus = function () {
			if (isVisible3) {
				icon2.scrollIntoView({
					block: "center",
					behavior: "smooth",
				})
			}

			if (isVisible2) {
				icon1.scrollIntoView({
					block: "center",
					behavior: "smooth",
				})
			}
		};

		if (action == "plus") {
			plus();
		}

		if (action == "minus") {
			minus();
		}
	};


	let checkCurrentActive = function() {
		if (isVisible1) {
			return 1
		}

		if (isVisible2) {
			return 2
		}
			return 3
		
	}

	return (
		<div className="m3" id="benefits">
			<div className="m3__sticky">
				<div className="m3__sticky-wrap">
					<div className="m3__container sticky">
						<div className="m3__left-wrapper" ref={leftWrapper}>
							{/* точки позиции */}
							<div className="m3__page-dots">
								<div className="benefit-list">
									<ArrowPointer
										className={checkCurrentActive() === 1 ? "disabled" : ""}
										onClick={() => changeCurrentActive("minus")}
									/>

									<div
										className={`benefit-list__item ${
											isVisible1 ? "active" : ""
										}`}
										onClick={() =>
											icon1.scrollIntoView({
												block: "center",
												behavior: "smooth",
											})
										}
									/>
									<div
										className={`benefit-list__item ${
											isVisible2 ? "active" : ""
										}`}
										onClick={() =>
											icon2.scrollIntoView({
												block: "center",
												behavior: "smooth",
											})
										}
									/>
									<div
										className={`benefit-list__item ${
											isVisible3 ? "active" : ""
										}`}
										onClick={() =>
											icon3.scrollIntoView({
												block: "center",
												behavior: "smooth",
											})
										}
									/>

									<ArrowPointer
										className={checkCurrentActive() === 3 ? "disabled" : ""}
										onClick={() => changeCurrentActive("plus")}
									/>
								</div>
							</div>
							{/* левый контент */}
							<div className="m3__copy-wrap">
								{/* Первое преимущество */}
								{isVisible1 && (
									<motion.div className="m3__copy m3__copy-1">
										<p className="m3__title">
											Преимущества <br />
											<b>ВЕЛСОН</b>
										</p>

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
														<img
															className="inline_icon"
															src={images.time}
															alt=""
														/>
														&nbsp;минут
													</li>
													<li>крепко спать всю ночь</li>
													<li>легко просыпаться утром</li>
												</ul>
											</p>
										</motion.div>
									</motion.div>
								)}

								{/* второе преимущество */}
								{isVisible2 && (
									<motion.div className="m3__copy m3__copy-1">
										<p className="m3__title">
											Преимущества <br />
											<b>ВЕЛСОН</b>
										</p>

										<motion.div
											className="m3__text"
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0, display: "none" }}
											transition={{ duration: 0.5 }}
										>
											<p className="list__text">
												Пол
												<img
													className="inline_icon"
													src={images.smiley}
													alt=""
												/>
												жительно влияет на память, концентрацию, запоминание.
												<br />
												Снижает стрессовые реакции.
											</p>
										</motion.div>
									</motion.div>
								)}

								{/* третье преимущество */}
								{isVisible3 && (
									<motion.div className="m3__copy m3__copy-1">
										<p className="m3__title">
											Преимущества <br />
											<b>ВЕЛСОН</b>
										</p>

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
							<motion.div
							className="m3__circle"
							style={{
								backgroundImage: `url(${images.benefitsBg})`,
								
							}}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.5 }}
						/>
						</div>
					</div>

					{/* триггеры для анимаций, ставятся вверху слева от каждого блока*/}
					<div className="m3__triggers">
						<div className="m3__trigger m3__trigger-1" ref={ref1} />
						<div className="m3__trigger m3__trigger-2" ref={ref2} />
						<div className="m3__trigger m3__trigger-3" ref={ref3} />
					</div>

					<div className="m3__products-wrap">
						{/* враппер всего продукта */}
						<div className="m3__product-wrapper">
							{/* картинка справа */}
							<div className="m3__product-shot">
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
							</div>
						</div>

						<div className="m3__product-wrapper">
							{/* картинка справа */}
							<div className="m3__product-shot">
								<motion.img
									className="image__icon"
									src={images.benefitsIcon2}
									alt="Преимущества"
									id="benefits__icon2"
									initial={{ opacity: 0, display: "none" }}
									animate={{ opacity: 1, display: "block" }}
									exit={{ opacity: 0, display: "none" }}
									transition={{ duration: 0.5 }}
								/>
							</div>
						</div>

						<div className="m3__product-wrapper">
							{/* картинка справа */}
							<div className="m3__product-shot">
								<motion.img
									className="image__icon"
									src={images.benefitsIcon3}
									alt="Преимущества"
									id="benefits__icon3"
									initial={{ opacity: 0, display: "none" }}
									animate={{ opacity: 1, display: "block" }}
									exit={{ opacity: 0, display: "none" }}
									transition={{ duration: 0.5 }}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VerticalBanner;
