import React, { useState } from 'react'
import Dishes from './Dishes'

const Restaurantdish = ({data,showItems,setshowIndex}) => {


const showHandler = () => {
    setshowIndex()
}

console.log(data)
const {itemCards} = data.card.card
console.log(itemCards)
  return (
        <div className='rounded-lg px-5 mb-5 shadow-md p-4'>
             <div onClick={showHandler} className='flex items-center justify-between cursor-pointer'>
                 <h1 className='text-xl font-bold'>{data.card.card.title} <span>({data.card.card.itemCards.length})</span></h1>
                 <h1>⬇️</h1>
            </div>
           { showItems && itemCards.map((item) => (
            <Dishes data={item}/>
           ))}
        </div>
  )
}

export default Restaurantdish