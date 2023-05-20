import React from 'react';
import call from '../../assets/telephone.png';
import gmail from '../../assets/gmail.png';
import locate from '../../assets/google-maps.png';

const Contact = () => {
    return (
        <div>
                <h2 className='text-3xl lg:text-4xl font-semibold text-center mt-20 mb-10'>Contact info.</h2>
                <div className='px-10'>
                    <div className='flex items-center justify-center'>
                        <img src={call} className='w-12 mr-3' alt='Phone Number'></img>
                        <p className='text-lg lg:text-xl'>+8801833558017</p>
                    </div>
                    <div className='flex items-center justify-center mt-5'>
                        <img src={gmail} className='w-12 mr-3' alt='Email Address'></img>
                        <p className='text-lg lg:text-xl'>mdripon8869@gmail.com</p>
                    </div>
                    <div className='flex items-center justify-center mt-5'>
                        <img src={locate} className='w-12 mr-3' alt='Location'></img>
                        <p className='text-lg lg:text-xl'>Kadompur, South Keraniganj, Dhaka-1311</p>
                    </div>
                </div>
        </div>
    );
};

export default Contact;