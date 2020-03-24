import React, { useState, useEffect, useRef } from "react";
import propTypes from "prop-types";

export function Counter() {
	const [count, setCount] = useState(0);

	useInterval(() => {
		setCount(count + 1);
	}, 1000);

	return (
		<div className="container">
			<div className="calendar">
				<i className="far fa-clock" />
			</div>
			<div className="four"> {Math.floor(count / 100) % 10}</div>
			<div className="three">{Math.floor(count / 100) % 10}</div>
			<div className="two">{Math.floor(count / 10) % 10}</div>
			<div className="one">{Math.floor(count / 1) % 10} </div>
		</div>
	);
}

function useInterval(callback, delay) {
	const savedCallback = useRef();
	useEffect(
		() => {
			savedCallback.current = callback;
		},
		[callback]
	);
	useEffect(
		() => {
			function tick() {
				savedCallback.current();
			}
			if (delay !== null) {
				let id = setInterval(tick, delay);
				return () => clearInterval(id);
			}
		},
		[delay]
	);
}
