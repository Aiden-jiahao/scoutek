import React from 'react'

import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import AddIcon from '@mui/icons-material/Add';
import AccessibilityIcon from '@mui/icons-material/Accessibility';

function ButtonMenu() {
    return (
        <div className='space-y-3'>
            <div className='flex space-x-2'>
                <AddIcon/>
                <h2 className=' text-xl text-left text-black  hover:text-blue-500'>Add data </h2>
            </div> 

            <div className='flex space-x-2'>
                <ReportOutlinedIcon/>
                <h2 className=' text-xl text-left text-black  hover:text-blue-500'>Help center</h2>
            </div>

            <div className='flex space-x-2'>
                <AccessibilityIcon/>
                <h2 className=' text-xl text-left text-black  hover:text-blue-500'>Accessibility</h2>
            </div>
        </div>
        )
    }
export default ButtonMenu