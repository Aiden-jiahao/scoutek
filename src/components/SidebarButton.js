import React, {useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import ButtonMenu from './ButtonMenu';


function SidebarButton() {
    const [isOpen, setIsOpen]=useState(false)
  return (
<>
{/* conditional render, ie, if is not open, show not open. if is open, show sidebar*/}
    {!isOpen ? 
        (
            <button onClick={()=>setIsOpen(!isOpen)}>
                <MenuIcon/>
            </button>
        ) :

        (
            <div className=' fixed bg-stone-300 w-[25vw] h-full p-10'>
                <button className='text-l ' onClick={()=>setIsOpen(!isOpen)}>x</button>
                 <ButtonMenu/>
            </div>
        )    
    }
</>
  )
}
export default SidebarButton