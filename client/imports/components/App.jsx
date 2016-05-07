import React from 'react';
import Admin from './admin/Admin';
import EventsByDate from './EventsByDate';
import EventsByLocation from './EventsByLocation';
import Index from './Index';
import Info from './Info';
import LocationError from './error/LocationError';
import Login from './admin/Login';
import Search from './Search';
import MakeContainer from './MakeContainer';
import ParamStore from 'param-store';

const IndexContainer = MakeContainer(Index, /((^index$)|(^$))/ig);
const SearchContainer = MakeContainer(Search, /^search$/ig, { setAddress: React.PropTypes.func });
const InfoContainer = MakeContainer(Info, /^info$/ig);
const LoginContainer = MakeContainer(Login, /^login$/ig);
const EventsByLocationContainer = MakeContainer(EventsByLocation, /^events-by-location$/ig);
const LocationErrorContainer = MakeContainer(LocationError, /^location-error$/ig);
const EventsByDateContainer = MakeContainer(EventsByDate, /^events-by-date$/ig);
const AdminContainer = MakeContainer(Admin, /^admin$/ig);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: null,
    };
    this.setAddress = this.setAddress.bind(this);
  }

  setAddress(address) {
    ParamStore.set({ path: 'events-by-location' });
    this.setState({ address });
  }

  render() {
    return (
      <div>
        <AdminContainer />
        <EventsByDateContainer />
        <EventsByLocationContainer origin={this.state.address} />
        <IndexContainer />
        <InfoContainer />
        <LocationErrorContainer />
        <LoginContainer />
        <SearchContainer setAddress={this.setAddress} />
      </div>
      );
  }
}
