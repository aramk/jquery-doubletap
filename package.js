// Meteor package definition.
Package.describe({
  name: 'aramk:jquery-doubletap',
  version: '0.1.0',
  summary: 'Double tap event handling for jQuery',
  git: 'https://github.com/aramk/jquery-doubletap.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.2.0.1');
  api.use([
    'jquery',
  ], 'client');
  api.addFiles([
    'src/jquery-doubletap.js',
  ], 'client');
});
