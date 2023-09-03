import React from 'react'

import Images from "./components/Images.js";

import html from "./content/html.png";
import css from "./content/css.png";
import js from "./content/js.png";
import react from "./content/react.png";
import node from "./content/node.png";
import python from "./content/python.png";

import "./App.css";

export default function App() {
  return (
    <div className="container">

      <Images 
        one={html} 
        two={css} 
        three={js} 
      />
      <Images one={react} two={node} three={python} />

    </div>
  )
}
