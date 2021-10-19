import { motion as framerMotion } from 'framer-motion';
import { Box, Flex } from "theme-ui";

const box = framerMotion(Box);
const flex = framerMotion(Flex);

const motion = { box, flex, ...framerMotion };

console.log(framerMotion);

export default motion;
