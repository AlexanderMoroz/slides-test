import * as React from "react";
import { Heading } from 'theme-ui';
import Slide from "../components/slide";
import Ball from "../components/ball";

const IndexPage = () => {
  return (
    <>
      <Ball />
      <Slide backgroundColor="highlight" height={80}>
        {({ percentage }) => <>
          <Heading>
            {`First slide: ${(percentage * 100).toFixed(0)}%`}
          </Heading>
        </>}
      </Slide>
      <Slide backgroundColor="gray" offset={20} percentage>
        {({ percentage }) => (
          <Heading>
            {`Second slide: ${(percentage * 100).toFixed(0)}%`}
          </Heading>
        )}
      </Slide>
      <Slide backgroundColor="secondary">
        {({ percentage }) => (
          <Heading>
            {`Third slide: ${(percentage * 100).toFixed(0)}%`}
          </Heading>
        )}
      </Slide>

    </>
  )
}

export default IndexPage;
