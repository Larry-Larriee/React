import React from 'react'
import "./App.css"

import Home from "./content/Home.js"
import About from "./content/About.js"

import { Route, Routes } from "react-router-dom"

// Countdown Timer
export default function App() {

  return(
    <>
      <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About 👋</a></li>
          </ul>
      </nav>

      <main>  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

    </>
  );
}
