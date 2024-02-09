import styles from "./styles/mainHealthy.module.css";
import { ReactComponent as ArrowPointer } from "../../assets/images/healthy/white-arrow.svg";
import { ReactComponent as LetterMoon } from "../../assets/images/healthy/letter-moon.svg";
import { motion } from "framer-motion";

const MainHealthy = () => {
    return (
        <div className={styles.mainhealthy__body}>
            <motion.div className={styles.mainhealthy__title__container} whileInView={{ opacity: [0, 1] }}>
                <h1 className={styles.mainhealthy__title}>
                    Здоровый <span>сон</span>
                </h1>
                <h2 className={styles.mainhealthy__subtitle}>
                    Главный фактор, который влияет на наше самочувствие и
                    активность в течение дня — это качественный{" "}
                    <span>
                        н
                        <LetterMoon
                            className={styles.mainhealthy__letter_moon}
                        />
                        чной
                    </span>{" "}
                    сон
                </h2>
                <div className={styles.mainhealthy__footer}>
                    <ArrowPointer />
                </div>
            </motion.div>
        </div>
    );
};

export default MainHealthy;
