
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Tooltip examples</h1>
      <p>
        <Tooltip text="This is a heading tooltip.">
          <strong>Hover over this text</strong>
        </Tooltip>
      </p>
      <p>
        <Tooltip text="Tooltips can provide extra context.">
          <span>Hover over this description</span>
        </Tooltip>
      </p>
    </div>
  )
}

export default App
