const mathOperations = require('../src/calculator');
 

describe("Calculator Tests", () => {

 test("Addition of 2 numbers", () => {

   // arrange and act

   var result = mathOperations.sum(1,2)

 

   // assert

   expect(result).toBe(3);

 });

 

 test("Subtraction of 2 numbers", () => {

   // arrange and act

   var result = mathOperations.diff(10,2)

 

   // assert

   expect(result).toBe(8); //updated to fail

 });


 test("Multiplication of 2 numbers", () => {

   // arrange and act

   var result = mathOperations.product(2,8)


   // assert

   expect(result).toBe(10); //updated to fail

 });



 test("Division of 2 numbers", () => {

  // arrange and act

  var result = mathOperations.divide(24,8)


  // assert

  expect(result).toBe(3);

});

//Added test
test("Exponential test", ()=>{
    var result = mathOperations.exponent(2,3)
    expect(result).toBe(8);
})

})