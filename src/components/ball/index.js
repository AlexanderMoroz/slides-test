import animated from "../animated";
import * as React from "react";
import { useScroll } from "../../hooks";
import { Flex } from "theme-ui";
import { useRef } from "react";

function calculateCoordinates ({ current: track }, { current: svg }, scroll) {
	if (track && svg && typeof window !== "undefined") {
		const svgPoint = track.getPointAtLength(scroll / 100 * track.getTotalLength());
		const viewBox = svg.viewBox.baseVal;
		const xRatio = window.innerWidth / viewBox.width;
		const svgRation = viewBox.width / viewBox.height;
		const windowRatio = window.innerWidth / window.innerHeight;
		const yRation = window.innerHeight / viewBox.height;
			// * ((windowRatio) / (svgRation));
		return { x: svgPoint.x * xRatio, y: svgPoint.y * yRation }
	}
	return { x: 0, y: 0 };
}


const Ball = () => {
	const scroll = useScroll();
	const track = useRef(null);
	const svgRef = useRef(null);

	const p = calculateCoordinates(track, svgRef, scroll);

	return (
		<>
			<Flex sx={{
				position: 'fixed',
				zIndex: 15,
				width: '100%',
				height: '100%',
				alignItems: 'center',
				justifyContent: 'center',
				svg: { width: '100%' },
				opacity: 0,
			}}>
				<svg ref={svgRef} xmlns="http://www.w3.org/2000/svg" id="Слой_1" data-name="Слой 1" width="1920" height="1080" viewBox="0 0 1920 1080"><path ref={track} d="M1.69,597.19C83,431,185,274.81,285.27,285.25c185.11,19.29,139.24,583.48,441.79,711.94,234.7,99.66,573.82-107.62,750.75-300C1664.22,494.5,1608.65,375.68,1753.93,230,2032.29-49.06,2755.54-133.35,3087.4,302.1c271.9,356.76,132.25,867.12-107.61,1156.87-322.52,389.59-937.48,514.73-1156.87,306.7-168.54-159.81,5.08-413.14-156-1011.58-76.17-282.9-134.37-499.07-296-559.61-184.1-69-355.4,119.19-968.54,527.32-689.2,458.76-824.94,455.44-893.21,446.61-388.54-50.31-803.57-565.87-710.26-1076.16,47.31-258.72,241.81-606.41,613.41-678,308.13-59.34,614.16,95,774.83,333.61C326.47-45.26,375.83,253.63,262.49,463.52,199.05,581,136.07,575.36,90.31,684.14-15.19,934.88,160.87,1341.77,354,1367.49,600.21,1400.3,978.45,827.1,849,490.43,781.25,314.24,619,318.57,547.67,113.77,470.53-107.8,542.86-450.64,752.14-510.4c165.51-47.26,388.71,90.51,425.08,247.52,33,142.52-111.87,197.38-123.75,419.7-10.72,200.48,96.47,354.81,145.28,425.08,73.15,105.32,210.76,303.45,376.65,274.42,122.24-21.39,210.22-157.45,226-279.8,23.15-179.6-105.41-359.79-242.14-387.42C1349,146.62,1128,466.7,1048.09,700.28c-77.23,225.67-43.2,430.19-16.15,538.08" transform="translate(1214.87 598.96)" fill="#fff" stroke="#1d1d1b" strokeMiterlimit="10"/></svg>
			</Flex>
			<animated.box
				sx={{
					position: 'fixed',
					left: 0,
					top: 0,
					height: '10vh',
					width: '10vh',
					background: 'white',
					borderRadius: 9999,
					zIndex: 10,
					transformOrigin: 'center',
				}}
				transition={{ duration: 0.5, ease: 'easeOut' }}
				animate={{ ...p, opacity: p.x && p.y ? 1 : 0 }}
				initial={{ opacity: 0, }}
			/>
		</>
	)
}

export default Ball;
