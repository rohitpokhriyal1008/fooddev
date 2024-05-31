import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import useOnlineStatus from '../../utils/useOnlineStatus'

const Navbar = () => {
 const navigate =  useNavigate()

  const Gobackhandler = () => {
   // window.history.back()
    navigate("/")
  }

  const status = useOnlineStatus()
  return (
    <>
    <div className='w-full h-20 shadow-lg flex justify-center items-center '>
       <div className='w-[80%] flex items-center gap-20'>
        <div className=' w-[30%] flex items-center py-1 mt-2 gap-4'>
        <li className='list-none'>online status : {status ? "✅" : "🔴"} </li>

            <img className='h-16  ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIMhQZ3YpaYOinNFPBeej97sfcA8W7m6ex1A&usqp=CAU" alt="" />
            <p onClick={Gobackhandler} className='font-bold border-b-2 border-black cursor-pointer'> Home</p>
        </div>
        <div className='w-[70%]'>
          <nav className='flex gap-24 text-lg'>
            <Link>Swiggy corporate</Link>
           <Link to="/Contact">Contact</Link>
            <Link to="/About">About</Link>
            <Link to="/Grocery">Grocery</Link>
            <Link>cart</Link>
          </nav>
        </div>
       </div>
    </div>
    <hr/>
    <Outlet/>
    </>
  )
}

export default Navbar