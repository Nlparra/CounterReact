import React from "react";
import propTypes from "prop-types";

export function Counter(props) {
	return (
		<div className="container">
			<div className="calendar">
				<i className="far fa-clock" />
			</div>
			<div className="four"> {props.numberFour} </div>
			<div className="three"> {props.numberThree} </div>
			<div className="two"> {props.numberTwo} </div>
			<div className="one"> {props.numberOne} </div>
		</div>
	);
}

let counter = 0;

setInterval(function() {
	let four = Math.floor((counter / 1000) % 10);
	let three = Math.floor((counter / 100) % 10);
	let two = Math.floor((counter / 10) % 10);
	let one = Math.floor((counter / 1) % 10);
	console.log(four, three, two, one);
	counter++;
}, 1000);

Counter.propTypes = {
	numberFour: propTypes.number,
	numberThree: propTypes.number,
	numberTwo: propTypes.number,
	numberOne: propTypes.number
};
