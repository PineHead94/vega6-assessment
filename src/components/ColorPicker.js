function ColorPicker({ color, setColor }) {
  return (
    <div className="color-picker-main-container">
      <p className="coordinate-container-header">Pick a Fill :-</p>
      <div className="color-picker-sub-container">
        <div
          className={`color-picker-element color-picker-element-1 ${
            color === "#ffd803" ? "color-picker-selected" : ""
          }`}
          onClick={() => setColor("#ffd803")}
        ></div>
        <div
          className={`color-picker-element color-picker-element-2 ${
            color === "#fa5246" ? "color-picker-selected" : ""
          }`}
          onClick={() => setColor("#fa5246")}
        ></div>
        <div
          className={`color-picker-element color-picker-element-3 ${
            color === "#00473e" ? "color-picker-selected" : ""
          }`}
          onClick={() => setColor("#00473e")}
        ></div>
        <div
          className={`color-picker-element color-picker-element-4 ${
            color === "#3da9fc" ? "color-picker-selected" : ""
          }`}
          onClick={() => setColor("#3da9fc")}
        ></div>
        <div
          className={`color-picker-element color-picker-element-5 ${
            color === "#000" ? "color-picker-selected" : ""
          }`}
          onClick={() => setColor("#000")}
        ></div>
      </div>
    </div>
  );
}

export { ColorPicker };
