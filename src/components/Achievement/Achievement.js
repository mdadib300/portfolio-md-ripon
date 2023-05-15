import React from 'react';
import safetyAward from '../../assets/safety.png';
import bestEmployee from '../../assets/best-em.png';

const Achievement = () => {
    return (
        <div>
            <h2 className='text-2xl font-medium text-center mt-20 mb-10'>Achievement</h2>
            <div className='m-10'>
            <div className='grid grid-cols-2 gap-10'>
                <div className="card card-side border-2 p-10">
                    <figure><img src={safetyAward} alt="Safety Award" className='w-40' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Safety Award - 2021</h2>
                        <h2 className="card-title">POSCO E&C</h2>
                        <p>Matarbari Ultra Super Critical Coal Fired Power Plant.</p>
                    </div>
                </div>
                <div className="card card-side border-2 p-10">
                    <figure><img src={bestEmployee} alt="Best Employee" className='w-40' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Best Employee Award - 2021</h2>
                        <h2 className="card-title">POSCO E&C</h2>
                        <p>Matarbari Ultra Super Critical Coal Fired Power Plant.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Achievement;