import React from 'react'
import styles from "./ProductCard.module.css"

function ProductCard({img2,name,price,catogery,star_rating,type}) {
  return (
    <div className={styles.border}>
      <img src={img2} width={200}/>
      <h3>Name: {name}</h3>
      <h3>Price: {price}</h3>
      <h3>Category : {catogery}</h3>
      <h3>Rating : {star_rating}</h3>
      <h3>Type : {type}</h3>
    </div>
  )
}

export default ProductCard