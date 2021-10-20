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
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 200" ref={svgRef}>
					<path ref={track} id="curve" d="M -40,180.32884 C 59.868756,78.85387 99.789596,30.283895 138.66049,30.104515 c 80.46172,-0.37133 90.87185,137.794285 140.7729,129.699295 40.35037,-6.54568 49.90105,-80.94994 86.53937,-78.86548 33.24073,1.89117 22.2547,70.77048 73.14399,70.77048 39.92084,0 58.65264,-56.66496 99.80211,-56.66496 49.90105,0 69.86147,80.94995 160.8021,48.56997" style={{ fill: 'none', stroke: '#000', strokeWidth: 1 }}/>
				</svg>
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
