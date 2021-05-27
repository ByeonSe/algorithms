// mocha and chai
//bring in insertion library 
const assert = require('chai').assert;
const sayHello = require('../app').sayHello;
const addNumbers = require('../app').addNumbers;

const app = require('../app')

descripbe('App', function () {
    it('app should return hello', function () {
        assert.equal(app(), 'hello');
    });

    it('sayHello should return type string', function () {
        let result = sayHello()
        assert.typeOf(result, 'resulting');
    });

    it('addNumbers should be above 5', function(){
        let result = addNumbers(5,5);
        assert.isAbove(result, 5)
    });

    it('addNumbers should return type number', function () {
        let result = addNumbers(5,5)
        assert.typeOf(result, 'number');
    })

})

// test runs: npm run test 
// npm run test -s 

// unit test
// easy to understand 
// 