import React from "react"
import reactDOM from "react-dom/client"

const toDO=<ul>
    <li key="1">Investment Learning</li>
    <li key="2">clean bike</li> 
    <li key="3">workout</li>
</ul>


//here the above jsx is converted(transpiled) into actual js by babel so that browser can understand.All these are done behind the scene very fast by babel, even before going to "root.render()" 

const root=reactDOM.createRoot(document.getElementById("root"))
root.render(toDO)