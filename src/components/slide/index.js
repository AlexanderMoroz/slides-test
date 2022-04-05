import React, { useEffect, useRef, useState } from 'react';
import { Box } from "theme-ui";
import { useInView } from "react-intersection-observer";
import animated from "../animated";
import { calculateVerticalPercentage } from "../../utils";
import throttle from 'lodash.throttle';

const Slide = ({
	height = 100,
	multiplier = 2,
	children = () => null,
	threshold = 0,
	sx = {},
	offset = 0,
	...rest
}) => {
	const { ref, inView, entry } = useInView({ threshold });
	const [isUpper, setIsUpper] = useState(false);
	const [percentage, setPercentage] = useState(0);
	const localRef = useRef(null);

	useEffect(() => {
		if (entry && !entry.isIntersecting) {
			setIsUpper(entry.boundingClientRect.y > 0);
		}
	}, [setIsUpper, entry]);

	useEffect(() => {
		if (inView) {
			const scrollListener = throttle(() => {
				setPercentage(
					Math.floor(calculateVerticalPercentage(localRef.current) * 100) / 100
				);
			}, 100);
			window.addEventListener('scroll', scrollListener)
			return () => window.removeEventListener('scroll', scrollListener)
		}
	}, [inView, localRef]);

	return (
		<div ref={localRef}>
			<Box
				ref={ref}
				sx={{
					position: 'relative',
					height: `${100 * multiplier}vh`,
					width: '100%',
					marginBottom: `${100}vh`,
				}}
			>
				<animated.flex
					{...rest}
					sx={{
						position: 'fixed',
						height: `${height}vh`,
						left: 0,
						top: 0,
						width: '100%',
						alignItems: 'center',
						justifyContent: 'center',
						...sx,
					}}
					animate={{
						y: inView ? 0 : (isUpper ? `${height - offset}vh` :  `-${height}vh`),
					}}
					initial={{
						y: inView ? 0 : (isUpper ? `${height - offset}vh` :  `-${height}vh`),
					}}
					transition={{
						duration: 0.6
					}}
				>
					{children({ percentage })}
				</animated.flex>
			</Box>
		</div>
	)
};

export default Slide;
