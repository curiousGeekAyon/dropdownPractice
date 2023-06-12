import React from "react";

function Elements(props) {
    const[index,val]=props;
    return (
        <>
        <ul>
        <div id={index}>
         <input type="checkbox"></input>
          {val}
          <button>delete</button>
          </div>
          </ul>
        </>
   );
    }
    export default Elements;