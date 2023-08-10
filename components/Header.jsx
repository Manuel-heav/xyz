import Image from "next/image";
import Link from "next/link"

function Header() {
    return (
        <nav className='flex  items-center justify-between bg-dark-2 px-10 py-8 bg-[#2e2870] text-white m-10 w-5/6 md:ml-40'>
        <Link href="/" className='flex-auto w-64 items-center'>
            <h1 className='text-xl'>XYZ Company</h1>
        </Link> 
        <Link href="/" className='flex items-center flex-auto w-20'>
            <h1 className='text-lg'>About Us</h1>
        </Link> 
        <Link href="/" className='flex items-center flex-auto w-32'>
            <h1 className='text-lg'>Contact</h1>
        </Link> 

        <Link href="/" className='flex items-center'>
            <button className="bg-[#a15afd] p-2 pl-9 pr-9 rounded-xl">Sign In</button>
        </Link> 


      </nav>
    )
    }
    
export default Header;