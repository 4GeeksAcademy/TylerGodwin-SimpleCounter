import React from "react";
import propTypes from "prop-types";

const SimpleCounter = (props) => {
  return (
    <>
      <div className="counter">
        <div className="container d-flex justify-content-center">
          <div className="row">
            <div className="col"><i className="fa-regular fa-clock"></i></div>
			<div className="col my-auto sixthDigit">{props.sixthDigit % 10}</div>
            <div className="col my-auto fifthDigit">{props.fifthDigit % 10}</div>
            <div className="col my-auto fourthDigit">{props.fourthDigit % 10}</div>
            <div className="col my-auto thirdDigit">{props.thirdDigit % 10}</div>
            <div className="col my-auto secondDigit">{props.secondDigit % 10}</div>
            <div className="col my-auto firstDigit">{props.firstDigit % 10}</div>
          </div>
        </div>
      </div>
    </>
  );
};

SimpleCounter.propType = {
	sixthDigit: propTypes.number,
	fifthDigit: propTypes.number,
	fourthDigit: propTypes.number,
	thirdDigit: propTypes.number,
	secondDigit: propTypes.number,
	firstDigit: propTypes.number,
};

export default SimpleCounter;