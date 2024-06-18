import { useEffect } from "react";
import { useLenisScroll } from "../contexts/ScrollProvider";
import { useSmoothScroll } from "./useSmoothScroll";

export default function useScroll() {
  const {scroll, setScroll} = useLenisScroll();
  const lenis = useSmoothScroll();

  useEffect(() => {
    if (!scroll) setScroll(lenis);
  }, [lenis, setScroll, scroll])

  useEffect(() => {
    if (scroll) scroll.start();
  }, [scroll])
  
  return scroll
}
