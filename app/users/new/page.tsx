'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const NewUserPage = () => {
    const router=useRouter();
  return (
    <div>
      <button 
      className='btn btn-primary m-4'
      onClick={()=>{router.push('/users')}}>Create</button>
    </div>
  )
}

export default NewUserPage
