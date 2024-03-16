import React from 'react'
import UserTable from './UserTable'
import Link from 'next/link'

interface Props{
   searchParams:{sortOrder:string}
}
const UsersPage = async({searchParams:{sortOrder}}:Props) => {
  console.log(sortOrder)
  
   return (
    <div className='ml-3 mt-2'>
     <h1>Users</h1>
     <Link href="/users/new" className='btn'>New User</Link>
     <UserTable sortOrder={sortOrder}/>
    </div>
  )
}

export default UsersPage
