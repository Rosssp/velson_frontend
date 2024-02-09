import React, { useState } from "react";
import { motion } from "framer-motion";
import * as Scroll from "react-scroll";
import { Link, animateScroll as scroll } from "react-scroll";
import Modal from "../modal/Modal";
import { Link as LinkRoute } from "react-router-dom";

import { images } from "../../constants";
import { Button, ToggleThemeButton, ListPointer } from "../UI";
import "./Footer.scss";

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const animationVariants = {
        open: {},
        closed: { display: "none" },
    };

    const generateKey = (pre) => {
        return `${pre}_${new Date().getTime()}`;
    };

    const navLinks = [
        { title: "Преимущества ВЕЛСОН", url: "benefits", type: "anchor" },
        { title: "Действие мелатонина", url: "action", type: "anchor" },
        { title: "Как принимать ВЕЛСОН", url: "how", type: "anchor" },
        { title: "Здоровый сон", url: "healthy-sleep", type: "link" },
        { title: "Купить ВЕЛСОН", url: "buy", buy: "link" },
    ];

    const [isClose, setIsClose] = useState(false);
    return (
        <>
            <div className="footer__wrapper">
                <Modal show={isModalOpen} close={() => setIsModalOpen(false)} />
                <div className="footer content-wrapper">
                    <div className="footer__body">
                        <div className="footer__col">
                            <div className="velson__info">
                                <img src={images.logo} alt="logo" />
                                <span>ООО «НПО Петровакс Фарм» © 2022</span>
                            </div>

                            <div className="petrovax__info">
                                <img src={images.petrovaxLogo} alt="logo" />
                                <span>
                                    Московская область, город Подольск,
                                    <br />
                                    село Покров, ул. Сосновая, д. 1
                                </span>
                            </div>
                        </div>

                        <div className="footer__menu">
                            <ul className="menu">
                                {navLinks.map((menu_item) => (
                                    <li
                                        className="menu__item"
                                        key={generateKey(menu_item.title)}
                                    >
                                        {/* <a href={`#${menu_item.url}`}>
                                                {menu_item.title}
                                            </a> */}
                                        {menu_item.type === "anchor" ? (
                                            <LinkRoute
                                                to={`/#${menu_item.url}`}
                                                activeClass="active"
                                                spy={true}
                                                smooth={true}
                                                offset={0}
                                                duration={500}
                                                ignoreCancelEvents={true}
                                            >
                                                {menu_item.title}
                                            </LinkRoute>
                                        ) : (
                                            <LinkRoute to={`/${menu_item.url}`}>
                                                {menu_item.title}
                                            </LinkRoute>
                                        )}
                                    </li>
                                ))}
                            </ul>
                            <ul className="footer__menu__question">
                                <li
                                    className="menu__subtitle__footer ask_question"
                                    onClick={() => setIsModalOpen(true)}
                                >
                                    Задать нам вопрос
                                </li>
                                <li className="menu__item">info@petrovax.ru</li>
                                <li className="menu__item">+7(495)730-75-45</li>
                            </ul>
                            <div className="footer__menu__social">
                                <img src={images.youtube} alt="YouTube" />
                                <img src={images.vk} alt="vk.com" />
                            </div>
                        </div>
                    </div>
                </div>

                <motion.div
                    className="med-warning"
                    style={{ position: "fixed" }}
                    animate={isClose ? "closed" : "open"}
                    variants={animationVariants}
                >
                    <p className="med-warning__text">
                        имеются противопоказания. необходимо ознакомиться с
                        инструкцией
                    </p>
                    <div
                        className="med-warning__close"
                        onClick={() => setIsClose(true)}
                    >
                        <img src={images.close} alt="close" />
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Footer;
