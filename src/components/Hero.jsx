import React, { useEffect, useState } from 'react'
import Cards, {withcards} from './Cards'
import { Link } from 'react-router-dom'
import {RES_API} from '../../utils/constants'
import useOnlineStatus from '../../utils/useOnlineStatus'

const Hero = () => {
   const [restaurents,setrestaurents] = useState([])
   const [search, setsearch] = useState("")
   const [filter, setfilter] = useState([])

   const CardComponent = withcards(Cards)

       
   const fetchData = async () => {
            try{
        const data = await fetch(RES_API)
        console.log(data)
        const json = await data.json()
        const restaurents = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        
        console.log(restaurents)
        setrestaurents(restaurents)
        setfilter(restaurents)
        
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
console.log("22324") //gjhgbjjhbhghjkkjjgjggurojihit pokhriyal          

   useEffect(() => {
         fetchData()
         console.log("useEffect rendered")
   },[])
  

   const searchHandler = () => {
    console.log(search)
     const filterabc =  restaurents.filter((item) => (
              item.info.name.toLowerCase().includes(search.toLowerCase())
        ))
        setfilter(filterabc)
     }

     const online = useOnlineStatus()

     if(online === false) {
        return (
            <h1>Looks like you are offline</h1>
        )
     }
  
  return filter.length > 0 ? (
    <>
    <div className='w-[80%] mx-auto h-full mt-20 flex flex-wrap gap-4'>
        <div className='w-full h-12 mx-auto  mb-10 flex justify-center items-center '>
        <input onChange={(e) => {setsearch(e.target.value)}} className='w-[40%] h-full shadow-md rounded-full outline-none px-10 text-black' type="text" value={search}/>
        <button onClick={searchHandler} className='ml-6 px-4 py-2 bg-blue-600 text-white rounded-md'>search</button>
    </div>
        {
            filter.map((restaurent) => (
             <Link to={`/restaurent/${restaurent.info.id}`} key={restaurent.info.id}> 
             { 
                   restaurent.info.isNewlyOnboarded ? <CardComponent data={restaurent} /> : <Cards data={restaurent}/>
                  
                  } 
                  </Link>
             ))
        }
    
    </div>
    </>
  ) : (<h1>Loading....</h1>)
  
}

export default Hero