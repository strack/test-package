Package.describe({
    summary: "A Test package",
    version: "1.0.0",
    githubUrl: ""
});

Package.on_use(function (api) {
    api.export('TestPack'); // `api.export` introduced in Meteor 0.6.5
    api.add_files("test-package.js", "client");
    api.add_files("server-test.js","server");
});

Npm.depends({
    "colors": "0.6.2"
});
