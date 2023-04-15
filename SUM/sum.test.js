const Sum = require('./sum')

describe('Test Sum', ()=>{
  it('is the Sum of two numbers' , ()=>{
    expect(Sum(2,3)).toBe(5);
  })

  
})