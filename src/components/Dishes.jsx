import React from 'react'

const Dishes = ({data}) => {
    console.log(data)
    const {name,price,ratings,description,imageId} = data.card.info

  return (
        <>
        
            <div className=' h-[30vh] w-full flex justify-between  items-center mt-4'>
            <div className='w-[60%]'>
                <h1>{name}</h1>
                <h2>{price/100}</h2>
                <h3>{ratings.aggregatedRating.rating}</h3>
                <p className='w-[80%]'>{description}</p>
            </div>
            <div className='w-[25%]'>
            <div className='relative h-[18vh] w-[13vw]'>
                {imageId && <img className='w-full h-full object-cover rounded-2xl' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`} alt="" />}
                   <label className={` absolute ${imageId ? "top-[80%] left-12" : "top-[30%] left-12"}  px-6 text-xl shadow-xl py-2  rounded-lg font-bold text-green-500 bg-white`} htmlFor="">ADD</label>
            </div>
            </div>
            </div>
        </>
  )
}

export default Dishes