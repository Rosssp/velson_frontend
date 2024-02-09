import "./styles/mapUteka.css";

import { useEffect } from "react";

const Map = () => {
    useEffect(() => {
        window.uteka.onReady(function () {
            var widget = document.querySelector(".uteka-widget");

            window.uteka.loadWidget(widget, {
                productId: "361870",
            });
        });
    }, []);
    return (
        <div className="map-uteka__container">
            <div className="uteka-widget">
                <iframe loading="lazy" allow="geolocation"></iframe>
            </div>
        </div>
    );
};

export default Map;
