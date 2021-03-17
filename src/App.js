import React from "react";
import One from "./One";
import Three from "./Three";
import ParentBlock from "./ParentBlock";

function App() {
    return(
        <>
          <One hours="20" />
          <Three />
          <ParentBlock />
        </>
    )
}

export default App;

// задание 2
// потому что props будет всегда true поэтому выведет "первый день"