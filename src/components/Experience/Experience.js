import React from 'react';

const Experience = () => {
    return (
        <div>
            <h2 className='text-2xl font-medium text-center mt-20 mb-10'>Experience</h2>
            <div className="carousel w-3/5 mx-auto mb-20">
                <div id="slide1" className="carousel-item relative w-full flex justify-center">
                    <div className='p-10'>
                        <h4 className='text-2xl font-semibold'>Mechanical Supervisor</h4>
                        <h4 className='text-xl font-light'>June 2021 to Present</h4>
                        <h4 className='text-xl font-semibold mt-3'>POSCO E&C (South Korea)</h4>
                        <h4 className='text-xl font-normal'>Matarbari 1200MW USC Coal Fired Power Project, Cox’s Bazar.</h4>
                        <p></p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle btn-outline">❮</a>
                        <a href="#slide2" className="btn btn-circle btn-outline">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full flex justify-center">
                    <div className='p-10'>
                        <h4 className='text-2xl font-semibold'>Technician</h4>
                        <h4 className='text-xl font-light'>October 2016 to May 2018</h4>
                        <h4 className='text-xl font-semibold mt-3'>Total Solution Engineering Power & Automation</h4>
                        <h4 className='text-xl font-normal'>South Keraniganj, Dhaka-1311</h4>
                        <p></p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle btn-outline">❮</a>
                        <a href="#slide1" className="btn btn-circle btn-outline">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;