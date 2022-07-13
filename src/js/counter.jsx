import React from "react";


export const SecondsCounter=(props)=>{

return <>
<div className="row">
    <div className="col">{props.miles}</div>
    <div className="col">{props.centena}</div>
    <div className="col">{props.decena}</div>
    <div className="col">{props.unidad}</div>
</div>
</>
}