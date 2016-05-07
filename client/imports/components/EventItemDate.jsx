import React from 'react';

const WEEKDAYS = [i18n('SUN'), i18n('MON'), i18n('TUE'), i18n('WED'), i18n('THU'), i18n('FRI'), i18n('SAT')];
const MONTHS = [i18n('JAN'), i18n('FEB'), i18n('MAR'), i18n('APR'), i18n('MAY'), i18n('JUN'), i18n('JUL'), i18n('AUG'), i18n('SEP'), i18n('OCT'), i18n('NOV'), i18n('DEC')];

export default class EventItemDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  openWindow(e, event) {
    e.preventDefault();
    window.open(`https://www.google.com/maps/place/${event.address.street} ${event.address.zip}/`, '_system');
  }

  render() {
    const { event } = this.props;

    return (
      <div className="location-card">
        <div className="w-clearfix location-card-header">
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
            <img alt="location icon"
              src="images/location-icon.svg"
            />
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
            {event.morningStartTime}-{event.morningEndTime}
            <br />
            {event.noonStartTime}-{event.noonEndTime}
          </div>
        </div>
      </div>
      );
  }
}

EventItemDate.propTypes = {
  event: React.PropTypes.object,
};
