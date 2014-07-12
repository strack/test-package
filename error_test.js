Tinytest.add("test error function", function(test) {
test.equal(0, 0);

Errors.throw('A new error!');

});