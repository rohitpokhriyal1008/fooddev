import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useRestaurentmenu from "../../utils/useRestaurentmenu"
import Restaurantdish from "./Restaurantdish"

const Restaurentmenu = () => {
  const {resid} = useParams()
    
  const menu = useRestaurentmenu(resid)

  const [showIndex, setshowIndex] = useState(null)

    if(menu === null) return  <h1>loading...</h1>
    
    const {name,cuisines,areaName,avgRating,costForTwoMessage}  = menu?.cards[2]?.card.card.info
    console.log(name,cuisines,areaName,avgRating,costForTwoMessage)
    console.log(menu?.cards[2]?.card.card.info) 
    
    const {itemCards} = menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    console.log(itemCards)

    const categories = menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    console.log(categories)

  return  (
    <div className="w-7/12 mx-auto  shadow-lg mb-10  ">
       <div className="mt-20 px-3" >
       <h1 className="font-bold text-2xl">{name}</h1>
        <div className="h-[25vh] p-4 rounded-3xl bg-emerald-100 mt-6">
          <div className="flex">{avgRating} <h1 className="ml-4">{costForTwoMessage}</h1></div>
        <h1>{areaName}</h1>
        <h1 className="">{cuisines.join(",")}</h1>
        </div>
        <hr className="mt-6" />
       </div>
       <div className="mt-10 px-3">
       {categories.map((item,index) => (
                 <Restaurantdish
                  showItems={index === showIndex ? true : false}
                  setshowIndex={() => setshowIndex(index)}
                   data={item} />
       ))}
       </div>

    </div>
  )
}

export default Restaurentmenu