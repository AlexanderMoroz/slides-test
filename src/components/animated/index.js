import { motion as framerMotion } from 'framer-motion';
import * as uiComponents from "theme-ui";
import { lowerCaseFirstLetter } from "../../utils";

const animatedComponents = [
	"Alert", "AspectImage", "AspectRatio", "Avatar", "Badge", "Box", "Button", "Card",
	"Checkbox", "Close", "Container", "Divider", "Donut", "Embed", "Field", "Flex", "Grid", "Heading", "IconButton", "Image",
	"Input", "Label", "Link", "MenuButton", "Message", "NavLink", "Paragraph", "Progress", "Radio", "Select", "Slider",
	"Spinner", "Switch", "Text", "Textarea",
];

const animated = Object.keys(uiComponents).reduce(
	(acc, key) => animatedComponents.includes(key) ?
		({ ...acc, [lowerCaseFirstLetter(key)]: framerMotion(uiComponents[key]) }) :
		acc,
	{});

export default animated;
