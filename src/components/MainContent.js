import React from 'react'
import Dashboard from './Dashboard'
import Sidebar from './Sidebar'

function MainContent() {
  return (
    <>
    <div className=' sm:flex'>
        
        <Sidebar/>
        <Dashboard/>
    </div>
        

    </>
  )
}

export default MainContent