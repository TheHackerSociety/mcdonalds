import React from 'react';
import { Link } from 'param-store';

const imageStyle = {
  backgroundImage: 'url(/images/rmhc-logo.png)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  marginBottom: '15px',
  flexGrow: '1',
};

const Index = ({}) => (
      <div className="body-color">
        <div className="container" style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
          <nav className="w-clearfix nav">
            <Link href="info.html"
              className="w-inline-block w-clearfix info-icon"
              params={{ path: 'info' }}
            >
              <img alt="information icon" src="images/information-icon.svg" />
            </Link>
          </nav>
          <div style={imageStyle}></div>
          <div className="w-clearfix btn-wrapper" style={{ position: 'relative' }}>
            <Link href="search.html"
              className="w-inline-block btn-container primary-btn-color"
              params={{ path: 'search' }}
            >
              <img
                alt="Find by location bus icon"
                src="images/location-bus.svg"
                className="center"
              />
              <div className="btn-text">
                Find by
                <br /> location
              </div>
            </Link>
            <Link
              href="events-by-date.html"
              className="w-inline-block btn-container secondary-btn-color"
              params={{ path: 'events-by-date' }}
            >
              <img alt="Find by location date icon" src="images/date-bus.svg" className="center" />
              <div className="btn-text">
                Find by
                <br />date
              </div>
            </Link>
          </div>
        </div>
      </div>
      );

export default Index;
