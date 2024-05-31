import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useRestaurentmenu from "../../utils/useRestaurentmenu"

const Restaurentmenu = () => {
  const {resid} = useParams()
    
  const menu = useRestaurentmenu(resid)

    if(menu === null) return  <h1>loading...</h1>
    
    const {name,cuisines,areaName}  = menu?.cards[2]?.card.card.info
    console.log(name,cuisines,areaName)
    
    const {itemCards} = menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    console.log(itemCards)

  return  (
    <div className="w-full h-full bg-red-100 ">
        <h1>{name}</h1>
        <h1>{areaName}</h1>
        <h1>{cuisines}</h1>
         {itemCards.map((item) => (
               <li key={item.card.info.id}>{item.card.info.name}</li>
         ))}

    </div>
  )
}

export default Restaurentmenu