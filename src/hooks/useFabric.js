import { useCallback, useRef } from "react";
import * as fabric from "fabric";

const useFabric = () => {
  const canvas = useRef(null);
  const fabricRef = useCallback((element) => {
    if (!element) return canvas.current?.dispose();
    canvas.current = new fabric.Canvas(element, { backgroundColor: "#fff" });
  }, []);
  return { fabricRef, canvas };
};

export default useFabric;
