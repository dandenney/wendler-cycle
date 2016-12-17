const test = QUnit.test;

test("Sync test", function(assert){
  assert.ok("Ok it's working");
});

test("Async test", function(assert) {
  const done = assert.async();
  assert.expect(1);

  setTimeout(function(){
    assert.ok("Yep. Async too!")
    done();
  }, 1);
});
