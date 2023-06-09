import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown mr-2">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href='/'>Homepage</a></li>
                        <li><a href='/#skills'>Skills & Experience</a></li>
                        <li><a href='/#ach'>Achievements</a></li>
                    </ul>
                </div>
                <a href='/' className="text-lg lg:text-2xl font-semibold">Ripon's Profile</a>
            </div>
        </div>
    );
};

export default Navbar;