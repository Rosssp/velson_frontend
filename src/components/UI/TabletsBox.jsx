import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import useMediaQuery from "../../useMediaQuery";

import "./UI.scss";

const TabletsBox = (props) => {
    const { currentBox } = props;

    const isBreakpoint = useMediaQuery(768);

    const canvasFirst = useRef(null);
    const canvasSecond = useRef(null);

    const frameCount = 71;

    const frameSeq = {
        frame: 0,
    };

    const blackImages = [];
    const whiteImages = [];

    const currentBlackFrame = (index) =>
        `/png_sequence/dark-box-animation/box_${(index + 1)
            .toString()
            .padStart(5, "0")}-min.png`;

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentBlackFrame(i);
        blackImages.push(img);
    }

    const currentWhiteFrame = (index) =>
        `/png_sequence/light-box-animation/box_${(index + 1)
            .toString()
            .padStart(5, "0")}-min.png`;

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentWhiteFrame(i);
        whiteImages.push(img);
    }
    useEffect(() => {
        const ctxFirst = canvasFirst.current.getContext("2d");
        const ctxSecond = canvasSecond.current.getContext("2d");

        function RenderBlack() {
            ctxFirst.clearRect(0, 0, 1200, 800);
            ctxFirst.drawImage(blackImages[frameSeq.frame], 0, 0);
        }

        function RenderWhite() {
            ctxSecond.clearRect(0, 0, 1200, 800);
            ctxSecond.drawImage(whiteImages[frameSeq.frame], 0, 0);
        }
        blackImages[0].onload = RenderBlack;
        whiteImages[0].onload = RenderWhite;
        window.onload = () => {
            RenderBlack();
            RenderWhite();

            if (isBreakpoint === true) {
                blackImages[0].onload = RenderBlack;
                whiteImages[0].onload = RenderWhite;
            }
            if (isBreakpoint === false) {
                gsap.to(frameSeq, {
                    frame: frameCount - 1,
                    snap: "frame",
                    duration: 2,
                    ease: "none",
                    repeat: Infinity,
                    onUpdate: RenderBlack,
                });
                gsap.to(frameSeq, {
                    frame: frameCount - 1,
                    snap: "frame",
                    duration: 2,
                    ease: "none",
                    repeat: Infinity,
                    onUpdate: RenderWhite,
                });
            }
        };
    }, [
        canvasFirst,
        canvasSecond,
        frameCount,
        frameSeq,
        blackImages,
        whiteImages,
        isBreakpoint,
    ]);

    return (
        <>
            <div className={`sequence-wrap ${currentBox ? "" : "op-0"}`}>
                <canvas
                    className="responsive-canvas"
                    ref={canvasFirst}
                    width={450}
                    height={350}
                />
            </div>
            <div className={`sequence-wrap ${currentBox ? "op-0" : ""}`}>
                <canvas
                    className="responsive-canvas"
                    ref={canvasSecond}
                    width={450}
                    height={350}
                />
            </div>
        </>
    );
};

export default TabletsBox;
