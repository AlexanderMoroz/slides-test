import * as React from "react";
import { Heading } from 'theme-ui';
import Slide from "../components/slide";
import Ball from "../components/ball";

const IndexPage = () => {
  return (
    <>
      <Ball />
      <Slide backgroundColor="highlight" height={80}>
        {() => <>
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
