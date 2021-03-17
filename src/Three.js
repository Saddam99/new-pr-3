import React from "react";
import "./index.css";

function Three() {
    const dark = false;

    return(
      dark ?  <div className="dark" /> : <div className="light" />


    );
}

export default Three;