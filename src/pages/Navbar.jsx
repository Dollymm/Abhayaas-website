import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Person3Icon from '@mui/icons-material/Person3';

const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between bg-white shadow-lg items-center p-4 md:p-6'>
    <p className='text-2xl font-bold ml-2 md:ml-7 mb-2 md:mb-0'>Karo Abhayaas</p>
    <ul className='flex justify-center md:justify-start gap-2 md:gap-5'>
    <li className='bg-black text-white px-2 py-1 md:px-3 md:py-2 rounded-sm text-xs md:text-sm overflow-hidden'>
  Join Us
</li>

        <li className='text-gray-400 text-md md:text-lg'>Classes</li>
        <li className='text-gray-400 text-md md:text-lg'>Products</li>
        <li className='text-gray-400 text-md md:text-lg'>About Us</li>
        <li><Person3Icon className='h-6 w-6 md:h-8 md:w-8'/></li>
        <li><ShoppingCartIcon className='h-6 w-6 md:h-8 md:w-8'/></li>
    </ul>
</div>

  )
}

export default Navbar