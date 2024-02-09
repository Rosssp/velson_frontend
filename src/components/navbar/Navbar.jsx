import { images } from "../../constants/index";
import { LinkScrollConsumer } from "../../LinkScrollContext";
import "./navbar.scss";

import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";
import Modal from "../modal/Modal";
import { Link as LinkRoute } from "react-router-dom";
import { useNavigate, useLocation } from "react-router";

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const generateKey = (pre) => {
        return `${pre}_${new Date().getTime()}`;
    };
    const [y, setY] = useState(window.scrollY);
    const [isView, setIsView] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isTransparent, setIsTransparent] = useState(true);

    const [isModalOpen, setIsModalOpen] = useState(false);

    isMenuOpen
        ? (document.body.style.overflowY = "hidden")
        : (document.body.style.overflowY = "");

    const handleNavigation = useCallback(
        (e) => {
            const window = e.currentTarget;
            if (window.pageYOffset <= 30) {
                setIsTransparent(true);
            } else {
                setIsTransparent(false);
            }
            setY(window.scrollY);
        },
        [y]
    );

    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);
        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);

    const navLinks = [
        { title: "Преимущества ВЕЛСОН", url: "benefits", type: "anchor" },
        { title: "Действие мелатонина", url: "action", type: "anchor" },
        { title: "Как принимать ВЕЛСОН", url: "how", type: "anchor" },
        { title: "Здоровый сон", url: "healthy-sleep", type: "link" },
        { title: "Купить ВЕЛСОН", url: "buy", type: "link" },
    ];

    const animationVariants = {
        show: { opacity: 1, y: 0 },
        hide: { opacity: 0, y: -100 },
    };

    const MenuanimationVariants = {
        show: { opacity: 1, y: 0, display: "block" },
        hide: { opacity: 0, y: "-10%", display: "none" },
    };

    return (
        <motion.nav
            className={`app__navbar 
			${isTransparent && !isMenuOpen ? "transparent" : ""} 
			${isView ? "onscroll" : ""} 
			${isMenuOpen ? "open" : ""} `}
            variants={animationVariants}
        >
            <Modal show={isModalOpen} close={() => setIsModalOpen(false)} />
            <div className="content-wrapper navbar__wrapper">
                <LinkRoute to="/">
                    <img
                        className="app__navbar-logo"
                        src={images.logo}
                        alt="logo"
                        // style={{ maxHeight: 40 }}
                        onClick={() =>
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            })
                        }
                    />
                </LinkRoute>
                <ul className="app__navbar-links">
                    {navLinks.map((menu_item) => (
                        <li
                            className="app__flex p-text"
                            key={generateKey(menu_item.title)}
                        >
                            {menu_item.type === "anchor" ? (
                                <LinkRoute
                                    to={`/#${menu_item.url}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {menu_item.title}
                                </LinkRoute>
                            ) : (
                                <LinkRoute
                                    to={`/${menu_item.url}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {menu_item.title}
                                </LinkRoute>
                            )}
                        </li>
                    ))}
                </ul>

                <div
                    className={`header__wrapper ${
                        isMenuOpen ? "is-active" : ""
                    }`}
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                    <div className={`header__menu`}>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className="app__navbar-line" />
            <motion.div
                className="menu__wrapper"
                animate={isMenuOpen ? "show" : "hide"}
                variants={MenuanimationVariants}
            >
                <div className="menu__content">
                    <ul className="menu__col">
                        <li className="menu__item">
                            <LinkRoute
                                to={`/#benefits`}
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                ignoreCancelEvents={true}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Преимущества ВЕЛСОН
                            </LinkRoute>
                        </li>
                        <li
                            className="menu__item"
                            smooth={true}
                            offset={0}
                            duration={500}
                            ignoreCancelEvents={true}
                        >
                            <LinkRoute
                                onClick={() => setIsMenuOpen(false)}
                                to={`/#action`}
                            >
                                Действие мелатонина
                            </LinkRoute>
                        </li>

                        <li
                            className="menu__item"
                            smooth={true}
                            offset={0}
                            duration={500}
                            ignoreCancelEvents={true}
                        >
                            <LinkRoute
                                onClick={() => setIsMenuOpen(false)}
                                to={`/#how`}
                            >
                                Как принимать ВЕЛСОН
                            </LinkRoute>
                        </li>
                        <li className="menu__item">
                            <LinkRoute
                                to={`/healthy-sleep`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Здоровый сон
                            </LinkRoute>
                        </li>
                        <li
                            className="menu__item"
                            smooth={true}
                            offset={0}
                            duration={500}
                            ignoreCancelEvents={true}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <LinkRoute
                                onClick={() => {
                                    setIsMenuOpen(false);
                                }}
                                to={"/buy"}
                            >
                                Купить ВЕЛСОН
                            </LinkRoute>
                        </li>
                    </ul>
                    <ul className="menu__col" style={{ display: "none" }}>
                        <li className="menu__item">
                            <Link onClick={() => setIsMenuOpen(false)}>
                                Особенности ВЕЛСОН
                            </Link>
                        </li>
                        <li className="menu__item">
                            <Link onClick={() => setIsMenuOpen(false)}>
                                Статьи
                            </Link>
                        </li>
                        <li className="menu__item">
                            <Link onClick={() => setIsMenuOpen(false)}>
                                Онлайн-тесты
                            </Link>
                        </li>
                        <li className="menu__item">
                            <Link onClick={() => setIsMenuOpen(false)}>
                                Частые вопросы и обратная связь
                            </Link>
                        </li>
                    </ul>
                    <ul className="menu__col">
                        <h2
                            className="menu__subtitle ask_question"
                            onClick={() => {
                                setIsModalOpen(true);
                                setIsMenuOpen(false);
                            }}
                        >
                            Задать нам вопрос
                        </h2>
                        <li className="menu__item">
                            <a
                                href="mailto:info@petrovax.ru"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                info@petrovax.ru
                            </a>
                        </li>
                        <li className="menu__item">
                            <a
                                href="tel:+7495730-75-45"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                +7 (495) 730-75-45
                            </a>
                        </li>
                    </ul>
                </div>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;
