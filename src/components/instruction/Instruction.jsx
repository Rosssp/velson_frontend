import styles from "./styles/instruction.module.css";
import InstructionItem from "./instructionItem/InstructionItem";

import { ReactComponent as ArrowPointer } from "../../assets/images/healthy/white-arrow.svg";
import { useState } from "react";
import useMediaQuery from "../../useMediaQuery";

const Instruction = () => {
    const isBreakpoint = useMediaQuery(360);

    const [open, setOpen] = useState(false);
    return (
        <div
            className={`${styles.instruction__bg} ${
                open && styles.instruction__bg_open
            }`}
        >
            <div className={styles.instruction__container}>
                <h4 className={styles.instruction__title}>
                    Инструкция {isBreakpoint ? <br /> : ""} <b>по применению</b>
                </h4>
                <InstructionItem>
                    Регистрационный номер: ЛП-005391
                    <br /> Торговое наименование: ВЕЛСОН®
                    <br /> Международное непатентованное или группировочное
                    наименование: мелатонин
                    <br /> Лекарственная форма: таблетки, покрытые пленочной
                    оболочкой
                </InstructionItem>
                <InstructionItem name={"Состав"}>
                    Одна таблетка, покрытая пленочной оболочкой, содержит:
                    <br />
                    Действующее вещество: мелатонин – 3 мг.
                    <br /> Вспомогательные вещества: кальция гидрофосфат
                    дигидрат – 64,67 мг, целлюлоза
                    <br /> микрокристаллическая – 25,00 мг, повидон К 25 – 3,33
                    мг, кроскармеллоза натрия – 2,00 мг, тальк – 1,00 мг,
                    кремния диоксид
                    <br /> коллоидный – 0,50 мг, кальция стеарат – 0,50 мг.
                    Состав оболочки: опадрай белый (03А280002) – 3,00 мг
                    [гипромеллоза
                    <br /> (гидроксипропилметилцеллюлоза) – 40%, целлюлоза
                    микрокристаллическая – 32%, титана диоксид – 20%, макрогол
                    (полиэтиленгликоль) – 8%].
                </InstructionItem>
                {isBreakpoint ? (
                    <>
                        {!open && (
                            <InstructionItem name={"Описание"}>
                                Круглые двояковыпуклые таблетки, покрытые
                                пленочной оболочкой белого цвета; <br /> на
                                поперечном разрезе ядро от белого до почти
                                белого цвета с коричневатым оттенком.
                                <br />
                                <br /> Фармакотерапевтическая группа:
                                адаптогенное средство.
                                <br />
                                <br />
                                Код АТХ: N05CH01
                            </InstructionItem>
                        )}
                        {open && (
                            <>
                                <InstructionItem
                                    name={"Фармакологические свойства"}
                                >
                                    Фармакодинамика
                                    <br />
                                    <br /> Является синтетическим аналогом
                                    гормона шишковидного тела (эпифиза). В норме
                                    синтез мелатонина в эпифизе имеет
                                    определенный суточный ритм.
                                </InstructionItem>

                                <InstructionItem
                                    name={"Фармакологические свойства"}
                                >
                                    Является синтетическим аналогом гормона
                                    шишковидного тела (эпифиза). В норме синтез
                                    мелатонина в эпифизе имеет определенный
                                    суточный ритм. Выработка мелатонина
                                    синхронизирована с циклом день/ночь, при
                                    этом пик концентрации в плазме приходится на
                                    ночное время, а минимум — на дневное.
                                    Информация об отсутствии света
                                    воспринимается сетчаткой глаза, откуда
                                    сигнал по ретиногипоталамическому тракту
                                    направляется в супрахиазматическое ядро и
                                    далее — в верхний шейный ганглий. Из
                                    окончаний симпатических нервов, отходящих от
                                    нейронов верхнего шейного ганглия, в
                                    паренхиму эпифиза выделяется норадреналин,
                                    который запускает синтез мелатонина. Свет
                                    тормозит выработку мелатонина.
                                    <br /> <br />
                                    <ul>
                                        <li>
                                            Воздействие на любое звено процесса
                                            синтеза мелатонина может привести к
                                            снижению выработки данного гормона и
                                            нарушению циркадных ритмов. Снижение
                                            выработки мелатонина может
                                            наблюдаться на фоне следующих
                                            состояний:
                                        </li>
                                        <li>
                                            избыточное воздействие искусственных
                                            источников света в темное время
                                            суток (особенно голубого спектра —
                                            экран телевизора, смартфона,
                                            компьютера);
                                        </li>
                                        <li>
                                            расстройства цикла сон-бодрствование
                                            (десинхроноз), которые могут
                                            возникать под влиянием эндогенных
                                            (например, при синдроме задержки
                                            фазы сна, синдроме опережения фазы
                                            сна) и экзогенных факторов
                                            (например, нарушения режима сна при
                                            сменном графике работы, смене
                                            часовых поясов);
                                        </li>
                                        <li>
                                            перименопауза и постменопауза у
                                            женщин;
                                        </li>
                                        <li>
                                            наличие вредных привычек (активное
                                            курение и употребление алкоголя);
                                        </li>
                                        <li>
                                            прием некоторых лекарственных
                                            средств (нестероидных
                                            противовоспалительных средств,
                                            бета-блокаторов, бензодиазепинов).
                                        </li>
                                    </ul>
                                    <br />
                                    Мелатонин нормализует циркадные ритмы.
                                    Оказывает адаптогенное, седативное,
                                    снотворное действие. Увеличивает
                                    концентрацию гамма-аминомасляной кислоты
                                    (ГАМК) и серотонина в среднем мозге и
                                    гипоталамусе, изменяет активность
                                    пиридоксалькиназы, участвующей в синтезе
                                    ГАМК, дофамина и серотонина. Регулирует цикл
                                    сон-бодрствование, суточные изменения
                                    локомоторной активности и температуры тела,
                                    положительно влияет на
                                    интеллектуально-мнестические функции мозга,
                                    на эмоционально-личностную сферу.
                                    <br />
                                    <br /> Способствует организации
                                    биологического ритма и нормализации ночного
                                    сна. Улучшает качество сна, ускоряет
                                    засыпание, снижает число ночных пробуждений,
                                    улучшает самочувствие после утреннего
                                    пробуждения, не вызывает ощущения вялости,
                                    разбитости и усталости при пробуждении,
                                    регулирует нейроэндокринные функции, снижает
                                    стрессовые реакции. Адаптирует организм
                                    метеочувствительных людей к изменениям
                                    погодных условий.
                                    <br /> <br /> Не вызывает привыкания и
                                    зависимости.
                                </InstructionItem>
                                <InstructionItem
                                    name={"Показания к применению"}
                                >
                                    При расстройствах сна, в т.ч. обусловленных
                                    нарушением ритма сон-бодрствование, таких
                                    как десинхроноз.
                                </InstructionItem>
                                <InstructionItem name={"Противопоказания"}>
                                    <ul>
                                        <li>
                                            гиперчувствительность к компонентам
                                            препарата;
                                        </li>
                                        <li>печеночная недостаточность;</li>
                                        <li>
                                            тяжелая почечная недостаточность;
                                        </li>
                                        <li>
                                            беременность и период грудного
                                            вскармливания;
                                        </li>
                                        <li>
                                            возраст до 18 лет (эффективность и
                                            безопасность препарата не
                                            установлена).
                                        </li>
                                    </ul>
                                </InstructionItem>
                                <InstructionItem name={"Форма выпуска"}>
                                    Таблетки, покрытые пленочной оболочкой, 3
                                    мг.
                                    <br /> По 10 таблеток в контурной ячейковой
                                    упаковке из пленки поливинилхлоридной и
                                    фольги алюминиевой печатной лакированной.
                                    <br /> По 3, 6 или 9 контурных ячейковых
                                    упаковок вместе с инструкцией по применению
                                    в пачке из картона.
                                </InstructionItem>
                                <InstructionItem name={"Условия хранения"}>
                                    В защищенном от света месте при температуре
                                    не выше 25°С.
                                </InstructionItem>
                                <InstructionItem
                                    name={
                                        "Хранить в недоступном для детей месте."
                                    }
                                ></InstructionItem>
                                <InstructionItem name={"Срок годности"}>
                                    4 года. Не применять по истечении срока
                                    годности, указанного на упаковке.
                                </InstructionItem>
                                <InstructionItem name={"Условия отпуска"}>
                                    Отпускают без рецепта.
                                </InstructionItem>
                            </>
                        )}
                    </>
                ) : (
                    <>
                        <InstructionItem name={"Описание"}>
                            Круглые двояковыпуклые таблетки, покрытые пленочной
                            оболочкой белого цвета; <br /> на поперечном разрезе
                            ядро от белого до почти белого цвета с коричневатым
                            оттенком.
                            <br />
                            <br /> Фармакотерапевтическая группа: адаптогенное
                            средство.
                            <br />
                            <br />
                            Код АТХ: N05CH01
                        </InstructionItem>
                        {!open && (
                            <InstructionItem
                                name={"Фармакологические свойства"}
                            >
                                Фармакодинамика
                                <br />
                                <br /> Является синтетическим аналогом гормона
                                шишковидного тела (эпифиза). В норме синтез
                                мелатонина в эпифизе имеет определенный суточный
                                ритм.
                            </InstructionItem>
                        )}
                        {open && (
                            <>
                                <InstructionItem
                                    name={"Фармакологические свойства"}
                                >
                                    Является синтетическим аналогом гормона
                                    шишковидного тела (эпифиза). В норме синтез
                                    мелатонина в эпифизе имеет определенный
                                    суточный ритм. Выработка мелатонина
                                    синхронизирована с циклом день/ночь, при
                                    этом пик концентрации в плазме приходится на
                                    ночное время, а минимум — на дневное.
                                    Информация об отсутствии света
                                    воспринимается сетчаткой глаза, откуда
                                    сигнал по ретиногипоталамическому тракту
                                    направляется в супрахиазматическое ядро и
                                    далее — в верхний шейный ганглий. Из
                                    окончаний симпатических нервов, отходящих от
                                    нейронов верхнего шейного ганглия, в
                                    паренхиму эпифиза выделяется норадреналин,
                                    который запускает синтез мелатонина. Свет
                                    тормозит выработку мелатонина.
                                    <br /> <br />
                                    <ul>
                                        <li>
                                            Воздействие на любое звено процесса
                                            синтеза мелатонина может привести к
                                            снижению выработки данного гормона и
                                            нарушению циркадных ритмов. Снижение
                                            выработки мелатонина может
                                            наблюдаться на фоне следующих
                                            состояний:
                                        </li>
                                        <li>
                                            избыточное воздействие искусственных
                                            источников света в темное время
                                            суток (особенно голубого спектра —
                                            экран телевизора, смартфона,
                                            компьютера);
                                        </li>
                                        <li>
                                            расстройства цикла сон-бодрствование
                                            (десинхроноз), которые могут
                                            возникать под влиянием эндогенных
                                            (например, при синдроме задержки
                                            фазы сна, синдроме опережения фазы
                                            сна) и экзогенных факторов
                                            (например, нарушения режима сна при
                                            сменном графике работы, смене
                                            часовых поясов);
                                        </li>
                                        <li>
                                            перименопауза и постменопауза у
                                            женщин;
                                        </li>
                                        <li>
                                            наличие вредных привычек (активное
                                            курение и употребление алкоголя);
                                        </li>
                                        <li>
                                            прием некоторых лекарственных
                                            средств (нестероидных
                                            противовоспалительных средств,
                                            бета-блокаторов, бензодиазепинов).
                                        </li>
                                    </ul>
                                    <br />
                                    Мелатонин нормализует циркадные ритмы.
                                    Оказывает адаптогенное, седативное,
                                    снотворное действие. Увеличивает
                                    концентрацию гамма-аминомасляной кислоты
                                    (ГАМК) и серотонина в среднем мозге и
                                    гипоталамусе, изменяет активность
                                    пиридоксалькиназы, участвующей в синтезе
                                    ГАМК, дофамина и серотонина. Регулирует цикл
                                    сон-бодрствование, суточные изменения
                                    локомоторной активности и температуры тела,
                                    положительно влияет на
                                    интеллектуально-мнестические функции мозга,
                                    на эмоционально-личностную сферу.
                                    <br />
                                    <br /> Способствует организации
                                    биологического ритма и нормализации ночного
                                    сна. Улучшает качество сна, ускоряет
                                    засыпание, снижает число ночных пробуждений,
                                    улучшает самочувствие после утреннего
                                    пробуждения, не вызывает ощущения вялости,
                                    разбитости и усталости при пробуждении,
                                    регулирует нейроэндокринные функции, снижает
                                    стрессовые реакции. Адаптирует организм
                                    метеочувствительных людей к изменениям
                                    погодных условий.
                                    <br /> <br /> Не вызывает привыкания и
                                    зависимости.
                                </InstructionItem>
                                <InstructionItem
                                    name={"Показания к применению"}
                                >
                                    При расстройствах сна, в т.ч. обусловленных
                                    нарушением ритма сон-бодрствование, таких
                                    как десинхроноз.
                                </InstructionItem>
                                <InstructionItem name={"Противопоказания"}>
                                    <ul>
                                        <li>
                                            гиперчувствительность к компонентам
                                            препарата;
                                        </li>
                                        <li>печеночная недостаточность;</li>
                                        <li>
                                            тяжелая почечная недостаточность;
                                        </li>
                                        <li>
                                            беременность и период грудного
                                            вскармливания;
                                        </li>
                                        <li>
                                            возраст до 18 лет (эффективность и
                                            безопасность препарата не
                                            установлена).
                                        </li>
                                    </ul>
                                </InstructionItem>
                                <InstructionItem name={"Форма выпуска"}>
                                    Таблетки, покрытые пленочной оболочкой, 3
                                    мг.
                                    <br /> По 10 таблеток в контурной ячейковой
                                    упаковке из пленки поливинилхлоридной и
                                    фольги алюминиевой печатной лакированной.
                                    <br /> По 3, 6 или 9 контурных ячейковых
                                    упаковок вместе с инструкцией по применению
                                    в пачке из картона.
                                </InstructionItem>
                                <InstructionItem name={"Условия хранения"}>
                                    В защищенном от света месте при температуре
                                    не выше 25°С.
                                </InstructionItem>
                                <InstructionItem
                                    name={
                                        "Хранить в недоступном для детей месте."
                                    }
                                ></InstructionItem>
                                <InstructionItem name={"Срок годности"}>
                                    4 года. Не применять по истечении срока
                                    годности, указанного на упаковке.
                                </InstructionItem>
                                <InstructionItem name={"Условия отпуска"}>
                                    Отпускают без рецепта.
                                </InstructionItem>
                            </>
                        )}
                    </>
                )}

                <button
                    className={`${styles.instruction__button} ${
                        open && styles.instruction__button_open
                    }`}
                    onClick={() => setOpen(!open)}
                >
                    {open ? "показать меньше" : "показать больше"}
                    <ArrowPointer />
                </button>
            </div>
        </div>
    );
};

export default Instruction;
