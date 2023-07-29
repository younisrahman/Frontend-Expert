// Function.prototype.myCall = function (thisContext, ...args) {
//   const symbol = Symbol();
//   thisContext[symbol] = this;
//   const returnValue = thisContext[symbol](...args);
//   delete thisContext[symbol];
//   return returnValue;
// };

// Function.prototype.myApply = function (thisContext, args = []) {
//   return this.myCall(thisContext, ...args);
// };

// Function.prototype.myBind = function (thisContext, ...args) {
//   return (...newArgs) => this.myApply(thisContext, [...args, ...newArgs]);
// };

// const obj = { num: 0 };

// function logNums(x, y) {
//   console.log(this.num, x, y);
// }

// logNums.myCall(obj, 1, 2);
// logNums.myApply(obj, [1, 2]);

// const boundFunction = logNums.myBind(obj, 1);

// boundFunction(2);
