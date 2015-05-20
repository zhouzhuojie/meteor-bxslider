Package.describe({
  summary: "bxslider-4, Responsive jQuery content slider",
  version: "4.2.3",
  git: "https://github.com/zhouzhuojie/meteor-bxslider.git",
  name: "rexzh0u:bxslider"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
  api.use('jquery');
  api.addFiles('lib/bxslider-4/dist/jquery.bxslider.min.js', 'client');
  api.addFiles('lib/bxslider-4/dist/jquery.bxslider.css', 'client');
  api.addFiles('lib/bxslider-4/dist/images/bx_loader.gif', 'client');
  api.addFiles('lib/bxslider-4/dist/images/controls.png', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('jquery');
  api.use('rexzh0u:bxslider');
  api.addFiles('rexzh0u:bxslider-tests.js', 'client');
});
