import styles from "./styles/advantages.module.css";
import { motion } from "framer-motion";
import Alarm from "../../assets/images/healthy/advantages/alarm.webp";
import Smiley from "../../assets/images/healthy/advantages/smiley.webp";
import Hamburger from "../../assets/images/healthy/advantages/hamburger.webp";
import Bed from "../../assets/images/healthy/advantages/bed.webp";

const advantages__array = [
    {
        id: 1,
        src: Alarm,
        alt: "alarm",
        text: "Забудьте про стандарты о 8-часовом сне! Продолжительность сна — индивидуальная характеристика каждого человека",
    },
    {
        id: 2,
        src: Smiley,
        alt: "smiley",
        text: "Согласно исследованиям* люди, которые спят 6-7 часов, живут дольше и счастливее тех, кто спит «положенные» 8 часов",
    },
    {
        id: 3,
        src: Hamburger,
        alt: "hamburger",
        text: "Плотный ужин негативно влияет на качество сна. Отдавая предпочтение легким блюдам вечером, ночью ваш организм полноценно восстанавливается",
    },
    {
        id: 4,
        src: Bed,
        alt: "bad",
        text: "Качественный сон способствует похудению. Здоровый сон — важная составляющая расписания физических нагрузок для получения желанных результатов",
    },
];

const Advantages = () => {
    return (
        <div className={styles.advantages__bg}>
            <div className={styles.advantages__container}>
                <div className={styles.advantages__body}>
                    {advantages__array.map((item) => (
                        <motion.div key={item.id} className={styles.advantages__item}>
                            <div className={styles.item__image}>
                                <motion.img
                                    loading="lazy"
                                    src={item.src}
                                    alt={item.alt}
                                    whileInView={{scale: [1.1, 1], opacity: [0, 1]}}
                                />
                            </div>
                            <motion.p className={styles.item__text} whileInView={{ opacity: [0, 1], y: [40, 0]}} transition={{ ease: "easeInOut", delay: 0.5 }}>{item.text}</motion.p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Advantages;
