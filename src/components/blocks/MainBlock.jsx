import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { ReactComponent as ArrowPointer } from "../../assets/images/ArrowPointer.svg";
import { BlockWrapper } from "../wrapper";
import { images } from "../../constants";
import { Button, ToggleThemeButton } from "../UI";
import Navbar from "../navbar/Navbar";
import TabletsBox from "../UI/TabletsBox";
import bgDark from "../../assets/videos/dark.mp4";
import bgLight from "../../assets/videos/light.mp4";
import { LinkScrollConsumer } from "../../LinkScrollContext";
import useMediaQuery from "../../useMediaQuery";
import { Link as LinkRoute } from "react-router-dom";

import "./mainblock.scss";

const MainBlock = () => {
    const isBreakpoint = useMediaQuery(1024);
    const [size, setSize] = useState(window.screen.width);
    const [isWhite, setIsWhite] = useState(true);

    const toggleTheme = () => {
        setIsWhite((prev) => !prev);
    };

    const endOfBlock = useRef(null);
    let benefitsOffsetTop = null;

    const animationVariants = {
        open: { opacity: 1 },
        closed: { opacity: 0 },
    };

    let scrollTo = function (id) {
        benefitsOffsetTop = document.getElementById("benefits").offsetTop;
        disableScroll();

        setTimeout(() => {
            window.scrollTo({
                top: benefitsOffsetTop,
                behavior: "smooth",
            });
        }, 1);

        setTimeout(() => {
            enableScroll();
        }, 1000);
    };

    // useEffect(() => {
    // 	let isNotScrolledOnce = true;
    // 	const observer = new IntersectionObserver((entries) => {
    // 		const entry = entries[0];

    // 		if (entry.isIntersecting && isNotScrolledOnce) {
    // 			isNotScrolledOnce = false;

    // 			scrollTo(benefitsOffsetTop);
    // 		}
    // 	});

    // 	observer.observe(endOfBlock?.current);
    // }, []);

    // -----------------------------

    function preventDefault(e) {
        e.preventDefault();
    }

    function preventDefaultForScrollKeys(e) {
        if (keys[e.keyCode]) {
            preventDefault(e);
            return false;
        }
    }

    var supportsPassive = false;
    try {
        window.addEventListener(
            "test",
            null,
            Object.defineProperty({}, "passive", {
                get: function () {
                    supportsPassive = true;
                },
            })
        );
    } catch (e) {}

    var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
    var wheelOpt = supportsPassive ? { passive: false } : false;
    var wheelEvent =
        "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

    function disableScroll() {
        window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
        window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
        window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
        window.addEventListener("keydown", preventDefaultForScrollKeys, false);
    }

    function enableScroll() {
        window.removeEventListener("DOMMouseScroll", preventDefault, false);
        window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
        window.removeEventListener("touchmove", preventDefault, wheelOpt);
        window.removeEventListener(
            "keydown",
            preventDefaultForScrollKeys,
            false
        );
    }

    const [heightWrapper, setHeightWrapper] = useState(0);
    const mainBlockRef = useRef(null);
    const toggleMainblockHeight = () => {
        setHeightWrapper(mainBlockRef.current.clientHeight);
    };
    const handleResize = () => {
        setSize(window.screen.width);
    };
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    useEffect(() => {
        toggleMainblockHeight();
    }, [size]);
    // useEffect(() => handleResize, []);

    // -----------------
    return (
        <>
            {/* <style jsx>{`
                .height__mainblock {
                    max-height: 1029px;
                    min-height: 1029px;
                }
                @media (max-width: 1024px) {
                    .height__mainblock {
                        max-height: calc(${heightWrapper * 1.38}px + 400px);
                        min-height: calc(${heightWrapper * 1.38}px + 400px);
                    }
                }
            `}</style> */}

            {isBreakpoint ? (
                <>
                    <div
                        className={`bg__image__dark ${isWhite ? "" : "op-0"}`}
                    ></div>
                    <div
                        className={`bg__image__light ${isWhite ? "op-0" : ""}`}
                    ></div>
                </>
            ) : (
                <div>
                    <video
                        className={`bg-video ${isWhite ? "" : ""}`}
                        autoPlay
                        loop
                        muted
                    >
                        <source src={bgDark} type="video/mp4" />
                    </video>
                    <video
                        className={`bg-video ${isWhite ? "op-0" : ""}`}
                        autoPlay
                        loop
                        muted
                    >
                        <source src={bgLight} type="video/mp4" />
                    </video>
                </div>
            )}
            <div ref={mainBlockRef} className="main__section">
                <div className="block__wrapper content-wrapper block__wrapper--main">
                    <div id="home" className={`mainblock`}>
                        {isWhite ? (
                            <div>
                                <div className="after__before__dark"></div>
                                <div className="staticBgBottom"></div>
                            </div>
                        ) : (
                            <div>
                                <div className="after__before__light"></div>
                                <div className="staticBgBottomSun"></div>
                            </div>
                        )}
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 2 }}
                            className="app__header-info"
                        >
                            <motion.div className="mainblock__banner">
                                {isBreakpoint ? (
                                    <>
                                        {/* <img
                                            className="bg__elements__dark"
                                            src={images.staticBgLeft}
                                            alt=""
                                        /> */}
                                    </>
                                ) : (
                                    <>
                                        {isWhite ? (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: [0, 1] }}
                                                transition={{ duration: 2 }}
                                            >
                                                <div className="lineLeft">
                                                    <div className="left-x-axis">
                                                        <div className="left-y-axis">
                                                            <img
                                                                src={
                                                                    images.lineLeft
                                                                }
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <img
                                                    className="lineBottom"
                                                    src={images.lineBottom}
                                                    alt=""
                                                />
                                                <div className="lineRight">
                                                    <div className="right-x-axis">
                                                        <div className="right-y-axis">
                                                            <img
                                                                src={
                                                                    images.lineRight
                                                                }
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: [0, 2] }}
                                                transition={{ duration: 4 }}
                                            >
                                                <div className="lineLeft Sun__left">
                                                    <div className="left-x-axis">
                                                        <div className="left-y-axis">
                                                            <img
                                                                src={
                                                                    images.lineLeftSUN
                                                                }
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <img
                                                    className="lineBottom Sun__bottom"
                                                    src={images.lineBottomSUN}
                                                    alt=""
                                                />
                                                <div className="lineRight Sun__right">
                                                    <div className="right-x-axis">
                                                        <div className="right-y-axis">
                                                            <img
                                                                src={
                                                                    images.lineRightSUN
                                                                }
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </>
                                )}

                                <div className="banner__text banner__text--wrapper">
                                    {isWhite ? (
                                        <>
                                            {" "}
                                            <motion.p
                                                className="banner__text banner__text--small mb-16"
                                                initial={{
                                                    display: "none",
                                                }}
                                                animate={{
                                                    opacity: [0, 1],
                                                    display: "block",
                                                    transition: { duration: 2 },
                                                }}
                                            >
                                                Помогает засыпать уже через 2
                                                <img
                                                    className="inline_icon"
                                                    src={images.time}
                                                    alt=""
                                                />
                                                &nbsp;минут
                                            </motion.p>
                                            <motion.p
                                                className="banner__text banner__text--big banner__text--first"
                                                initial={{
                                                    display: "none",
                                                }}
                                                animate={{
                                                    opacity: [0, 1],
                                                    display: "block",
                                                    transition: { duration: 2 },
                                                }}
                                            >
                                                <b>Вселенная</b> <br/> здорового <b>сна</b>
                                            </motion.p>
                                        </>
                                    ) : (
                                        <>
                                            {" "}
                                            <motion.p
                                                className="banner__text banner__text--small mb-16"
                                                initial={{
                                                    display: "none",
                                                }}
                                                animate={{
                                                    opacity: [0, 2],
                                                    display: "block",
                                                    transition: { duration: 3 },
                                                }}
                                            >
                                                Улучшает самочувствие после
                                                утреннего пр
                                                <img
                                                    className="inline_icon"
                                                    src={images.sunLight}
                                                    alt=""
                                                />
                                                буждения,<br/> не вызывает ощущения
                                                вялости*
                                            </motion.p>
                                            <motion.p
                                                className="banner__text banner__text--big banner__text--second"
                                                initial={{
                                                    display: "none",
                                                }}
                                                animate={{
                                                    opacity: [0, 2],
                                                    display: "block",
                                                    transition: { duration: 3 },
                                                }}
                                            >
                                                <b>
                                                    Здоровый сон —<br />
                                                </b>
                                                бодрое <b>утро</b>
                                            </motion.p>
                                        </>
                                    )}
                                    <div className="banner__image">
                                        {/* <motion.img
                                            animate={
                                                isWhite ? "open" : "closed"
                                            }
                                            variants={animationVariants}
                                            className={`preload__box`}
                                            src={images.box_dark_static}
                                        />
                                        <motion.img
                                            animate={
                                                !isWhite ? "open" : "closed"
                                            }
                                            variants={animationVariants}
                                            className={`preload__box`}
                                            src={images.box_white_static}
                                        /> */}

                                        <TabletsBox currentBox={isWhite} />
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                    <div className="banner__footer">
                        <div className="footer__col footer__col--toggle">
                            <ToggleThemeButton
                                toggleAction={toggleTheme}
                                isWhite={isWhite}
                            />
                        </div>

                        <LinkRoute to={`/buy`} className="footer__col">
                            <Button
                                text={"Купить ВЕЛСОН"}
                                onClickAction={() => {}}
                                isSimple={false}
                                color="white"
                            />
                        </LinkRoute>

                        <LinkRoute to={`/#how`} className="footer__col">
                            <Button
                                text={"как принимать велсон"}
                                onClickAction={() => {}}
                                isSimple={true}
                                color="blue"
                            />
                        </LinkRoute>
                    </div>
                    <div
                        className="footer__next"
                        onClick={() => scrollTo(benefitsOffsetTop)}
                    >
                        <ArrowPointer />
                    </div>
                    <LinkScrollConsumer>
                        {(context) => (
                            <div
                                className="main-trigger--1"
                                id="main-trigger--1"
                                ref={endOfBlock}
                                style={{
                                    display: `${
                                        context.linkScroll ? "none" : "block"
                                    }`,
                                }}
                            />
                        )}
                    </LinkScrollConsumer>
                </div>
            </div>
        </>
    );
};

export default BlockWrapper(
    MainBlock,
    "top",
    ["block__container--main height__mainblock"]
    // `height: "${100}px"`
    // mainBlockRef
);
