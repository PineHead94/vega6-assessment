import * as fabric from "fabric";
import { FabricImage } from "fabric";
import useFabric from "../hooks/useFabric";
import { useCallback, useState } from "react";
import { Shapes } from "./Shapes";
import ImagePicker from "./ImagePicker";

function Editor() {
  const { fabricRef, canvas } = useFabric();
  const [text, setText] = useState("");
  const [color, setColor] = useState("#ffd803");

  const add = (text) => {
    const textToBeAdded = new fabric.Text(text, {
      top: 0,
      left: 0,
      textAlign: "center",
      charSpacing: -50,
      pathSide: "left",
      pathStartOffset: 0,
      fontFamily: "Sans-serif",
      stroke: color,
      fill: color,
    });
    canvas.current.add(textToBeAdded);
  };

  const addImage = useCallback((image) => {
    const imgInstance = () =>
      FabricImage.fromURL(image, {
        left: 100,
        top: 100,
        angle: 30,
        opacity: 0.85,
      });
    imgInstance()
      .then((data) => canvas.current.add(data))
      .catch((err) => console.log(err));
  }, []);

  const addPolygon = (a, b, c, d, e, f, g, h, i, j, k, l) => {
    const polygon = new fabric.Polyline(
      [
        { x: a, y: b },
        { x: c, y: d },
        { x: e, y: f },
        { x: g, y: h },
        { x: i, y: j },
        { x: k, y: l },
      ],
      {
        fill: color,
        stroke: color,
        left: 100,
        top: 100,
      }
    );
    canvas.current.add(polygon);
  };

  const addRect = () => {
    const data = new fabric.Rect({
      top: 100,
      left: 100,
      width: 150,
      height: 100,
      fill: color,
    });
    canvas.current.add(data);
  };

  const addTriangle = () => {
    const polygon = new fabric.Polyline(
      [
        { x: 50, y: 0 },
        { x: 0, y: 100 },
        { x: 100, y: 100 },
      ],
      {
        fill: color,
        stroke: color,
        left: 100,
        top: 100,
      }
    );
    canvas.current.add(polygon);
  };

  const addSquare = () => {
    const data = new fabric.Rect({
      top: 100,
      left: 100,
      width: 100,
      height: 100,
      fill: color,
    });
    canvas.current.add(data);
  };

  return (
    <div className="editor-main-container">
      <div className="editor-wrapper">
        <ImagePicker addImage={addImage} />
        <div className="editor-sub-wrapper">
          <canvas
            id="mycanvas"
            className="editor-canvas-main"
            ref={fabricRef}
            width={600}
            height={700}
          />
          <Shapes
            text={text}
            setText={setText}
            add={add}
            addPolygon={addPolygon}
            addRect={addRect}
            addTriangle={addTriangle}
            addSquare={addSquare}
            setColor={setColor}
            color={color}
            // download={download}
          />
        </div>
      </div>
    </div>
  );
}

export default Editor;
