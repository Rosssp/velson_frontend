import styles from "./styles/buyVelsonPage.module.css";

import Order from "../../order/Order";
import Uteka from "../../uteka/Uteka";

import Map from "../../mapUteka/MapUteka";

const BuyVelsonPage = () => {
    return (
        <>
            <div className={styles.header_background} />
            <div className={styles.container}>
                <Order />
                <Uteka />
            </div>
            <Map />
        </>
    );
};

export default BuyVelsonPage;
