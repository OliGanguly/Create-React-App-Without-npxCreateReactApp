import React from 'react';
import  ReactDOM  from 'react-dom/client';
        const heading1 = React.createElement("h1",{
            id:"heading1"
        },"Helloworld1")
        const heading2 = React.createElement("h1",{},"Helloworld2")
        const container = React.createElement("div",{},[heading1,heading2])
        const root = ReactDOM.createRoot(document.getElementById("root"))
        root.render(container)
 