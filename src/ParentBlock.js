import React from "react";

function ParentBlock() {
    const number = 60;
    return(
        number < 50 ? <Small /> : <Large />
    )
    
}

function Small() {
    return (
        <div>small</div>
    )
}

const Large = () => <div>large</div>

export default ParentBlock;