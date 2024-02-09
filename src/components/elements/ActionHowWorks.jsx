import React from "react";
import { images } from "../../constants";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ActionHowWorks = () => {
	return (
		<>
			<div className="actions__title">
				<p className="title__description descr">
					Мелатонин обладает уникальным влиянием <br /> на организм человека:
				</p>
			</div>

			<div className="works__wrapper content-wrapper">
				<div className="works__item">
					<div className="item__image-wrapper">
						<img
							effect="blur"
							src={images.works3}
							className="works__icon"
						/>
					</div>
					<p className="works__text">Помогает бороться с бессонницей</p>
				</div>
				<div className="works__item">
					<div className="item__image-wrapper">
						<img
							effect="blur"
							src={images.works2}
							className="works__icon"
						/>
					</div>
					<p className="works__text">Нормализует циклы сна и бодрствования</p>
				</div>
				<div className="works__item">
					<div className="item__image-wrapper">
						<img
							effect="blur"
							src={images.works1}
							className="works__icon"
						/>
					</div>
					<p className="works__text">Способствует восстановлению сил</p>
				</div>
				<div className="works__item">
					<div className="item__image-wrapper">
						<img
							effect="blur"
							src={images.works4}
							className="works__icon"
						/>
					</div>
					<p className="works__text">
						Адаптирует организм к метеочувствительности
					</p>
				</div>
			</div>
		</>
	);
};

export default ActionHowWorks;
