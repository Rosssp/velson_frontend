import styles from "./styles/qualitySleep.module.css";

import { ReactComponent as LetterLightning } from "../../assets/images/healthy/quality/letter-lightning.svg";
import { motion } from "framer-motion";
import SliderQuality from "./sliderQuality/SliderQuality";
import SliderSticky from "./sliderSticky/SliderSticky";
import useMediaQuery from "../../useMediaQuery";

const QualitySleep = () => {
    const isBreakpoint = useMediaQuery(1024);
    return (
        <div className={styles.qualitySleep__container} id="rules">
            <motion.h3 className={styles.qualitySleep__title} whileInView={{ opacity: [0, 1], y: [20, 0]}}>
                Полноценный и качественный сон обеспечит необходимый{" "}
                <span>
                    зар
                    <LetterLightning
                        className={styles.qualitySleep__letter_lightning}
                    />
                    д
                </span>{" "}
                бодрости и энергии на целый день. Соблюдайте эти простые правила
                и внесите в свою жизнь несколько новых ритуалов для здорового
                сна
            </motion.h3>
            {isBreakpoint ? <SliderQuality /> : <SliderSticky />}
            
        </div>
    );
};

export default QualitySleep;
