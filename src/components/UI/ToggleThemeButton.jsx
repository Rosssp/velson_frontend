import React, { useState } from "react";
import { ReactComponent as Moon } from "../../assets/images/moon.svg";
import { ReactComponent as Sun } from "../../assets/images/sun.svg";
import "./UI.scss";

const ToggleThemeButton = ({ toggleAction, isWhite }) => {
    return (
        <div
            className={`toggleTheme ${isWhite ? "" : "sunActive"}`}
            onClick={toggleAction}
        >
            <Moon className={`icon icon-moon ${isWhite ? "active" : ""}`} />
            <Sun className={`icon icon-sun ${isWhite ? "" : "active"}`} />
        </div>
    );
};

export default ToggleThemeButton;
