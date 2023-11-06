import React from 'react'

function Sort({onChange}) {
  return (
    <div>
      <h3>Sort by Price</h3>
      <button onClick={()=>onChange("asc")}>Asc</button>
      <button onClick={()=>onChange("desc")}>Desc</button>
    </div>
  )
}

export default Sort