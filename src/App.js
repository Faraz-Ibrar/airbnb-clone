
import './App.css';
import logo from './assets/logo.png'
import homeLogo from './assets/home-logo.png'
import hotBaloonLogo from './assets/airbaloon-logo.png'
import bellLogo from './assets/bell.jpg'
import newLogo from './assets/new.png'
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
    <div className="header">
      <div className='logo'>
        <img src={logo} alt='logo'/>
      </div>
      <div className='middle-part'>
        <div className='home'>
          <img src={homeLogo} alt="Home Logo"></img>
          <div>Homes</div>
        </div>
        <div className='experiences'>
          <img src={hotBaloonLogo} alt="Hot Baloon Logo"></img>
          <div className="nestedServices">
            <img src={newLogo} alt="new"></img>
            <div>Experiences</div>
          </div>
        </div>
        <div className='services'>
          <img src={bellLogo} alt="BellLogo"></img>
          <div className="nestedServices">
            <img src={newLogo} alt="new"></img>
            <div>Services</div>
          </div>
        </div>
      </div>
      <div className='last-part'>
        <div>
          <button>Become a Host</button>
        </div>
        <div className='globe-logo'>
          <i className="bi bi-globe"></i>
        </div>
        <div className='menu-logo'>
          <i className="bi bi-list"></i>
        </div>
      </div>
    </div>
  );
}

export default App;
