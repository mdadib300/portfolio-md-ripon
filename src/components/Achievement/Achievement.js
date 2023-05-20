import React from 'react';
import safetyAward from '../../assets/safety.png';
import bestEmployee from '../../assets/best-em.png';

const Achievement = () => {
    return (
        <div id='ach'>
            <h2 className='text-2xl lg:text-3xl font-semibold text-center mt-20 mb-10'>Achievements</h2>
            <div className='m-10'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div className="border-2 rounded-lg p-8">
                        <img src={safetyAward} alt="Safety Award" className='w-14 lg:w-20 mb-5' />
                        <div>
                            <h2 className="text-xl lg:text-2xl font-semibold">Safety Award - 2021</h2>
                            <h2 className="text-xl lg:text-2xl">POSCO E&C</h2>
                            <p>Matarbari Ultra Super Critical Coal Fired Power Plant</p>
                        </div>
                    </div>
                    <div className="border-2 rounded-lg p-8">
                        <img src={bestEmployee} alt="Best Employee" className='w-14 lg:w-20 mb-5' />
                        <div>
                            <h2 className="text-xl lg:text-2xl font-semibold">Best Employee Award - 2021</h2>
                            <h2 className="text-xl lg:text-2xl">POSCO E&C</h2>
                            <p>Matarbari Ultra Super Critical Coal Fired Power Plant</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievement;