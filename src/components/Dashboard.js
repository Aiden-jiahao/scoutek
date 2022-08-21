import React from 'react';
import DashboardCards from './DashboardCards';
import DashboardTable from './DashboardTable';

function Dashboard() {
  return (
    <div className=' w-full sm:w-5/6'>
        <DashboardCards/>
        <DashboardTable/>
    </div>
  )
}

export default Dashboard