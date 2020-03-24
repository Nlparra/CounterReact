import React, { useState, useEffect } from "react";
import propTypes from "prop-types";

export function Counter() {
	const [one, setOne] = useState(0);
	const [two, setTwo] = useState(0);
	const [three, setThree] = useState(0);
	const [four, setFour] = useState(0);

	let counter = 0;

	useEffect(() => {
		setInterval(function() {
			setFour(Math.floor((counter / 1000) % 10));
			setThree(Math.floor(counter / 100) % 100);
			setTwo(Math.floor(counter / 10) % 10);
			setOne(Math.floor(counter / 1) % 1);
			counter++;
		}, 1000);
	});

	return (
		<div className="container">
			<div className="calendar">
				<i className="far fa-clock" />
			</div>
			<div className="four"> {four}</div>
			<div className="three"> {three} </div>
			<div className="two">{two}</div>
			<div className="one"> {one} </div>
		</div>
	);
}
// Counter.propTypes = {
// 	numberFour: propTypes.number,
// 	numberThree: propTypes.number,
// 	numberTwo: propTypes.number,
// 	numberOne: propTypes.number
// };
