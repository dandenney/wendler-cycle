const test = QUnit.test;

test("Sync test", function(assert){
  let input = $('#1rm');
  let program = input.calculate();

  assert.deepEqual(program, [{week: 1}, {week: 2}, {week: 3}, {week: 4}]);
});

test("Async test", function(assert) {
  const done = assert.async();
  assert.expect(1);

  setTimeout(function(){
    assert.ok("Yep. Async too!")
    done();
  }, 1);
});
