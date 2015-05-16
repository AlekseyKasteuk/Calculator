// var chai = require('chai')
//   , expect = chai.expect
//   , should = chai.should();

var should = require('chai').should() //actually call the function
  , foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };
var a = require('../js/fortests');
console.log(a);

foo.should.be.a('string');
foo.should.equal('bar');
foo.should.have.length(3);
beverages.should.have.property('tea').with.length(3);