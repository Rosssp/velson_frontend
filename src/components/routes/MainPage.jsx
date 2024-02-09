import React from "react";
import MainBlock from "../blocks/MainBlock";
import ActionBlock from "../blocks/ActionBlock";
import HowInstructionBlock from "../blocks/HowInstructionBlock";
import OrderNow from "../UI/OrderNow";
import VerticalBanner from "../blocks/verticalBanner";
import useMediaQuery from "../../useMediaQuery";
import HorizontalBanner from "../blocks/HorizontalBanner";
import VerticalSlider from "../blocks/VerticalSlider";
import Instruction from "../instruction/Instruction";

const MainPage = () => {
    const isBreakpoint = useMediaQuery(1024);

    return (
        <>
            <MainBlock />
            <OrderNow />
            {isBreakpoint ? <HorizontalBanner /> : <VerticalBanner />}
            {/* {isBreakpoint ? <HorizontalBanner /> : <VerticalSlider />} */}
            <ActionBlock />
            <HowInstructionBlock />
            <Instruction />
        </>
    );
};

export default MainPage;
