Package.describe({
    summary: "A Test package",
    version: "1.0.3",
    githubUrl: "https://github.com/strack/test-package.git"
});

Package.on_use(function (api) {
    api.export('TestPack'); // `api.export` introduced in Meteor 0.6.5
    api.add_files("test-package.js", "client");
    api.add_files("server-test.js","server");
    api.versionsFrom('METEOR-CORE@0.9.0-preview5');
});

Package.on_test(function(api) {
    api.use('strack:test-package','client');
}

Npm.depends({
    "colors": "0.6.2"
});
