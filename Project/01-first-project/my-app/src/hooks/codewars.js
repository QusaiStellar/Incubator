/*
describe("Narcissistic Function", function () {
   it("should find small numbers are all narcissistic", function () {
      Test.assertEquals(narcissistic(7), true, "7 is narcissistic");
   });

   it("should find these numbers are narcissistic", function () {
      Test.assertEquals(narcissistic(371), true, "371 is narcissistic");
   });
});
*/

var countSheep = function (num){
   let result = '';
   if (num === 0) {
     return result;
     }
   for (let i = 0; i < num; i++) {
     result += `${i+1} sheep...`;
   }
   return result;
 };

console.log(countSheep(3));
