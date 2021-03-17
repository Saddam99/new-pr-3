import React from "react";

export default function One(props) {

    const isDay = props.hours < 18;

    return(isDay ? "сейчас день": "сейчас вечер")

    
}