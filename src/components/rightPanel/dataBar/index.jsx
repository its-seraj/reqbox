import { useState } from "react";
import { HeadersData } from "./headersData";
import { ParamsData } from "./paramsData";
import { BodyData } from "./bodyData";
import { ResponseEditor } from "../responseEditor";
import "./index.css";

export const DataBar = () => {
  const [selected, setSelected] = useState("Body");

  const [dividerPosition, setDividerPosition] = useState(300);

  const handleMouseDown = (e) => {
    e.preventDefault();
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (e.clientY < 200) {
      setDividerPosition(0);
    } else {
      setDividerPosition(e.clientY - 140);
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <>
      <div className="data-bar-root">
        <div className={`headers-data ${selected === "Headers" ? "selected" : ""}`} onClick={() => setSelected("Headers")}>
          Headers
        </div>
        <div className={`params-data ${selected === "Params" ? "selected" : ""}`} onClick={() => setSelected("Params")}>
          Query Params
        </div>
        <div className={`body-data ${selected === "Body" ? "selected" : ""}`} onClick={() => setSelected("Body")}>
          Body
        </div>
      </div>
      <div className="resizable-h">
        <div className="data-body-root" style={{ height: `${dividerPosition}px` }}>{selected === "Headers" ? <HeadersData /> : selected === "Params" ? <ParamsData /> : <BodyData />}</div>
        <div className="resizer-h" onMouseDown={handleMouseDown} style={{ width: "5px" }}></div>
        <div className="right-panel"><ResponseEditor /></div>
      </div>
    </>
  );
};
