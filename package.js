Package.describe({
  summary: "bxslider-4, Responsive jQuery content slider",
  version: "0.4.0",
  git: "https://github.com/zhouzhuojie/meteor-bxslider",
  name: "rexzh0u:bxslider"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2.1');
  api.use('jquery');
  api.addFiles('lib/bxslider-4/jquery.bxslider.min.js', 'client');
  api.addFiles('lib/bxslider-4/jquery.bxslider.css', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('jquery');
  api.use('rexzh0u:bxslider');
  api.addFiles('rexzh0u:bxslider-tests.js', 'client');
});
