Package.describe({
  summary: "iOS 7 style switches for your checkboxes"
});

Package.on_use(function (api) {
  api.add_files("lib/switchery/dist/switchery.css", 'client');
  api.add_files("lib/switchery/dist/switchery.js", 'client');
});
