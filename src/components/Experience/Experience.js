import React from 'react';

const Experience = () => {
    return (
        <div>

            {/* modal data (Job Experience Details here) */}
            <input type="checkbox" id="Assistant-Mechanical-Engineer" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-semibold text-xl">Key Responsibilities:</h3>
                    <div className="py-4 text-lg">
                        <ol>
                            <li>• Being in charge of erection of Plant’s main Cooling water pipeline (RCCP, Maximum inner Dia-3400mm).</li>
                            <li>• Installing the power house drain pipe (Fabrication, Fitting, Welding, VT, PE coating).</li>
                            <li>• Monitoring & controlling the material, tools & consumables for construction work.</li>
                            <li>• Ensuring the equipment, materials & welding techniques (TIG, FCAW, Arc Welding etc.) are being used for a weld.</li>
                            <li>• Planning, arranging inspection with client and authorized consultants.</li>
                            <li>• Coordinating with other construction teams i.e. Civil, Electrical, Architecture, etc.</li>
                            <li>• Ensuring safety regulations for all relevant personnel &         equipment.</li>
                            <li>• Being in charge of the erection of the coal unloader And Gangway tower.</li>
                            <li>• Installing the Sump pump at sump pit & pipe (Fabrication, Fitting, Welding, Touchup Painting).</li>
                            <li>• Installing the Electric Overhead Crane (maximum Load 145/55) Ton.</li>
                        </ol>
                    </div>
                    <h3 className="font-semibold text-xl">Skills:</h3>
                    <div className="py-4 text-lg">
                        <ol>
                            <li>• Pipeline Construction</li>
                            <li>• Inspection</li>
                            <li>• Welding Inspection</li>
                            <li>• Cooling Water</li>
                            <li>• AutoCAD</li>
                            <li>• Mechanical Engineering</li>
                            <li>• Planning</li>
                            <li>• Team Development</li>
                            <li>• Team Performance</li>
                        </ol>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="Assistant-Mechanical-Engineer" className="btn btn-sm">Close</label>
                    </div>
                </div>
            </div>

            <input type="checkbox" id="Site-supervisor" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-semibold text-xl">Key Responsibilities:</h3>
                    <div className="py-4 text-lg">
                        <ol>
                            <li>• Supervision of erection & installation of piping, supports & steel structures.</li>
                            <li>• Loading and unloading of materials, tools and equipment.</li>
                            <li>• Assembling and breaking down barricades, temporary structure and scaffolding.</li>
                            <li>• Tracking daily activities against project schedule and also documenting unexpected delays.</li>
                            <li>• Ensuring job site is safe and all works is being performed correctly.</li>
                        </ol>
                    </div>
                    <h3 className="font-semibold text-xl">Skills:</h3>
                    <div className="py-4 text-lg">
                        <ol>
                            <li>• Mechanical Engineering</li>
                            <li>• Team Performance</li>
                        </ol>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="Site-supervisor" className="btn btn-sm">Close</label>
                    </div>
                </div>
            </div>

            <input type="checkbox" id="Technician" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-semibold text-xl">Key Responsibilities:</h3>
                    <div className="py-4 text-lg">
                        <ol>
                            <li>• Inverter Program & Install.</li>
                            <li>• Rotary printing machine install.</li>
                            <li>• Operates traveling or stationary overhead crane to lift, move, and position loads.</li>
                            <li>• Observe all workplace safety rules and regulations.</li>
                        </ol>
                    </div>
                    <h3 className="font-semibold text-xl">Skills:</h3>
                    <div className="py-4 text-lg">
                        <ol>
                            <li>• Industrial Engineering</li>
                            <li>• Automation</li>
                            <li>• Electronics</li>
                        </ol>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="Technician" className="btn btn-sm">Close</label>
                    </div>
                </div>
            </div>

            <h2 className='text-3xl lg:text-4xl font-semibold text-center mt-20 mb-10'>Experience</h2>
            <div className='hidden lg:block'>
                <div className="carousel w-11/12 lg:w-3/5 mx-auto mb-20">
                    <div id="slide1" className="carousel-item relative w-full flex justify-center">
                        <div className='p-10'>
                            <h4 className='text-2xl font-semibold'>Assistant Mechanical Engineer</h4>
                            <h4 className='text-xl font-light'>June 2022 to Present</h4>
                            <h4 className='text-xl font-semibold mt-3'>POSCO E&C (South Korea)</h4>
                            <h4 className='text-xl font-normal'>Matarbari 1200MW USC Coal Fired Power Project, Cox’s Bazar.</h4>
                            <p></p>
                            <label htmlFor="Assistant-Mechanical-Engineer" className="btn btn-sm btn-outline mt-5">Details</label>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle btn-outline">❮</a>
                            <a href="#slide2" className="btn btn-circle btn-outline">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full flex justify-center">
                        <div className='p-10'>
                            <h4 className='text-2xl font-semibold'>Mechanical Supervisor</h4>
                            <h4 className='text-xl font-light'>June 2021 to Present</h4>
                            <h4 className='text-xl font-semibold mt-3'>POSCO E&C (South Korea)</h4>
                            <h4 className='text-xl font-normal'>Matarbari 1200MW USC Coal Fired Power Project, Cox’s Bazar.</h4>
                            <p></p>
                            <label htmlFor="Assistant-Mechanical-Engineer" className="btn btn-sm btn-outline mt-5">Details</label>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle btn-outline">❮</a>
                            <a href="#slide3" className="btn btn-circle btn-outline">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full flex justify-center">
                        <div className='p-10'>
                            <h4 className='text-2xl font-semibold'>Site Supervisor</h4>
                            <h4 className='text-xl font-light'>August 2018 to February 2021</h4>
                            <h4 className='text-xl font-semibold mt-3'>China Harbour Engineering Company Ltd.</h4>
                            <h4 className='text-xl font-normal'>Teghoria Interchange & Equria Babubazar Link Road Flyover,Dhaka</h4>
                            <h4 className='text-xl font-normal'>HQ24 Engineering Construction Brigade, Bangladesh Army</h4>
                            <p></p>
                            <label htmlFor="Site-supervisor" className="btn btn-sm btn-outline mt-5">Details</label>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle btn-outline">❮</a>
                            <a href="#slide4" className="btn btn-circle btn-outline">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full flex justify-center">
                        <div className='p-10'>
                            <h4 className='text-2xl font-semibold'>Technician</h4>
                            <h4 className='text-xl font-light'>October 2016 to May 2018</h4>
                            <h4 className='text-xl font-semibold mt-3'>Total Solution Engineering Power & Automation</h4>
                            <h4 className='text-xl font-normal'>South Keraniganj, Dhaka-1311</h4>
                            <p></p>
                            <label htmlFor="Technician" className="btn btn-sm btn-outline mt-5">Details</label>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle btn-outline">❮</a>
                            <a href="#slide1" className="btn btn-circle btn-outline">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-8 block lg:hidden'>
                <div>
                    <div className='p-10'>
                        <h4 className='text-xl font-semibold'>Assistant Mechanical Engineer</h4>
                        <h4 className='text-lg font-light'>June 2022 to Present</h4>
                        <h4 className='text-lg font-semibold mt-3'>POSCO E&C (South Korea)</h4>
                        <h4 className='text-lg font-normal'>Matarbari 1200MW USC Coal Fired Power Project, Cox’s Bazar.</h4>
                        <p></p>
                        <label htmlFor="Assistant-Mechanical-Engineer" className="btn btn-sm btn-outline mt-5">Details</label>
                    </div>
                    <div className='p-10'>
                        <h4 className='text-xl font-semibold'>Mechanical Supervisor</h4>
                        <h4 className='text-lg font-light'>June 2021 to Present</h4>
                        <h4 className='text-lg font-semibold mt-3'>POSCO E&C (South Korea)</h4>
                        <h4 className='text-lg font-normal'>Matarbari 1200MW USC Coal Fired Power Project, Cox’s Bazar.</h4>
                        <p></p>
                        <label htmlFor="Assistant-Mechanical-Engineer" className="btn btn-sm btn-outline mt-5">Details</label>
                    </div>
                    <div className='p-10'>
                        <h4 className='text-xl font-semibold'>Site Supervisor</h4>
                        <h4 className='text-lg font-light'>August 2018 to February 2021</h4>
                        <h4 className='text-lg font-semibold mt-3'>China Harbour Engineering Company Ltd.</h4>
                        <h4 className='text-lg font-normal'>Teghoria Interchange & Equria Babubazar Link Road Flyover,Dhaka</h4>
                        <h4 className='text-lg font-normal'>HQ24 Engineering Construction Brigade, Bangladesh Army</h4>
                        <p></p>
                        <label htmlFor="Site-supervisor" className="btn btn-sm btn-outline mt-5">Details</label>
                    </div>
                    <div className='p-10'>
                        <h4 className='text-xl font-semibold'>Technician</h4>
                        <h4 className='text-lg font-light'>October 2016 to May 2018</h4>
                        <h4 className='text-lg font-semibold mt-3'>Total Solution Engineering Power & Automation</h4>
                        <h4 className='text-lg font-normal'>South Keraniganj, Dhaka-1311</h4>
                        <p></p>
                        <label htmlFor="Technician" className="btn btn-sm btn-outline mt-5">Details</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;