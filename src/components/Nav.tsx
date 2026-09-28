import { AiOutlineDollar } from 'react-icons/ai';
import Logo from '../assets/logo.png'
import { useState } from 'react';

const Nav = ({coin}:{coin:number}) => {
    
    return (
        <nav className=" bg-red-100 ">
            <div className='container mx-auto flex justify-between items-center'>
            <img src={Logo} alt="" />
            <ul className='flex gap-4 items-center'>
                <li>Home</li>
                <li>Fixture</li>
                <li>Players</li>
                <li>Shedule</li>
            </ul>
            <h2 className='font-bold text-3xl text-black flex gap-1 items-center'>
            <AiOutlineDollar />
            {coin}
            </h2>
            </div>
        </nav>
    );
};

export default Nav;