import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = () => {
  const [element, view] = useInView({ threshold: 0.4 });

  const control = useAnimation();
  if (view) {
    control.start("show");
  } else {
    control.start("hidden");
  }
  return [element, control];
};
