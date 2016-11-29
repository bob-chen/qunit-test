QUnit.module("Group DOM Test", {
	setup: function(){
		console.log("Test setup");
	},
	teardown: function(){
		console.log("Test teardown");
	}
})
QUnit.log(function( details ) {
  console.log( "Log: ", details.result, details.message );
});
QUnit.test( "Appends a span", function( assert ) {
  var fixture = $( "#qunit-fixture" );
  fixture.append( "<span>hello!</span>" );
  assert.equal( $( "span", fixture ).length, 1, "div added successfully!" );
});

QUnit.test( "Appends a span again", function( assert ) {
  var fixture = $( "#qunit-fixture" );
 
  fixture.append("<span>hello!</span>" );
  assert.equal( $( "span", fixture ).length, 1, "span added successfully!" );
});

QUnit.module("Group Async Test")
QUnit.test( "a test", function( assert ) {
  var done = assert.async(); 
  var $body = $( "body" );
 
  $body.on( "click", function() {
    assert.ok( true, "body was clicked!" );
    done();
    $body.unbind('click');
  });
 
  setTimeout(function(){
  	console.log("To click body")
  	$body.trigger( "click" );
  }, 1000)
  
});

// QUnit.test( "a test 1", function( assert ) {
//   QUnit.stop()
//   var $body = $( "body" );
 
//   $body.on( "click", function() {
//     assert.ok( true, "body was clicked!" );
//     QUnit.start();
//     $body.unbind('click');
//   });
 
//   setTimeout(function(){
//   	console.log("To click body")
//   	$body.trigger( "click" );
//   }, 1000)
  
// });

// QUnit.asyncTest( "a test 2", function( assert ) {
//   var $body = $( "body" );
 
//   $body.on( "click", function() {
//     assert.ok( true, "body was clicked!" );
//     QUnit.start();
//     $body.unbind('click');
//   });
 
//   setTimeout(function(){
//   	console.log("To click body")
//   	$body.trigger( "click" );
//   }, 1000)
  
// });


// // create a function that counts down to `start()`
// function createAsyncCounter(count) {
//     count = count || 1; // count defaults to 1
//     return function () { --count || QUnit.start(); };
// }

// // an async test that expects 2 assertions
// QUnit.asyncTest("testing something asynchronous", 2, function(assert) {
//     var countDown = createAsyncCounter(1), // the number of async calls in this test
//         x = new X;

//     // A `done` callback is the same as adding a `success` handler
//     // in the ajax options. It's called after the "real" success handler.
//     // I'm assuming here, that `fire()` returns the xhr object
//     x.fire().done(function(data, status, jqXHR) {
//         assert.ok(data.ok);
//         assert.equal(data.value, "123");
//     }).always(countDown); // call `countDown` regardless of success/error
// });


