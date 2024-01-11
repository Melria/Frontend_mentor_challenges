import interactive from '/images/desktop/image-interactive.jpg';

//import React from 'react';
import {Card} from './cards';


export const Main = () => {
  return (
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
      <Card/>
    </div>
  </div>
  )
}
