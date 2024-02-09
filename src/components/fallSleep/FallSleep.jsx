import styles from "./styles/fallSleep.module.css";
import { motion } from "framer-motion";
import { ReactComponent as LetterStar } from "../../assets/images/healthy/fallSleep/letter-star.svg";
import Velson from "../../assets/images/healthy/fallSleep/velson.webp";

import { Button } from "../UI";

import { useNavigate } from "react-router";

const FallSleep = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.fallSleep__container} id="help">
            <motion.h3 className={styles.fallSleep__title} whileInView={{ opacity: [0, 1], y: [20, 0]}}>
                Если заснуть все же не удалось или вы почувствовали, что
                качество сна оставляет желать лучшего — это означает, что
                организму нужна{" "}
                <span>
                    п
                    <LetterStar className={styles.fallSleep__letter_star} />
                    мощь
                </span>
            </motion.h3>
            <motion.div className={styles.fallSleep__body}>
                <div className={styles.fallSleep__description}>
                    <motion.p whileInView={{ opacity: [0, 1], x: [-40, 0]}} transition={{ ease: "easeOut", delay: 0.5 }}>
                        Препараты мелатонина, например, Велсон, способствуют
                        восполнению дефицита мелатонина, что приводит к
                        улучшению качества сна, ускорению засыпания, снижению
                        числа ночных пробуждений. <br /> И главное, улучшает
                        самочувствие после утреннего пробуждения, не вызывает
                        ощущения вялости, разбитости и усталости при пробуждении
                        в отличие от рецептурных снотворных и растительных
                        успокоительных средств
                    </motion.p>
                    <div className={styles.fallSleep__buttons}>
                        <Button
                            text={"КУПИТЬ ВЕЛСОН"}
                            onClickAction={() => navigate("/buy")}
                            isSimple={false}
                            color="blue"
                        />
                        <Button
                            text={"КАК ПРИНИМАТЬ ВЕЛСОН"}
                            onClickAction={() => navigate("/#how")}
                            isSimple={true}
                            color="white"
                        />
                    </div>
                </div>
                <motion.div className={styles.fallSleep__image} whileInView={{ opacity: [0, 1], x: [40, 0]}} transition={{ ease: "easeOut", delay: 0.5 }}>
                    <img loading="lazy" src={Velson} alt="velson" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default FallSleep;
