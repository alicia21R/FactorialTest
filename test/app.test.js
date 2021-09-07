// const { assert } = require ('chai')
const chai = require('chai')
const Compute = require('../app')
const assert = chai.assert

describe("factorial",() =>{
    const compute = new Compute();
    it("should return 1 as factorial for 0", () => {    
        assert.equal(compute.computeFactorial(0), 1);  
    });
    it("should return 1 as factorial for 1", () => {    
        assert.equal(compute.computeFactorial(1), 1);  
    });
    it("should return 6 as factorial for 3", () => {    
        assert.equal(compute.computeFactorial(3), 6);  
    });


})

