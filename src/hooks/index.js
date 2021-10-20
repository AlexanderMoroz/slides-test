import { useContext } from "react";
import { scroll } from '../context/scroll';

export const useScroll = () => useContext(scroll);
