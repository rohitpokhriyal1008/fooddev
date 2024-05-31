import React from 'react'

const Cards = ({data}) => {

    const {cloudinaryImageId,name,cuisines,avgRating,areaName } = data.info

  return  (
    <div  className='w-[17vw] h-[40vh] mb-6'>
                <img className='w-full h-[50%] rounded-2xl object-cover' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="" />
                <div className='px-4 mt-4 w-full'>
                <h1 className='text-zinc-500'>{name}</h1>

                <h1 className='break-words'>{cuisines.join(",")}</h1>
                <h1>{avgRating}</h1>
                <h1 className='text-zinc-500'>{areaName}</h1>
                </div>
             </div>
  )
}

 export const withcards = (Cards) => {
    return ({data}) => {
      return (
        <>
        <label className='absolute px-4 py-2 bg-black rounded-md text-white'>Onboard</label>
        <Cards data={data}/>
        </>
      )
    }
  }

//isNewlyOnboarded

export default Cards