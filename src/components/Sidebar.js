import React from 'react'

import AirplayOutlinedIcon from '@mui/icons-material/AirplayOutlined';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import NoteOutlinedIcon from '@mui/icons-material/NoteOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import FreeBreakfastOutlinedIcon from '@mui/icons-material/FreeBreakfastOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

function Sidebar() {

  return (
    <>
    <div className='hover:bg-stone-300 p-1 w-full sm:w-1/6 h-full space-y-5'>

        <div className='flex space-x-2 p-5'>
            <AirplayOutlinedIcon/>
            <h2 className=' sm:text-xl text-left text-black  hover:text-blue-500'>Dashboard</h2>
        </div>
        
        <div className='flex space-x-2 p-5 '>
            <EventNoteIcon/>
            <h2 className=' text-xl text-left text-black  hover:text-blue-500'>Management</h2>
        </div>

        <div className='flex space-x-2 p-5'>
            <PermIdentityIcon/>
            <h2 className=' text-xl text-left text-black  hover:text-blue-500'>Professors</h2>
        </div>
        
        <div className='flex space-x-2 p-5 '>
            <PeopleOutlineIcon/>
            <h2 className=' text-xl text-left text-black  hover:text-blue-500'>Students</h2>
        </div>
        
        <div className='flex space-x-2 p-5'>
            <NoteOutlinedIcon/>
            <h2 className=' text-xl text-left text-black  hover:text-blue-500'>Courses</h2>
        </div>
 
        <div className='flex space-x-2 p-5'>
            <LocalLibraryOutlinedIcon/>
            <h2 className=' text-xl text-left text-black  hover:text-blue-500'>Library</h2>
        </div>

        <div className='flex space-x-2 p-5'>
            <WorkOutlineOutlinedIcon/>
            <h2 className=' text-xl text-left text-black  hover:text-blue-500'>Departments</h2>
        </div>

        <div className='flex space-x-2 p-5'>
            <SentimentSatisfiedAltIcon/>
            <h2 className=' text-xl text-left text-black  hover:text-blue-500'>Staff</h2>
        </div>

        <div className='flex space-x-2 hover:bg-stone-300 p-5'>
            <FreeBreakfastOutlinedIcon/>
            <h2 className=' text-xl text-left text-black  hover:text-blue-500'>Holiday</h2>
        </div>

        <div className='flex space-x-2  hover:bg-stone-300 w-20  p-5'>
            <EmailOutlinedIcon/> 
            <h2 className=' text-xl text-left text-black hover:text-blue-500 '>Email</h2>
        </div>
        
    </div>
    </>
  )
}

export default Sidebar