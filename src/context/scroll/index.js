import React, { useState, createContext, useEffect } from 'react';
import { calculateWindowScroll } from "../../utils";
import throttle from 'lodash.throttle';

const initialState = 0;
const throttleTimeout = 0;

export const scroll = createContext(initialState);
const { Provider } = scroll;

const ScrollProvider = ({ children }) => {
	const [scrollState, setScrollState] = useState(initialState);
	useEffect(() => {
		const scrollListener = () => void setScrollState(calculateWindowScroll());
		window.addEventListener('scroll', scrollListener);
		return () => window.removeEventListener('scroll', scrollListener);
	}, []);

	return (
		<Provider value={scrollState}>
			{children}
		</Provider>
	)
};

export default ScrollProvider;
