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

function narcissistic(value) {

   const arr = value.toString().split('');
   const result = [];
   for (let i = 0; i < arr.length; i++) {
      result.push(Math.pow(arr[i], arr.length));
   }

   return result.reduce((prev, curr) => prev + curr).toString() == value;
}
// eslint-disable-next-line no-console
console.log(narcissistic(371));
