import { motion as framerMotion } from 'framer-motion';
import { Box, Flex, } from "theme-ui";

const box = framerMotion(Box);
const flex = framerMotion(Flex);

const animated = { box, flex };

export default animated;
