import React, { useRef, useState } from "react";
import { images } from "../../constants";

const BlockWrapper = (Component, idName, classNames, styles) =>
    function HOC() {
        // const [customHeight, setCustomHeight] = useState(null);
        // let setWrapperHeight = (newHeight) => {
        //     setCustomHeight(newHeight);
        // };

        return (
            <div
                className={`block__container ${[...classNames]}`}
                id={idName}
                // style={{ height: `${customHeight}px` }}
                // style={`${styles}, height:"${customHeight}"`}
                // style={{ height: `${customHeight} px` }}
            >
                {/* {console.log(customHeight)} */}
                <Component
                // onHeightChange={() => setWrapperHeight()}
                />
            </div>
        );
    };

export default BlockWrapper;
