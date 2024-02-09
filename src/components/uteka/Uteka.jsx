import styles from "./styles/uteka.module.css";
import useMediaQuery from "../../useMediaQuery";

import UtekaLogo from "../../assets/images/order/uteka.svg";

const Uteka = () => {
    const isBreakpoint = useMediaQuery(768);

    return (
        <div className={styles.uteka__container}>
            <div className={styles.uteka__title_body}>
                <h2 className={styles.uteka__title}>
                    Заказать ВЕЛСОН {isBreakpoint ? <br /> : ""}{" "}
                    <span>в пункт выдачи</span>
                </h2>
                <a href="https://uteka.ru/">
                    <img
                        className={styles.uteka__logo}
                        src={UtekaLogo}
                        alt="uteka"
                    />
                </a>
            </div>
        </div>
    );
};

export default Uteka;
