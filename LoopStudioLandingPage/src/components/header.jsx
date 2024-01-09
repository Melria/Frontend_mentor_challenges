import Logo from './logo';
import Navbar from './navbar';

export const Header = () => {
  return (
    <div className='header'>
        <div id='header'>
            <Logo/>
            <Navbar/>
        </div>
        <div className='descText'>
          <p>IMMERSIVE EXPERIENCES THAT LIVER</p>
        </div>
      </div>
  )
}
