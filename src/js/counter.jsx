import React from "react";


export const SecondsCounter=(props)=>{

return <>
<div className="row">
    <div className="col">{props.miles || 0}</div>
    <div className="col">{props.centena || 0}</div>
    <div className="col">{props.decena || 0}</div>
    <div className="col">{props.unidad || 0}</div>
</div>
</>
}