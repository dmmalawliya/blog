import React, { useState } from 'react';
import { Button, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
  const path = useLocation().pathname;
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchTerm);
  };

  return (
    <Navbar className='border-b-2'>
      <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 rounded-lg text-white'>Tech</span>gram
      </Link>

    
      {/* <div className='flex gap-2 items-center'>
        <form onSubmit={handleSubmit} className='relative hidden lg:inline'>
          <input
            type='text'
            placeholder='Search...'
            className='pl-10 py-2 border rounded-lg w-64'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <AiOutlineSearch className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500' />
        </form>

        
        <Button className='w-12 h-10 lg:hidden mx-2' color='gray' pill>
          <AiOutlineSearch />
        </Button> */}

        <form>
          <TextInput
            type='text'
            placeholder='Search...'
            rightIcon={AiOutlineSearch}
            className='hidden lg:inline'
          />
        </form>
        <Button className='w-12 h-10 lg:hidden' color='gray' pill>
          <AiOutlineSearch />
        </Button>



        <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
          <FaMoon />
        </Button>


   <Button
    gradientDuoTone='purpleToBlue' outline
    // className='text-lg border-2 border-purple-600 hover:bg-purple-600 hover:text-white transition-colors duration-300'
  >Sign In</Button>
  <Navbar.Toggle/>
  </div>
  <Navbar.Collapse>
    <Navbar.Link active={path === "/"} as={'div'} to='/'>
       Home 
    </Navbar.Link>

    <Navbar.Link active={path === "/about"} as={'div'} to='/about'>
       About 
    </Navbar.Link>
    <Navbar.Link active={path === "/projects"} as={'div'} to='/projects'>
     Projects 
    </Navbar.Link>
  </Navbar.Collapse>
    </Navbar>
  );
}
