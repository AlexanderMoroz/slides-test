import React from "react";
import ScrollProvider from "./src/context/scroll";

export const wrapRootElement = ({ element }) => {
	return (
		<ScrollProvider>
			{element}
		</ScrollProvider>
	)
}
