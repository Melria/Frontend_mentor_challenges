import Navbar from "./navbar";
import Logo from "./logo";

import facebook from '/images/icon-facebook.svg';
import twitter from '/images/icon-twitter.svg';
import pinterest from '/images/icon-pinterest.svg';
import insta from '/images/icon-instagram.svg';

export const Footer = () =>{
  return (
    <footer className='footer'>
        <div className='leftFoot'>
         <Logo/>
         <Navbar/>
        </div>
        <div className='rightFoot'>
            <img src={facebook}/>
            <img src={twitter}/>
            <img src={pinterest}/>
            <img src={insta}/>
            <p className="copy">&copy;2021|LoopStudio All right reserved</p>
        </div>
      </footer>
  )
}
