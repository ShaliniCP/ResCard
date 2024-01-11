import { useEffect, useState } from "react";
import Card from "./Card"
import Shimmer from "./Shimmer";
const Body=()=>{
  const [resList,setresList]=useState([])
  const [filterlist,setfilterlist]=useState([])
  const [sort,setSort]=useState('')

  useEffect(()=>{
    fetchdetails()
  },[])

  const fetchdetails=async ()=>{

    const data=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.3378762&lng=77.117325&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    const jdata=await data.json()
    console.log(jdata)
    setresList(jdata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    console.log(resList)
    setfilterlist(jdata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
 
    return(resList.length===0)?(<Shimmer/>):(
        <div className="body">
          <div className="fpart">
            <button onClick={()=>{
              setresList(resList.filter(res=>res.info.avgRating>4))
            }}className="search">
                Search
            </button>
            <input type='text' onChange={(e)=>{
                setSort(e.target.value)
                console.log(sort)
            }}value={sort}></input>
            <button onClick={()=>{
              setfilterlist(resList.filter(res=>res.info.name.toLowerCase().includes(sort.toLowerCase())))

            }}>
              Sort
            </button>
            </div>
            <div className="container">
              {
                filterlist.map((restaurant)=>(
                  <Card key={restaurant.info.id}resData={restaurant}/>
                ))
              }
               
            </div>
        </div>
    )
    }

export default Body