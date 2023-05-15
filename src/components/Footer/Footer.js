import React from 'react';
import fb from '../../assets/fb.png';
import insta from '../../assets/insta.png';
import lkin from '../../assets/in.png';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded mt-40">
            <div>
                <p>Thanks for visiting!</p>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a href='https://www.facebook.com/Md.Ripon9365' target='blank'><img src={fb} alt='Facebook Account Link' className='w-8'></img></a>
                    <a href='https://www.linkedin.com/in/md-ripon-5339a0217' target='blank'><img src={lkin} alt='LinkedIn Account Link' className='w-8'></img></a>
                    <a href='https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fmd.ripon_8869%3Figshid%3DZGUzMzM3NWJiOQ%253D%253D%26fbclid%3DIwAR24oLSXij520cEsoVcYXfYb37QEciOBaRfs6Za-WhPFwm8q5wO6zYOP1UQ&h=AT0uNyFqYSb4CUsmOAa9uxwETOvLgyy87gDOS2g53xl9GSw8x8wkTdXvJZjUR8n5UyJtgcLJTry5-KB52_nNzXTjVB9eoTc4QwtdE_IVClnmKzJuHArMmkBS3cD1iwptc56wfQ' target='blank'><img src={insta} alt='Instagram Account Link' className='w-8'></img></a>
                </div>
            </div>
            <div>
                <p>Copyright © 2023 - All right reserved by MD RIPON</p>
            </div>
        </footer>
    );
};

export default Footer;