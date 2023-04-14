/* import React, { useState } from "react";
import "./tip.css";

function Tip({ onTipSelected }) {
  const [customTip, setCustomTip] = useState("");

  const handleTipClick = (percentage) => {
    onTipSelected(percentage);
  };

  const handleCustomTipChange = (e) => {
    setCustomTip(e.target.value);
    onTipSelected(parseFloat(e.target.value));
  };

  return (
    <div className="tip-buttons">
      <button onClick={() => handleTipClick(10)}>10%</button>
      <button onClick={() => handleTipClick(15)}>15%</button>
      <input type="number" min="0" step="0.01" placeholder="Custom" value={customTip} onChange={handleCustomTipChange} />
      <span>EUR</span>
    </div>
  );
}

export default Tip;  */
/*
imp; /* ort React, { useState } from "react";
import "./tip.css";

export default function TipButtonGroup(props) {
  const [customTip, setCustomTip] = useState("");

  const handleTipClick = (percent) => {
    props.onTipChange(percent);
    setCustomTip("");
  };

  const handleCustomTipChange = (event) => {
    const tip = event.target.value;
    setCustomTip(tip);
    props.onTipChange(parseFloat(tip));
  };

  return (
    <div className="tip-button-group">
      <button onClick={() => handleTipClick(0.1)}>10%</button>
      <button onClick={() => handleTipClick(0.15)}>15%</button>
      <div className="custom-tip-container">
        <input type="text" placeholder="Custom" value={customTip} onChange={handleCustomTipChange} />
        <span>{props.currency}</span>
      </div>
    </div>
  );
}
 */

import React, { useState } from "react";
import "./tip.css";

export default function TipButtonGroup(props) {
  const [customTip, setCustomTip] = useState("");

  const handleTipClick = (percent) => {
    props.onTipChange({ type: "percentage", value: percent });
    setCustomTip("");
  };

  const handleCustomTipChange = (event) => {
    const tip = event.target.value;
    setCustomTip(tip);
    props.onTipChange({ type: "fixed", value: parseFloat(tip) });
  };

  return (
    <div className="tip-button-group">
      <button onClick={() => handleTipClick(0.1)}>10%</button>
      <button onClick={() => handleTipClick(0.15)}>15%</button>
      <div className="custom-tip-container">
        <input type="text" placeholder="Custom" value={customTip} onChange={handleCustomTipChange} />
        <span>{props.currency}</span>
      </div>
    </div>
  );
}
