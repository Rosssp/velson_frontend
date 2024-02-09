import React from "react";
import { motion } from "framer-motion";
import { saveAs } from "file-saver";
import { images } from "../../constants";
import { BlockWrapper } from "../wrapper";
import { Button } from "../UI";
import { Link as LinkRoute } from "react-router-dom";

import "./HowInstructionBlock.scss";

const HowInstructionBlock = () => {
    const saveFile = () => {
        saveAs(`${images.instruction}`, "instruction.pdf");
    };

    return (
        <>
            <div className="block__wrapper content-wrapper block__wrapper--how content-wrapper">
                <h2 className="how__title">
                    Как принимать <b>ВЕЛСОН</b>
                </h2>
                <div className="how__wrapper">
                    <motion.div
                        className="how__item"
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 1 }}
                    >
                        <div className="item__image-wrapper">
                            <img src={images.how1comp} className="how__icon" />
                        </div>
                        <p className="how__text">При нарушениях сна</p>
                        <p className="item__description">
                            1 таблетка
                            <br /> за 30–40 минут до сна
                        </p>
                    </motion.div>

                    <motion.div
                        className="how__item"
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 1 }}
                    >
                        <div className="item__image-wrapper">
                            <img src={images.how2comp} className="how__icon" />
                        </div>
                        <p className="how__text">
                            При смене
                            <br />
                            &nbsp;часовых поясов
                        </p>
                        <p className="item__description">
                            За 1 день до перелета
                            <br />и в последующие 2–5 дней: <br /> по 1 таблетке
                            за 30–40 минут до сна
                        </p>
                    </motion.div>

                    <motion.div
                        className="how__item"
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 1 }}
                    >
                        <div className="item__image-wrapper">
                            <img src={images.how3comp} className="how__icon" />
                        </div>
                        <p className="how__text">Пациентам пожилого возраста</p>
                        <p className="item__description">
                            1 таблетка
                            <br /> за 60–90 минут до сна
                        </p>
                    </motion.div>
                </div>

                <div className="how__footer">
                    <LinkRoute to={`/buy`}>
                        <Button
                            text={"КУПИТЬ ВЕЛСОН"}
                            onClickAction={() => {}}
                            isSimple={false}
                            color="blue"
                        />
                    </LinkRoute>
                    <Button
                        text={"СКАЧАТЬ ИНСТРУКЦИЮ"}
                        onClickAction={saveFile}
                        isSimple={true}
                        color="white"
                    />
                </div>
            </div>

            {/* subblock - инструкция */}
        </>
    );
};

export default BlockWrapper(HowInstructionBlock, "how", [
    "block__container--how",
]);
