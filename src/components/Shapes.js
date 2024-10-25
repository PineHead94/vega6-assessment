import { useState } from "react";
import { ColorPicker } from "./ColorPicker";

function Shapes({
  text,
  setText,
  add,
  addPolygon,
  addRect,
  addTriangle,
  addSquare,
  setColor,
  color,
}) {
  const [selected, setSelected] = useState("triangle");
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);
  const [e, setE] = useState(0);
  const [f, setF] = useState(0);
  const [g, setG] = useState(0);
  const [h, setH] = useState(0);
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [k, setK] = useState(0);
  const [l, setL] = useState(0);

  function createShape() {
    if (selected === "triangle") {
      addTriangle();
    }
    if (selected === "rectangle") {
      addRect();
    }
    if (selected === "square") {
      addSquare();
    }
    if (selected === "custom") {
      addPolygon(a, b, c, d, e, f, g, h, i, j, k, l);
    }
  }
  return (
    <div className="editor-input-text-container">
      <div>
        <input
          className="editor-input editor-input-text"
          type="text"
          onChange={(e) => setText(e.target.value)}
        />
        <button className="editor-button" onClick={() => add(text)}>
          Add Text
        </button>
      </div>
      <div className="editor-select-container">
        <select
          onChange={(e) => setSelected(e.target.value)}
          className="editor-input editor-selector"
          name="shapes"
          id="shapes"
          value={selected}
        >
          <option value="triangle">Triangle</option>
          <option value="square">Square</option>
          <option value="rectangle">Rectagle</option>
          <option value="custom">Custom</option>
        </select>
        <button className="editor-button" onClick={() => createShape()}>
          Add Shape
        </button>
      </div>
      <div
        className={`coordinate-main-container ${
          selected === "custom" ? "coordinate-main-container-active" : ""
        }`}
      >
        <p className="coordinate-container-header">Enter Co-ordinates :-</p>
        <div className="coordinate-wrapper">
          <div className="coordinate-sub-container">
            <div className="editor-button coordinate-name-container">
              <p className="coordinate-name">X</p>
            </div>
            <input
              className="editor-input editor-input-text coordinate-input"
              type="number"
              min={0}
              value={a}
              onChange={(e) => setA(e.target.value)}
            />
          </div>
          <div className="coordinate-sub-container">
            <div className="editor-button coordinate-name-container">
              <p className="coordinate-name">Y</p>
            </div>
            <input
              className="editor-input editor-input-text coordinate-input"
              type="number"
              min={0}
              value={b}
              onChange={(e) => setB(e.target.value)}
            />
          </div>
        </div>
        <div className="coordinate-wrapper">
          <div className="coordinate-sub-container">
            <div className="editor-button coordinate-name-container">
              <p className="coordinate-name">X</p>
            </div>
            <input
              className="editor-input editor-input-text coordinate-input"
              type="number"
              min={0}
              value={c}
              onChange={(e) => setC(e.target.value)}
            />
          </div>
          <div className="coordinate-sub-container">
            <div className="editor-button coordinate-name-container">
              <p className="coordinate-name">Y</p>
            </div>
            <input
              className="editor-input editor-input-text coordinate-input"
              type="number"
              min={0}
              value={d}
              onChange={(e) => setD(e.target.value)}
            />
          </div>
        </div>
        <div className="coordinate-wrapper">
          <div className="coordinate-sub-container">
            <div className="editor-button coordinate-name-container">
              <p className="coordinate-name">X</p>
            </div>
            <input
              className="editor-input editor-input-text coordinate-input"
              type="number"
              min={0}
              value={e}
              onChange={(e) => setE(e.target.value)}
            />
          </div>
          <div className="coordinate-sub-container">
            <div className="editor-button coordinate-name-container">
              <p className="coordinate-name">Y</p>
            </div>
            <input
              className="editor-input editor-input-text coordinate-input"
              type="number"
              min={0}
              value={f}
              onChange={(e) => setF(e.target.value)}
            />
          </div>
        </div>
        <div className="coordinate-wrapper">
          <div className="coordinate-sub-container">
            <div className="editor-button coordinate-name-container">
              <p className="coordinate-name">X</p>
            </div>
            <input
              className="editor-input editor-input-text coordinate-input"
              type="number"
              min={0}
              value={g}
              onChange={(e) => setG(e.target.value)}
            />
          </div>
          <div className="coordinate-sub-container">
            <div className="editor-button coordinate-name-container">
              <p className="coordinate-name">Y</p>
            </div>
            <input
              className="editor-input editor-input-text coordinate-input"
              type="number"
              min={0}
              value={h}
              onChange={(e) => setH(e.target.value)}
            />
          </div>
        </div>
        <div className="coordinate-wrapper">
          <div className="coordinate-sub-container">
            <div className="editor-button coordinate-name-container">
              <p className="coordinate-name">X</p>
            </div>
            <input
              className="editor-input editor-input-text coordinate-input"
              type="number"
              min={0}
              value={i}
              onChange={(e) => setI(e.target.value)}
            />
          </div>
          <div className="coordinate-sub-container">
            <div className="editor-button coordinate-name-container">
              <p className="coordinate-name">Y</p>
            </div>
            <input
              className="editor-input editor-input-text coordinate-input"
              type="number"
              min={0}
              value={j}
              onChange={(e) => setJ(e.target.value)}
            />
          </div>
        </div>
        <div className="coordinate-wrapper">
          <div className="coordinate-sub-container">
            <div className="editor-button coordinate-name-container">
              <p className="coordinate-name">X</p>
            </div>
            <input
              className="editor-input editor-input-text coordinate-input"
              type="number"
              min={0}
              value={k}
              onChange={(e) => setK(e.target.value)}
            />
          </div>
          <div className="coordinate-sub-container">
            <div className="editor-button coordinate-name-container">
              <p className="coordinate-name">Y</p>
            </div>
            <input
              className="editor-input editor-input-text coordinate-input"
              type="number"
              min={0}
              value={l}
              onChange={(e) => setL(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="shapes-color-picker-main-container">
        <ColorPicker setColor={setColor} color={color} />
      </div>
      <button
        className="shapes-component-button-component"
        // onClick={() => download()}
      >
        DOWNLOAD
      </button>
    </div>
  );
}

export { Shapes };
