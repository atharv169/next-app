import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import coffee from '@/public/images/coffee.jpg'
export default async function Home() {
  const session=await getServerSession(authOptions);
  return (
    <main className='relative h-screen' >
      {/* <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">users</Link>
      <ProductCard/> */}
      <Image 
      src="https://bit.ly/react-cover" 
      alt="Coffee"
     fill
    className='object-cover'
    sizes='(max-width:480px) 100vw,(max-width:768px) 50vw,33vw'
    quality={100}
    priority
    />
    </main> 
  )
}
