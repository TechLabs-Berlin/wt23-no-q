import React, { useState } from "react";
import "./tip.css";

export default function TipButtonGroup(props) {
  const [customTip, setCustomTip] = useState("");
  const [activeTip, setActiveTip] = useState(null);

  const handleTipClick = (percent) => {
    if (activeTip === percent) {
      setActiveTip(null);
      props.onTipChange({ type: "percentage", value: 0 });
    } else {
      setActiveTip(percent);
      props.onTipChange({ type: "percentage", value: percent });
    }
    setCustomTip("");
  };

  const handleCustomTipChange = (event) => {
    const tip = event.target.value;
    setActiveTip(null);
    setCustomTip(tip);
    props.onTipChange({ type: "fixed", value: parseFloat(tip) });
  };

  const activeStyle = {
    backgroundColor: "#ff006e",
    color: "white",
  };

  return (
    <div className="tip-button-group">
      <button className="tip-button" style={activeTip === 0.1 ? activeStyle : {}} onClick={() => handleTipClick(0.1)}>
        10%
      </button>
      <button className="tip-button" style={activeTip === 0.15 ? activeStyle : {}} onClick={() => handleTipClick(0.15)}>
        15%
      </button>
      <div className="custom-tip-container">
        <input className="custom-tip-input" type="text" placeholder="Custom" value={customTip} onChange={handleCustomTipChange} />
        <span className="currency">{props.currency}</span>
      </div>
    </div>
  );
}
