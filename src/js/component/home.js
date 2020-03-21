import React from "react";
import { Counter } from "./Counter";

export function Home() {
	return (
		<Counter
			numberOne={one}
			numberTwo={two}
			numberThree={three}
			numberFour={four}
		/>
	);
}
