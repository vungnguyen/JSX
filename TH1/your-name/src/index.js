import React from "react";
import ReactDOM from "react-dom/client";
 const name = "Your name";
const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render( React.createElement('h1', {style: {textAlign: 'center'}}, name)
 )