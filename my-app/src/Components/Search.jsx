import React from 'react'

function Search({onChange}) {
  return (
    <div>
      <h3>Serach here</h3>
      <input placeholder="Serach for products" onChange={(e)=>onChange(e.target.value)}></input>
    </div>
  )
}

export default Search