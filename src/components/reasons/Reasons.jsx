import styles from "./styles/reasons.module.css";
import { motion } from "framer-motion";
import { ReactComponent as LetterSmile } from "../../assets/images/healthy/reasons/letter-smile.svg";

import SmileyNervous from "../../assets/images/healthy/reasons/smiley-nervous.webp";
import CircleHalf from "../../assets/images/healthy/reasons/circle-half.webp";
import Bicycle from "../../assets/images/healthy/reasons/bicycle.webp";
import PersonSimpleWalk from "../../assets/images/healthy/reasons/person-simple-walk.webp";
import Plane from "../../assets/images/healthy/reasons/plane.webp";
import GenderFemale from "../../assets/images/healthy/reasons/gender-female.webp";
import FaceMask from "../../assets/images/healthy/reasons/face-mask.webp";
import DeviceMobile from "../../assets/images/healthy/reasons/device-mobile.webp";
import BadHabits from "../../assets/images/healthy/reasons/bad-habits.webp";

const reasons__array = [
    {
        id: 1,
        src: SmileyNervous,
        alt: "smiley-nervous",
        name: "Стрессовые ситуации",
    },
    {
        id: 2,
        src: CircleHalf,
        alt: "circle-half",
        name: "Не соблюдение режима труда и отдыха",
    },
    {
        id: 3,
        src: Bicycle,
        alt: "bicycle",
        name: "Спортивные нагрузки в вечернее время",
    },
    {
        id: 4,
        src: PersonSimpleWalk,
        alt: "person-simple-walk",
        name: "Возрастные изменения организма",
    },
    {
        id: 5,
        src: Plane,
        alt: "plane",
        name: "Смена часовых поясов (джетлаг)",
    },
    {
        id: 6,
        src: GenderFemale,
        alt: "gender-female",
        name: "Период менопаузы или ПМС у женщин",
    },
    {
        id: 7,
        src: FaceMask,
        alt: "face-mask",
        name: "COVID и перенесенный COVID",
    },
    {
        id: 8,
        src: DeviceMobile,
        alt: "device-mobile",
        name: "Использование экранов в темное время суток",
    },
    {
        id: 9,
        src: BadHabits,
        alt: "bad-hadits",
        name: "Вредные привычки",
    },
];

const Reasons = () => {
    return (
        <div className={styles.reasons__bg} id="reasons">
            <div className={styles.reasons__container}>
                <h3 className={styles.reasons__title}>
                    Причины <span>нарушения сна</span>
                </h3>
                <h4 className={styles.reasons__subtitle}>
                    Когда происходит{" "}
                    <span>
                        сб
                        <LetterSmile className={styles.reasons__letter_smile} />
                        й
                    </span>{" "}
                    в естественной выработке мелатонина, нарушаются циркадные
                    ритмы (сон — бодрствование), снижается качество и
                    продолжительность сна
                </h4>
                <div className={styles.reasons__body}>
                    {reasons__array.map((item) => (
                        <motion.div key={item.id} className={styles.reasons__item} whileInView={{ opacity: [0, 1] }}>
                            <div className={styles.item__image}>
                                <motion.img
                                    loading="lazy"
                                    src={item.src}
                                    alt={item.alt}
                                    whileInView={{scale: [1.1, 1]}}
                                />
                            </div>
                            <p className={styles.item__text}>{item.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reasons;
