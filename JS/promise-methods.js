Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then(resolve).catch(reject);
    });
  });
};

Promise.myAny = function (promises) {
  return new Promise((resolve, reject) => {
    let rejectedCount = 0;
    promises.forEach((promise) => {
      promise.then(resolve).catch((_) => {
        rejectedCount++;
        if (rejectedCount === promises.length) {
          reject("all promises rejected");
        }
      });
    });
  });
};

Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    let resolveCount = 0;
    const results = [];

    promises.forEach((promise, i) => {
      promise
        .then((value) => {
          results[i] = value;
          resolveCount++;
          if (resolveCount === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
};

Promise.myAllSettled = function (promises) {
  return new Promise((resolve) => {
    let settledCount = 0;
    const results = [];

    promises.forEach((promise, i) => {
      promise
        .then((value) => {
          results[i] = { status: "fulfilled", value };
        })
        .catch((error) => {
          results[i] = { status: "rejected", error };
        })
        .finally(() => {
          settledCount++;
          if (settledCount === promises.length) {
            resolve(results);
          }
        });
    });
  });
};
