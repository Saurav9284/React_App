import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import Filter from './Filter';
import Search from './Search';
import Sort from './Sort';

function Product() {

  const [data , setData] = useState([]);
  const [loading , setLoading] = useState(null);
  const [current , setCurrent] = useState(1);
  const [limit , setLimit] = useState(4);
  const [total , setTotal] = useState(8);
  const [filter , setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [sort , setSort] = useState("");

  const getUrl = (url,current,limit,filter,search,sort) => {
    if(current){
      url = url + `?_page=${current}&_limit=${limit}`
    } 
    if(filter){
      url = url + (current ? `&catogery=${filter}` : `?catogery=${filter}`)
    }
    if(search){
      url = url + (current ? `&q=${search}` : `?q=${search}`)
    }
    if(sort){
      url = url + (current ? `&_sort=price&_order=${sort}` : `?_sort=price&_order=${sort}`)
    }
    return url;
  }

  const getdata = async (current, filter,search,sort) => {
    try{
       setLoading(true);
       const url = `https://cwproject-unit5.onrender.com/products`
       let Apiurl = getUrl(url,current,limit,filter,search,sort);
       console.log(Apiurl);
       const res = await fetch(Apiurl);
       setLoading(false);
       const data = await res.json();
       setData(data);
       console.log(data);
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    getdata(current,filter,search,sort);
  },[current,filter,search,sort]);

  const handlepage = (key) =>{
      setCurrent(key);
  }

  const arr = [];
  for(let i=1; i<=total; i++){
    arr.push(i);
  }

  return (
    <div style={{textAlign:"center"}}>
      <h1>This is Landing Page</h1>
      {loading && <h1>Loading please wait.....</h1>}
      <div>
        <Filter onChange={setFilter}/>
      </div>
      <div>
        <Search onChange={setSearch}/>
      </div>
      <div>
        <Sort onChange={setSort}/>
      </div>
      <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)", gridGap:"20px", margin:"20px"}}>
      {data?.map((item)=>{
        return <ProductCard key={item.id} {...item}/>
      })}
      </div>
      <Pagination onChange={handlepage} current={current} arr={arr}/>
    </div>
  )
}

export default Product