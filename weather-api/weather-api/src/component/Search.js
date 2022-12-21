import React, { useState } from 'react'
import axios from 'axios'

export default function Search() {






  return (
    <div className="Navbar">
        <div className="Input-button-container">
          <div className="location-input">
            <input  type="text"   placeholder="Type a City Name" />
          </div>
          <div>
            <button  type="submit">Find Weather</button>
          </div>
        </div>
      </div>
  )
}

