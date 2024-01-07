import './App.css';

import terre from '/images/desktop/image-deep-earth.jpg';
import arcade from '/images/desktop/image-night-arcade.jpg';
import soccer from '/images/desktop/image-soccer-team.jpg';
import grid from '/images/desktop/image-grid.jpg';
import vr from '/images/desktop/image-from-above.jpg';
import boreals from '/images/desktop/image-pocket-borealis.jpg';
import curiosity from '/images/desktop/image-curiosity.jpg';
import fisheye from '/images/desktop/image-fisheye.jpg';
import interactive from '/images/desktop/image-interactive.jpg';


import {Logo} from '../src/components/logo';


function App() {
 
  return (
    <>
      <div className='header'>
        <div id='header'>
            <Logo/>
            <div className='navbar'>
              <nav>
              <a href=""><p>About</p></a>
              <a href=""><p>Careers</p></a>
              <a href=""><p>Events</p></a>
              <a href=""><p>Products</p></a>
              <a href=""><p>Support</p></a>
              </nav>
            </div>
        </div>
        <div className='descText'>
          <p>IMMERSIVE EXPERIENCES THAT&nbsp;&nbsp;  DELIVER</p>
        </div>
      </div>
      <div className='main'>
        <div className='topic'>
          <div className='imgTopic'>
              <img src={interactive} alt=""/>
          </div>
          <div className='descTopic'>
            <p className='h2'>THE LEADER IN INTERACTIVE VR</p>
            <p className='text'>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
          </div>
        </div>
        <div className='creations'>
          <div id='creation'>
            <p>OUR CREATIONS</p>
            <div className='button'>
              <button>SEE&nbsp;&nbsp; ALL</button>
            </div>
          </div>
          <div className='grid'>
            <div className='a'>
              <img src={terre} alt='' />
            </div>
            <div className='b'>
            <img src={arcade}/>
            </div>
            <div className='c'>
            <img src={soccer}/>
            </div>
            <div className='d'>
            <img src={grid}/>
            </div>
            <div className='e'>
            <img src={vr}/>
            </div>
            <div className='f'>
            <img src={boreals}/>
            </div>
            <div className='g'>
            <img src={curiosity}/>
            </div>
            <div className='h'>
            <img src={fisheye}/>
            </div>
          </div>
        </div>
      </div>
      <div className='footer'>
        <div className='leftFoot'>
         <Logo/>
          <nav id='navFooter'>
            <a href=""><p>About</p></a>
            <a href=""><p>Careers</p></a>
            <a href=""><p>Events</p></a>
            <a href=""><p>Products</p></a>
            <a href=""><p>Support</p></a>
            </nav>
        </div>
        <div className='rightFoot'>
        <img src='/images/icon-facebook.svg'></img>
        </div>
      </div>
    </>
  )
}

export default App