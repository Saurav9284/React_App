import React from 'react'

function Filter({onChange}) {
  return (
    <div>
      <h3>Filter by Category</h3>
      <button onClick={()=>onChange("face")}>Face</button>
      <button onClick={()=>onChange("lips")}>Lips</button>
      <button onClick={()=>onChange("Tools")}>Tools</button>
      <button onClick={()=>onChange("Eyes")}>Eyes</button>
      <button onClick={()=>onChange("")}>Reset</button>
    </div>
  )
}

export default Filter