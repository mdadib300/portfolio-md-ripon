import React from 'react';
import fb from '../../assets/fb.png';
import insta from '../../assets/insta.png';
import lkin from '../../assets/in.png';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded mt-40">
            <div className="grid grid-flow-col gap-4">
                <a href='/#about' className="link link-hover">About Me</a>
                <a className="link link-hover">Contact</a>
                <a href='/' className="link link-hover">Homepage</a>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a href='https://www.facebook.com/Md.Ripon9365' target='blank'><img src={fb} alt='Facebook Account Link' className='w-8'></img></a>
                    <a href='https://www.linkedin.com/in/md-ripon-5339a0217' target='blank'><img src={lkin} alt='LinkedIn Account Link' className='w-8'></img></a>
                    <a href='https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fmd.ripon_hossain_%3Ffbclid%3DIwAR1mNaK79vq4CLgKBAtruddNDiu9sd7rEdriWUZeEzUcn2vxoViQtxVhqlw&h=AT227h_gwkTNS6n1FtDXzJamkFP3ZAcvhN_LSdD5iun2XwqyN0msBUqH0BWrXIVcPYkG8wQiGpa9fnA3dmmANwYf--q72ZRZU4OiME_uCia5Kirqm0A2vfp7oW6g2qPyTs-jkA' target='blank'><img src={insta} alt='Instagram Account Link' className='w-8'></img></a>
                </div>
            </div>
            <div>
                <p>Copyright © 2023 - All right reserved by MD RIPON</p>
            </div>
        </footer>
    );
};

export default Footer;