import React from 'react'

export default function Images({ one, two, three }) {
  return (

    <div className="images">
        <img alt="one" src={one} />
        <img alt="two" src={two} />
        <img alt="three" src={three} />
    </div>
    )
}
