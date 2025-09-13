/*

<div id="parent">
    <div id="child_1">
        <ul id="u_list">
            <li>react</li>
            <li>AAO</li>
            <li>NODE</li>
        </ul>
    </div>

    <div id="child_2">
        <ol id="o_list">
            <li>Mobile</li>
            <li>Watch</li>
            <li>Shoe</li>
        </ol>
    </div>
</div>

*/


const parent=React.createElement("div",{id:"Parent"},[
    React.createElement("div",{id:"child_1"},
        React.createElement("ul",{id:"u_list"},[
            React.createElement("li",{},"React"),
            React.createElement("li",{},"AAO"),
            React.createElement("li",{},"Node")
        ])
    ),
     React.createElement("div",{id:"child_2"},
        React.createElement("ol",{id:"o_list"},[
            React.createElement("li",{},"Mobile"),
            React.createElement("li",{},"Watch"),
            React.createElement("li",{},"Shoe")
        ])
    )
])

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)