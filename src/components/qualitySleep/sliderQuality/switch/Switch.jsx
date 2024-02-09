import styles from "./styles/switch.module.css";

import { ReactComponent as ArrowPointer } from "../../../../assets/images/ArrowPointer.svg";

const dots = [1, 2, 3, 4];

const Switch = ({ active, setActive }) => {
    return (
        <div className={styles.slider__switch}>
            <ArrowPointer
                className={active === 1 ? styles.disabled : ""}
                onClick={() => setActive(active - 1)}
            />
            {dots.map((dot) => (
                <div
                    key={dot}
                    className={`${styles.switch__dot} ${
                        active === dot && styles.switch__dot_active
                    }`}
                    onClick={() => setActive(dot)}
                />
            ))}
            <ArrowPointer
                className={active === 4 ? styles.disabled : ""}
                onClick={() => setActive(active + 1)}
            />
        </div>
    );
};

export default Switch;
