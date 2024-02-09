import React from "react";
import { images } from "../../constants/index";
import "./UI.scss";

const Button = ({
	text,
	onClickAction = "()=>{}",
	isSimple = "false",
	color = "white",
	isDisabled = false
}) => {
	return (
		<div className={`default-button ${color} ${isSimple ? "no-bg" : "bg"}  ${isDisabled ? "disabled" : ""}`} onClick={onClickAction}>
			<span className="default-button__text">{text}</span>

            {color == "white" && (
                <img
                    className="default-button__icon"
                    src={images.ArrowRight}
                    alt="icon"
                />
            )}

            {color == "blue" && (
                <img
                    className="default-button__icon"
                    src={images.ArrowRightWhite}
                    alt="icon"
                />
            )}
        </div>
    );
};

export default Button;
