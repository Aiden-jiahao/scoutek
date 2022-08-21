import React from 'react';

import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';

function DashboardCards() {
  return (
    <>
    <div className='sm:flex space-x-3 sm:space-y-0 space-y-2'>
    {/* Card 1*/}
    <div className='w-full bg-green-200 flex rounded-xl sm:w-1/4'>
        {/*left section */}
            <div className='w-1/3 h-full '>
                <div className='inline-block align-middle sm:pt-8 '><PeopleAltOutlinedIcon/></div> 
            </div>
        {/*Right section */}
            <div className='w-2/3 h-full text-left'>  
                <p>Total students</p>
                <p>450</p>
                <p>45% increase in 28 Days</p>
            </div>
   </div>


   {/* Card 2*/}
   <div className='w-full bg-amber-200 flex rounded-xl sm:w-1/4'>
        {/*left section */}
            <div className='w-1/3 h-full '>
                <div className='inline-block align-middle sm:pt-8 '><PersonOutlineOutlinedIcon/></div> 
            </div>
        {/*Right section */}
            <div className='w-2/3 h-full text-left'>  
                <p>New students</p>
                <p>155</p>
                <p>40% increase in 28 Days</p>
            </div>
   </div>
   

    {/* Card3 */}
   <div className='w-full bg-cyan-200 flex rounded-xl sm:w-1/4'>
        {/*left section */}
            <div className='w-1/3 h-full '>
                <div className='inline-block align-middle sm:pt-8 '><PhoneAndroidOutlinedIcon/></div> 
            </div>
        {/*Right section */}
            <div className='w-2/3 h-full text-left'>
                <p>Total Course</p>
                <p>450</p>
                <p>45% increase in 28 Days</p>
            </div>

   </div>

    {/* Card4 */}
   <div className='w-full bg-pink-200 flex rounded-xl sm:w-1/4'>
        {/*left section */}
            <div className='w-1/3 h-full '>
                <div className='inline-block align-middle sm:pt-8 '><PaidOutlinedIcon/></div> 
            </div>
        {/*Right section */}
            <div className='w-2/3 h-full text-left'> 
                <p>New Collection</p>
                <p>13,921 $</p>
                <p>50% increase in 28 Days</p>
            </div>

   </div>
</div>
</>
  )
}
export default DashboardCards