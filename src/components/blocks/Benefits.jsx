import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

import { images } from "../../constants";
import { BlockWrapper } from "../wrapper";
import { ListPointer } from "../UI";
import "./benefits.scss";

let timeoutId = 0;

function throttle(callbackFn, limit) {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(function () {
    callbackFn();
    clearTimeout(timeoutId);
  }, limit);
}

const BenefitsBlock = () => {
  const [current, setCurrent] = useState(1);

  const prevScrollY = useRef(0);
  const banner = useRef(null);

  function zoom(event) {
    event.preventDefault();
    throttle(() => {
      setCurrent((prev) => prev + event.deltaY / -100);
    }, 300);

  }

  // useEffect(() => {
  //     const handleScroll = () => {
  //         const currentScrollY = window.scrollY;
  //         if (prevScrollY.current < currentScrollY) {
  //             throttle(()=>{
  //                 setCurrent((prev)=>prev+1)
  //             }, 1000);
  //         }
  //         if (prevScrollY.current > currentScrollY) {
  //             throttle(()=>{setCurrent((prev)=>prev-1)}, 1000);
  //         }

  //         prevScrollY.current = currentScrollY;
  //     };

  //     window.addEventListener('scroll', handleScroll)

  //     return () => window.removeEventListener('scroll', handleScroll)
  // }, [])

  const content = [
    {
      text: (
        <motion.div
          className="list__text-wrapper"
          initial={{ opacity: 0, display: "none", y: -50 }}
          animate={{ opacity: 1, display: "block", y: 0 }}
          exit={{ opacity: 0, display: "none", y: -50 }}
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
      ),
      id: 1,
      icon: images.benefitsIcon1,
    },
    {
      text: (
        <motion.div
          className="list__text-wrapper"
          initial={{ opacity: 0, display: "none", y: -50 }}
          animate={{ opacity: 1, display: "block", y: 0 }}
          exit={{ opacity: 0, display: "none", y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <p className="list__text">
            Положительно влияет на память, концентрацию, запоминание. Снижает
            стрессовые реакции.
          </p>
        </motion.div>
      ),
      id: 2,
      icon: images.benefitsIcon2,
    },
    {
      text: (
        <motion.div
          className="list__text-wrapper"
          initial={{ opacity: 0, display: "none", y: -50 }}
          animate={{ opacity: 1, display: "block", y: 0 }}
          exit={{ opacity: 0, display: "none", y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <p className="list__text">
            Высокая степень без опасности: не вызывает привыкания. <br />
            Прекращение курса после 6 месяцев терапии не приводило к проявлениям
            отсроченной бессонницы и синдрома отмены.
          </p>
        </motion.div>
      ),
      id: 3,
      icon: images.benefitsIcon3,
    },
  ];

  // function useParallax(value, distance) {
  // 	return useTransform(value, [0, 1], [-distance, distance]);
  // }

  // function SingleCard(id) {
  // 	const ref = useRef(null);
  // 	const { scrollYProgress } = useScroll({ target: ref });

  // 	return (
  // 		<section>
  // 			<div ref={ref}>
  // 				<img src={`/${id}.jpg`} alt="A London skyscraper" />
  // 			</div>
  // 			<motion.h2>{`#00${id}`}</motion.h2>
  // 		</section>
  // 	);
  // }

  return (
    <>
      <div
        className="block__wrapper content-wrapper block__wrapper--benefits"
        ref={banner}
        onWheel={(e) => zoom(e)}
      >
        <div id="benefits" className="benefits">
          <div className="benefits__left">
            <ListPointer
              current={current}
              items={content}
              setCurrent={setCurrent}
            />
            <motion.div className="list__content">
              <p className="list__title">
                Преимущества <br />
                <b>ВЕЛСОН</b>
              </p>
              {content.map((item) => item.id === current && item.text)}
            </motion.div>
          </div>

          <div className="list__image">
            <div
              className="image__bg"
              style={{
                backgroundImage: `url(${images.benefitsBg})`,
              }}
              alt="Преимущества"
            >
              {content.map(
                (item) =>
                  item.id === current && (
                    <motion.img
                      className="image__icon"
                      src={item.icon}
                      alt="Преимущества"
                      initial={{ opacity: 0, display: "none" }}
                      animate={{ opacity: 1, display: "block" }}
                      exit={{ opacity: 0, display: "none", y: -50 }}
                      transition={{ duration: 0.5 }}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockWrapper(BenefitsBlock, "benefits", [
  "block__container--benefits",
]);
