import React, { useState } from "react";
import { images } from "../../constants/index";
import "./UI.scss";

const ShowMoreButton = ({ text, onClickAction = "()=>{}" }) => {
    const [isActive, setIsActive] = useState(false);

    const toggleButton = () => {
        onClickAction();
        setIsActive((prev) => !prev);
    };

    return (
        <div
            className={`default-button ShowMoreButton no-bg ${
                isActive ? "active" : ""
            }`}
            onClick={toggleButton}
        >
            <span className="default-button__text">
                {isActive ? "ПОКАЗАТЬ МЕНЬШЕ" : "ПОКАЗАТЬ БОЛЬШЕ"}
            </span>

            <img
                style={{ margin: "0 6%" }}
                className="default-button__icon__showmore"
                src={images.ArrowPointer}
                alt="icon"
            />
        </div>
    );
};

export default ShowMoreButton;
