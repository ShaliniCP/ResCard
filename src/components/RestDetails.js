import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestDetails=()=>{
    const [resInfo,setResInfo]=useState(null)
    useEffect(()=>{
        fetchdetails()
    },[])
const {resId}=useParams()
console.log(resId)
    const fetchdetails=async ()=>{
        const data=await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.3378762&lng=77.117325&restaurantId='+resId);

        const json=await data.json();
       setResInfo(json.data)
        
    }
    
if(resInfo===null) return <Shimmer/>
    const {name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
   const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

   console.log(resInfo)
   console.log(itemCards)
   return (
        <div>
            <h1>{name}</h1>
            <h3>{cuisines} : {costForTwoMessage}</h3>
            
            <ul>
            {
                itemCards.map((item)=><li key={item.card.info.id}>
                    {item.card.info.name} : {item.card.info.price/100} Rs</li>)
            }
                
            </ul>
        </div>
    )

}

export default RestDetails;