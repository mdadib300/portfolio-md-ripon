import React from 'react';
import word from '../../assets/word.png';
import autocad from '../../assets/autocad.png';
import creative from '../../assets/business.png';
import serviceFocused from '../../assets/concept.png';
import excel from '../../assets/excel.png';
import powerpoint from '../../assets/powerpoint.png';
import innovative from '../../assets/project-management.png';

const Skills = () => {
    return (
        <div id='skills'>
            <h2 className='text-2xl font-medium text-center mt-20 mb-10'>Skills</h2>
            <div className='grid gird-cols-1 lg:grid-cols-7 mb-20'>
                <div className='flex justify-center'>
                    <div className="tooltip m-10" data-tip="Microsoft Word">
                        <img src={word} alt='Microsoft Word' className='w-20'></img>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="tooltip m-10" data-tip="Microsoft Excel">
                        <img src={excel} alt='Microsoft Excel' className='w-20'></img>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="tooltip m-10" data-tip="Microsoft PowerPoint">
                        <img src={powerpoint} alt='Microsoft PowerPoint' className='w-20'></img>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="tooltip m-10" data-tip="AutoCAD">
                        <img src={autocad} alt='AutoCAD' className='w-20'></img>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="tooltip m-10" data-tip="Service Focused">
                        <img src={serviceFocused} alt='Service Focused' className='w-20'></img>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="tooltip m-10" data-tip="Creative">
                        <img src={creative} alt='Creative' className='w-20'></img>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="tooltip m-10" data-tip="Innovative">
                        <img src={innovative} alt='Innovative' className='w-20'></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;