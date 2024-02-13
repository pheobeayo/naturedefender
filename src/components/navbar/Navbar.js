import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { ConnectButton } from '@rainbow-me/rainbowkit';






const Navbar = () => {

    return (
        <nav class="bg-[#1A1818]">
            <div className='fixed top-0 right-0 left-0 bg-gradient z-50 bg-[#1A1818]'>
                <div className='flex gap-4 justify-center items-center mx-4 pt-2'>
                    <Link to="/"><img src={logo} alt="logo" class='w-40' /></Link>

                    <ul className='flex m-auto gap-20'>
                        <Link to='/ongoing-projects' style={{ textDecoration: 'none', color: 'white' }}>Explore</Link>
                        <Link to='/badge-reward' style={{ textDecoration: 'none', color: 'white' }}>Badge Reward</Link>
                        <Link to='/why-naturedefender' style={{ textDecoration: 'none', color: 'white' }}>About us </Link>
                        <Link style={{ textDecoration: 'none', color: 'white' }}>FAQs</Link>
                    </ul>
                    <div class='mx-4 '>
                        <ConnectButton />
                    </div>
                    <div class="p-16 space-y-2 rounded shadow">
                        <Link to='/sign-in'> <span class="block w-8 h-0.5 bg-gray-100 animate-pulse"></span> </Link>
                        <span class="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
                        <Link to='/sign-up' style={{ marginTop: '1rem' }}><span class="block w-8 h-0.5 bg-gray-100 animate-pulse"></span></Link>
                    </div>
                </div>
            </div>
        </nav>
    )



}

export default Navbar;