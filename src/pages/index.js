import * as React from "react";
import { Heading } from 'theme-ui';
import Slide from "../components/slide";
import motion from "../components/motion";

const circleVariants = {
  0: {
    y: '40vh',
    x: '-10vw',
  },
  1: {
    x: '25vw',
    y: '30vh',
  },
  2: {
    x: '50vw',
    y: '50vh',
  },
  3: {
    x: '75vw',
    y: '25vw',
  },
  4: {
    x: '110vw',
    y: '50vw',
  }
}

// markup
const IndexPage = () => {
  return (
    <>
      <Slide backgroundColor="highlight" height={80}>
        {({ percentage }) => <>
          <motion.box
            sx={{
              position: 'absolute',
              left: 0,
              top: 0,
              height: '10vh',
              width: '10vh',
              background: 'white',
              borderRadius: 9999,
            }}
            variants={circleVariants}
            transition={{ duration: 0.5 }}
            animate={Object.keys(circleVariants)[Math.floor(percentage * 4)]}
            initial="0"
          />
          <Heading>
            First slide
          </Heading>
        </>}
      </Slide>
      <Slide backgroundColor="gray" offset={20} percentage>
        {() => (
          <Heading>
            Second slide
          </Heading>
        )}
      </Slide>
      <Slide backgroundColor="secondary">
        {() => (
          <Heading>
            Third slide
          </Heading>
        )}
      </Slide>

    </>
  )
}

export default IndexPage;
