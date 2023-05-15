import React from 'react';
import image from '../../assets/profile-picture.jpg';

const Banner = () => {
    return (
        <div>
            <div className="hero py-10 lg:py-20 bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className="w-4/5 lg:w-1/3 rounded-lg shadow-md lg:shadow-2xl mr-0 lg:mr-20" alt='Md. Ripon' />
                    <div>
                        <h1 className="text-4xl font-medium mt-5 lg:mt-0">MD RIPON</h1>
                        <h1 className="text-2xl font-medium mt-5 lg:mt-5">Mechanical Engineer</h1>
                        <p className="py-5">Seeking a challenging role in an organization to utilize my knowledge, abilities, and skills for the growth of the organization as well as to enhance my knowledge and experience through continuous learning and teamwork.
                        </p>
                        <div className='flex justify-start items-center'> 
                            <a href='https://docs.google.com/presentation/d/107VbQhT1vd98cnbx-Wm7PJeWuiVfb3OE/edit#slide=id.p1' target='blank' className="btn btn-sm btn-outline mr-3">Resume</a>
                            <div className="dropdown dropdown-hover">
                                <label tabIndex={0} className="btn btn-sm btn-outline m-1">Contact</label>
                                <ul tabIndex={0} className="dropdown-content menu p-5 shadow bg-base-100 rounded-box">
                                    <li>Email Address: mdripon8869@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;