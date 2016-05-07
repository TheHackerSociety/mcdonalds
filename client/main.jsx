import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from './imports/components/App.jsx';

Meteor.subscribe('events');
Meteor.subscribe('users');
Meteor.startup(() => {
  render(<App />, document.getElementById('app'));

  var localeFromBrowser = window.navigator.userLanguage || window.navigator.language;
  var locale = 'en';
  //if (localeFromBrowser.match(/de/)) {
  //  locale = 'de';
  //}
  i18n.setLanguage(locale);

  return i18n.setDefaultLanguage('en');
});
