import React from "react";
import { ReactComponent as ArrowPointer } from "../../assets/images/ArrowPointer.svg";

const ListPointer = ({
  isActive1,
  isActive2,
  isActive3,
  setCurrent = () => {},
}) => {
//   const toggleCurrentMinus = () => {
//     if (current > 1) {
//       setCurrent((prev) => prev - 1);
//     }
//   };

//   const toggleCurrent = () => {
//     if (current < 3) {
//       setCurrent((prev) => prev + 1);
//     }
//   };

  return (
    <div className="benefit-list">
      <ArrowPointer onClick={setCurrent} />

      <div className={`benefit-list__item ${isActive1 ? "active" : ""}`} />
	  <div className={`benefit-list__item ${isActive2 ? "active" : ""}`} />
	  <div className={`benefit-list__item ${isActive3 ? "active" : ""}`} />
      <ArrowPointer onClick={setCurrent} />
    </div>
  );
};

export default ListPointer;
