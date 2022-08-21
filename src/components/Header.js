import React from 'react'
import SidebarButton from './SidebarButton';


import { Link } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CalculateIcon from '@mui/icons-material/Calculate';
import CropFreeIcon from '@mui/icons-material/CropFree';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FaceIcon from '@mui/icons-material/Face';


function Header() { 
   return (

  <div className='flex h-10'>
    {/* Header Left Section: Smart text, Search Bar, and a search Icon */}
   <div className='space-x-3 flex w-1/6'>
    <h1 className='text-l font-semibold bg-sky-500 w-full text-white hover:bg-sky-700'>Smart</h1>
    </div>

    {/* Header Middle Section*/} 
      <div className='space-x-3 top-0 p-2'>
          <SidebarButton/>
          <input placeholder='Search' type="text" className='text-sm outline-none'/>
          
          <div className='sm:absolute sm:left-80 sm:top-2 hidden  '>
            <SearchOutlinedIcon/>
          </div>
      </div>
  
    {/* Header Right Section*/}
      <div className='space-x-5 absolute top-0 sm:right-8 p-1  right-1 '>
          <CropFreeIcon/>
          <Link to='/Calculator'>
          <CalculateIcon/>
          </Link>

          <NotificationsNoneIcon/>
          <MailOutlineIcon/>
          <FaceIcon/>
      </div>
    </div>
     )
  }
  export default Header