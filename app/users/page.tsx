import React from 'react'
import UserTable from './UserTable'

interface Props{
   searchParams:{sortOrder:string}
}
const UsersPage = async({searchParams:{sortOrder}}:Props) => {
  console.log(sortOrder)
  
   return (
    <div>
     <h1>Users</h1>
     <UserTable sortOrder={sortOrder}/>
    </div>
  )
}

export default UsersPage
