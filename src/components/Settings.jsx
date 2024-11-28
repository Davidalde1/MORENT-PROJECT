import React from 'react'
import AddCarForm from './AddCarForm'
import Profile from './Profile'

const Settings = () => {
return (
  <div className='flex flex-col md:flex-row gap-8 max-w-7xl mx-auto'>
    <div className='w-full md:w-1/2 rounded-xl'>
       <Profile/>
    </div>
    <div className='w-full md:w-1/2 rounded-xl'>
      <AddCarForm/>
    </div>
  </div>)}

export default Settings