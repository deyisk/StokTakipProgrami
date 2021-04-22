import React from "react";
import "./Refresh.css";

function Refresh() {
  function refreshPage() {
    window.location.reload();
  }

  return <button onClick={refreshPage} className="fa fa-refresh"></button>;
}

export default Refresh;
