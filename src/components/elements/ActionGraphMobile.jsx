import React, { useEffect, useRef, useState } from "react";
import { images } from "../../constants";
import { motion } from "framer-motion";

export default function ActionGraphMobile() {
    return (
        <>
            <motion.div className="actions__graph__mobile">
                <motion.div className="graph__item">
                    <div className="graph__pointer">
                        <img src={images.graphPointerRotated} alt="Pointer" />
                    </div>
                    <div>
                        <span className="graph__time">21:00</span>
                        <p className="graph__text">
                            Эпифиз «усиливает» выработку мелатонина
                        </p>
                    </div>
                </motion.div>
                <motion.div className="graph__item">
                    <div className="graph__pointer graph__pointer--accent">
                        <img
                            src={images.graphPointerAccentRotated}
                            alt="Pointer"
                        />
                    </div>
                    <div>
                        <span className="graph__time graph__time--violet">
                            2:00 до 5:00
                        </span>
                        <p className="graph__text">
                            Самый глубокий сон: пиковая концентрация мелатонина
                            в крови.{" "}
                            <b>ВЕЛСОН поддерживает фазу глубокого сна</b>
                        </p>
                    </div>
                </motion.div>

                <motion.div className="graph__item">
                    <div className="graph__pointer">
                        <img src={images.graphPointerRotated} alt="Pointer" />
                    </div>
                    <div>
                        <span className="graph__time">06:00</span>
                        <p className="graph__text">
                            Происходит выработка гормона кортизола для
                            подготовки организма к пробуждению
                        </p>
                    </div>
                </motion.div>

                <motion.div className="graph__item">
                    <div className="graph__pointer">
                        <img src={images.graphPointerRotated} alt="Pointer" />
                    </div>
                    <div>
                        <span className="graph__time">07:00</span>
                        <p className="graph__text">
                            Прекращение выработки мелатонина (отличное время для
                            пробуждения)
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
}
