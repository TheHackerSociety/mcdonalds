
Meteor.startup(() => {
  if (Events.find().count() === 0) {
    console.log('Importing seed.json to db');
    const data = JSON.parse(Assets.getText('seed.json'));
    data.forEach((item) => {
      Events.insert(item);
    });
  }

  if (Meteor.users.find({}).count() === 0) {
    const options = {
      username: 'rmhc',
      password: 'Welcome1!',
    };
    Accounts.createUser(options);
  }

  var localeFromBrowser = window.navigator.userLanguage || window.navigator.language;
  var locale = 'en';
  // var supportedLanguages = [{}]
  for (var i = 0; i < supportedLanguages.length; i++) {
    var languageObj = supportedLanguages[i];
    if(localeFromBrowser.match(languageObj.regex))
    {
      locale = languageObj.language;
      break;
    }
  }

  // if (localeFromBrowser.match(/de/)) {
  //   locale = 'de';
  // }
  i18n.setLanguage(locale);
});
