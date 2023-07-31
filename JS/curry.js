function curry(callback) {
  const curriedCallback = (...args) => {
    if (args.length === 0) return callback();

    return (...otherArgs) => {
      if (otherArgs.length === 0) return callback(...args);

      return curriedCallback(...args, ...otherArgs);
    };
  };
  return curriedCallback;
}

const sum = (...numbers) =>
  numbers.reduce((total, number) => total + number, 0);
const currierSum = curry(sum);

console.log(currierSum());
console.log(currierSum(1)());
console.log(currierSum(1)(2)());
console.log(currierSum(1, 2)(3)(4, 5, 6)());
console.log(currierSum(1));
console.log(currierSum(1, 2)(3));
