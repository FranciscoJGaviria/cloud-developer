import { add, divide, multiply, concat } from './units';

import { expect } from 'chai';
import 'mocha';

describe('add function', () => {

  it('should add two and two', () => {
    const result = add(2,2);
    expect(result).to.equal(4);
  });

  it('should add -2 and two', () => {
    const result = add(-2,2);
    expect(result).to.equal(0);
  });

});

describe('divide', () => {

  it('should divide 6 by 3', () => {
    const result = divide(6,3);
    expect(result).to.equal(2);
  });

  it('should divide 5 and 2', () => {
    const result = divide(5,2);
    expect(result).to.equal(2.5);
  });

  it('should throw an error if div by zero', () => {
    expect(()=>{ divide(5,0) }).to.throw('div by 0')
  });

});

describe('multiply', () => {
  it ('should multiply 20 by 3', () => {
    const a = 20;
    const b = 3;

    const result = multiply(a, b);

    expect(result).to.equal(60);
  });

  it ('should return zero', () => { 
    const a = 0;
    const b = 1012;

    const result = multiply(a, b);

    expect(result).to.equal(0)
  });
})

// @TODO try creating a new describe block for the "concat" method
// it should contain an it block for each it statement in the units.ts @TODO.
// don't forget to import the method ;)
describe('Concat', () => {
  it('Should concat two strings', () => {
    const a = 'Pacho '
    const b = 'Gaviria'

    const result = concat(a, b)

    expect(result).to.equal('Pacho Gaviria')
  })

  it('Should fail with the first param as null', () => {
    const a: string = null
    const b = 'Gaviria'
    
    expect(() => concat(a, b), 'Both parameters are required')
  })

  it('Should fail with the second param as undefined', () => {
    const a = 'Pacho '
    const b: string = undefined

    expect(() => concat(a, b), 'Both parameters are required')
  })


  it('Should concat two empty string', () => {
    const a = ''
    const b = ''

    const result = concat(a, b)

    expect(result).to.equal('')
  })
})