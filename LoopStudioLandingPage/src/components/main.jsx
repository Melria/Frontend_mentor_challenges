import terre from '/images/desktop/image-deep-earth.jpg';
import arcade from '/images/desktop/image-night-arcade.jpg';
import soccer from '/images/desktop/image-soccer-team.jpg';
import grid from '/images/desktop/image-grid.jpg';
import vr from '/images/desktop/image-from-above.jpg';
import borealis from '/images/desktop/image-pocket-borealis.jpg';
import curiosity from '/images/desktop/image-curiosity.jpg';
import fisheye from '/images/desktop/image-fisheye.jpg';
import interactive from '/images/desktop/image-interactive.jpg';


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
      <div className='grid'>
        <div className='a'>
          <img src={terre} alt='' />
          <div className='div_lbl'>
          <p className='lbl'>DEEP<br/>EARTH</p>
          </div>
        </div>
        <div className='b'>
        <img src={arcade}/>
        <div className='div_lbl'>
          <p className='lbl'>NIGHT<br/>ARCADE</p>
          </div>
        </div>
        <div className='c'>
        <img src={soccer}/>
        <div className='div_lbl'>
          <p className='lbl'>SOCCER<br/>TEAM&nbsp; VR</p>
          </div>
        </div>
        <div className='d'>
        <img src={grid}/>
        <div className='div_lbl'>
          <p className='lbl'>THE<br/>GRID</p>
          </div>
        </div>
        <div className='e'>
        <img src={vr}/>
        <div className='div_lbl'>
          <p className='lbl'>FROM UP<br/>ABOVE VR</p>
          </div>
        </div>
        <div className='f'>
        <img src={borealis}/>
        <div className='div_lbl'>
          <p className='lbl'>POCKETS<br/>BOREALIS</p>
          </div>
        </div>
        <div className='g'>
        <img src={curiosity}/>
        <div className='div_lbl'>
          <p className='lbl'>THE<br/>CURIOSITY</p>
          </div>
        </div>
        <div className='h'>
        <img src={fisheye}/>
        <div className='div_lbl'>
          <p className='lbl'>MAKE IT<br/>FISHEYE</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
