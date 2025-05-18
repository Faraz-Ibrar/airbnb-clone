import './App.css';
import logo from './assets/logo.png'
import homeLogo from './assets/home-logo.png'
import hotBaloonLogo from './assets/airbaloon-logo.png'
import bellLogo from './assets/bell.jpg'
import newLogo from './assets/new.png'
import 'bootstrap-icons/font/bootstrap-icons.css';
import list from './list'
import { useRef } from 'react';

// Make sure process.env.PUBLIC_URL is used for any static paths that aren't imported
const PUBLIC_URL = process.env.PUBLIC_URL || '';

function App() {
  // Get unique cities
  const uniqueCities = [...new Set(list.map(item => item.city))];
  
  // Create refs for each city's slider
  const sliderRefs = useRef({});
  
  // Function to scroll slider left/right
  const scrollSlider = (city, direction) => {
    const slider = sliderRefs.current[city];
    if (slider) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className='total-header'>
        <div className="header">
          <div className='logo'>
            <img src={logo} alt='logo' />
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

        {/* Desktop Search */}
        <div className='search-div'>
          <div className='where-div'>
            <h6>Where</h6>
            <p>Search destinations</p>
          </div>
          <div className='checkin-div'>
            <h6>Check in</h6>
            <p>Add dates</p>
          </div>
          <div className='checkout-div'>
            <h6>Check out</h6>
            <p>Add dates</p>
          </div>
          <div className='who-div'>
            <div className='text'>
              <h6>Who</h6>
              <p>Add guests</p>
            </div>
            <div className='search-icon'>
              <i className="bi bi-search"></i>
            </div>
          </div>
        </div>
        
        {/* Mobile Search Button */}
        <div className='mobile-search-btn'>
          <div className='left-side'>
            <i className="bi bi-search"></i>
            <div className='search-text'>Where to?</div>
          </div>
          <div className='search-icon-mobile'>
            <i className="bi bi-sliders"></i>
          </div>
        </div>
      </div>

      <div className='container'>
        {/* Loop through each unique city */}
        {uniqueCities.map(city => {
          // Filter listings for the current city
          const cityListings = list.filter(item => item.city === city);
          
          return (
            <div className='container-row' key={city}>
              <div className='container-header'>
                <div className='left'>
                  <p>Popular homes in {city} <span><i className="bi bi-caret-right-fill"></i></span></p>
                </div>
                <div className='right'>
                  <i className="bi bi-chevron-left" onClick={() => scrollSlider(city, 'left')}></i>
                  <i className="bi bi-chevron-right" onClick={() => scrollSlider(city, 'right')}></i>
                </div>
              </div>

              <div 
                className='card-container-parent' 
                ref={el => sliderRefs.current[city] = el}
              >
                {cityListings.map((listing, index) => (
                  <div className='card-container' key={index}>
                    <div className='card-image'>
                      <img src={listing.imgSrc} alt={listing.hotelName} />
                      <div className='text-over-image'>
                        <p>{listing.guestFavourite ? "Guest favourite" : null}</p>
                        {listing.liked ? 
                          <i className="bi bi-heart-fill" style={{ color: 'red' }}></i> : 
                          <i className="bi bi-heart"></i>}
                      </div>
                    </div>
                    <div className='card-text'>
                      <h6>{listing.hotelName}</h6>
                      <p>
                        <span>${listing.price} dollar for {listing.time} night{listing.time !== 1 ? 's' : ''} . </span>
                        <span><i className="bi bi-star-fill">  </i>{ listing.rating || 'N/A'} </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;