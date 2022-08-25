import React from "react";
import ReactDOM from "react-dom/client";
const fruits = [
    "apple",
    "banana",
    "orange",
    "apricot",
    "black rowan",
    "cranberry"
]
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div >
        <h1 >List of fruits</h1>
        <ul >
            {fruits.map(item => (
                <li>{item}</li>
            ))}

        </ul>
    </div>
)