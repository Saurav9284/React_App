import React from 'react'

function Pagination({arr,current,onChange}) {
  return (
    <div>
      {arr?.map((page)=>{
        return <button key={page} onClick={()=>onChange(page)} disabled={page===current}>{page}</button>
      })}
    </div>
  )
}

export default Pagination