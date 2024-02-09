import React, { useMemo } from "react";
import { motion } from "framer-motion";
import "./VerticalSlider.scss";
import "./verticalBanner.scss";
import { images } from "../../constants";
import { ReactComponent as ArrowPointer } from "../../assets/images/ArrowPointer.svg";

// import Swiper core and required modules
import { Mousewheel, Navigation, Pagination, EffectFade } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

const VerticalSlider = () => {
	return (
		<>
			<div className="banner__wrapper" id="benefits">
				<div className="banner">
					<div className="banner__bg">
						<div className="bg__title">
							<div className="m3__page-dots">
								<div className="benefit-list">
									<ArrowPointer className={"prev"} />
									<div className="pagination__container">
										{/* <div className={`benefit-list__item `} />
                    <div className={`benefit-list__item `} />
                    <div className={`benefit-list__item `} /> */}
									</div>
									<ArrowPointer className={"next"} />
								</div>
							</div>
							<p className="m3__title">
								Преимущества <br />
								<b>ВЕЛСОН</b>
							</p>
						</div>
						<div className="bg__circle">
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

					<Swiper
						direction={"vertical"}
						slidesPerView={1}
						spaceBetween={30}
						grabCursor={true}
						speed={1000}
            // onSlideChange={
            //   (swiper) => {
            //     setTimeout(function () {
            //       swiper.params.mousewheel.releaseOnEdges = false;
            //   }, 500);
            //   }
            // }
            // onReachEnd={
            //   (swiper) => {
            //     setTimeout(function () {
            //       swiper.params.mousewheel.releaseOnEdges = true;
            //       console.log(swiper)
            //   }, 500);
            //   }
            // }
						// mousewheel={{
            //   releaseOnEdges: true,
						// 	sensitivity: "1",
						// 	thresholdDelta: "50",
						// 	// thresholdTime: '500',
						// 	EventTarget: "banner__wrapper",
						// }}
						effect={"fade"}
						fadeEffect={{
							crossFage: true,
						}}
						EffectFade={{
							crossFage: true,
						}}
						navigation={{
							nextEl: ".next",
							prevEl: ".prev",
							lockClass: "disabled",
						}}
						pagination={{
							clickable: true,
							el: ".pagination__container",
						}}
						modules={[ Pagination, Navigation, EffectFade]}
						className="mySwiper"
					>
						{/* <SwiperSlide>
              <div class="slider__image">
                
              </div>
            </SwiperSlide> */}
						<SwiperSlide>
							<div class="slider__image">
								<div className="banner__content">
									<div className="content_left">
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
									</div>
								</div>

								<motion.img
									className="image__icon"
									src={images.benefitsIcon1}
									alt="Преимущества"
									id="benefits__icon2"
									initial={{ opacity: 0, display: "none" }}
									animate={{ opacity: 1, display: "block" }}
									exit={{ opacity: 0, display: "none" }}
									transition={{ duration: 0.5 }}
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div class="slider__image">
								<div className="banner__content">
									<div className="content_left">
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
									</div>
								</div>

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
						</SwiperSlide>
						<SwiperSlide>
							<div class="slider__image">
								<div className="banner__content">
									<div className="content_left">
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
													Прекращение курса после 6 месяцев терапии не приводило
													к проявлениям отсроченной бессонницы и синдрома
													отмены.
												</p>
											</motion.div>
										</motion.div>
									</div>
								</div>
								<motion.img
									className="image__icon"
									src={images.benefitsIcon3}
									alt="Преимущества"
									id="benefits__icon2"
									initial={{ opacity: 0, display: "none" }}
									animate={{ opacity: 1, display: "block" }}
									exit={{ opacity: 0, display: "none" }}
									transition={{ duration: 0.5 }}
								/>
							</div>
						</SwiperSlide>
						{/* <SwiperSlide>
              <div class="slider__image">

              </div>
            </SwiperSlide> */}
					</Swiper>
				</div>
			</div>
			{/* <section class="slider">
				<div class="slider__flex">

					<div class="slider__images">
						<div class="swiper-container">
							<div class="swiper-wrapper">

								<div class="swiper-slide">
									<div class="slider__image">
										<img src="https://picsum.photos/450/450" alt="" />
									</div>
								</div>

								<div class="swiper-slide">
									<div class="slider__image">
										<img src="https://picsum.photos/450/450" alt="" />
									</div>
								</div>

								<div class="swiper-slide">
									<div class="slider__image">
										<img src="https://picsum.photos/450/450" alt="" />
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</section> */}
		</>
	);
};

export default VerticalSlider;
