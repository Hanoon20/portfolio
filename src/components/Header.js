import { useState } from 'react';
import './Header.css';
import { Bars3Icon } from '@heroicons/react/24/solid'

function Header() {

    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <>
            <header className="flex justify-between px-5 py-3 bg-primary"> 
                <a href="" className=' text-white font-bold name'>Hanoon</a>
                
                <nav className='hidden md:block'>
                    <ul className="flex text-white">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#project">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>



                {toggleMenu && <nav className='block md:hidden '>
                    <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-dev">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#project">Project</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>}

                <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='h-5'/></button>


            </header>
        </>
    );
}

export default Header;
