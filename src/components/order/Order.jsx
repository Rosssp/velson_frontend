import styles from "./styles/order.module.css";
import AptekaRu from "../../assets/images/order/apteka-ru.webp";
import SberApteka from "../../assets/images/order/sber-apteka.webp";
import ZdravCity from "../../assets/images/order/zdrav-city.webp";
import Ozon from "../../assets/images/order/ozon.webp";
import useMediaQuery from "../../useMediaQuery";

const order_items = [
    {
        id: 1,
        src: AptekaRu,
        alt: "Купить ВЕЛСОН в apteka-ru",
        href: "https://apteka.ru/product/velson-3-mg-melatonin-tabletki-dlya-sna-uspokoitelnoe-snotvornoe-30-sht-5e326e4c65b5ab00016540bd/",
    },
    {
        id: 2,
        src: SberApteka,
        alt: "Купить ВЕЛСОН в sber-apteka",
        href: "https://www.eapteka.ru/goods/id336878/",
    },
    {
        id: 3,
        src: ZdravCity,
        alt: "Купить ВЕЛСОН в zdrav-city",
        href: "https://zdravcity.ru/p_velson-tab-p-o-plen-3mg-n30-0097308.html",
    },
    {
        id: 4,
        src: Ozon,
        alt: "Купить ВЕЛСОН в Ozon.ru",
        href: "https://www.ozon.ru/product/velson-3-mg-tabletki-30-161598121/?asb=bo0qCPzUk4XjgJLf%252FzCzisAZVE6QY3zmpF%252BddQ1RdO8%253D&asb2=q2S5YbpPmN9sjUY2VXOSvo1TtBos6bQRSMgUfZ8ZNysAmHt3d-QuuqYcllCTg34ytpe6qyniFqKGsQUalHmUAQ&keywords=велсон&sh=8-0TX_fY9g",
    },
];

const Order = () => {
    const isBreakpoint = useMediaQuery(768);

    return (
        <div className={styles.order__container}>
            <h1 className={styles.order__title}>
                Заказать ВЕЛСОН {isBreakpoint ? <br /> : ""}{" "}
                <span>с доставкой</span>
            </h1>
            <div className={styles.order__body}>
                {order_items.map((item) => (
                    <div key={item.id} className={styles.order__item}>
                        <a
                            href={item.href}
                            rel="nofollow noopener"
                            target="_blank"
                        >
                            <img src={item.src} alt={item.alt} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Order;
