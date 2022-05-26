import React from "react";

export default function Display(props){


    return(<div>
        <p>Temperature: {JSON.stringify(props.data) } </p>
        {/* <p>Description: {props.data.name} </p> */}
    </div>)

}