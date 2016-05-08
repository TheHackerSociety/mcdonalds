import React from 'react';

const WEEKDAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const METERS_PER_MILE = 1609.34;

export default class EventItemLocation extends React.Component {
  openWindow(e, event) {
    e.preventDefault();
    window.open(`https://www.google.com/maps/place/${event.address.street} ${event.address.zip}/`, '_system');
  }

  render() {
    const { event } = this.props;

    return (
      <div className="location-card">
        <div className="w-clearfix location-card-header">
          <div className="w-clearfix miles-container">
            <div className="miles-number">
              {(event.distance / METERS_PER_MILE).toFixed(2)}
            </div>
            <div className="miles-text">
              MILES
              <br />AWAY
            </div>
          </div>
          <div className="w-clearfix date-container">
            <div className="secondary-font-color day">
              {WEEKDAYS[event.date.getDay()]}
              <br />
              {MONTHS[event.date.getMonth()]}
              </div>
            <div className="secondary-font-color day-number">
              {event.date.getDate()}
            </div>
          </div>
        </div>
        <div className="w-clearfix card-info">
          <a href="#"
            target="_blank"
            onClick={(e) => this.openWindow(e, event)}
            className="w-inline-block w-clearfix location-icon"
          >
            <img alt="location icon" src="images/location-icon.svg" />
          </a>
          <div className="secondary-font-color location-name">
            {event.place}
          </div>
          <div className="secondary-font-color location-address">
            {event.address.street}
            <br />
            {event.address.zip}
          </div>
          <div className="secondary-font-color location-time">
            {event.morningStartTime} {event.morningStartTime ? '-' : null } {event.morningEndTime}
            {event.morningStartTime ? <br /> : null}
            {event.noonStartTime} {event.noonStartTime ? '-' : null } {event.noonEndTime}
          </div>
        </div>
      </div>
    );
  }
}

EventItemLocation.propTypes = {
  event: React.PropTypes.object,
};
