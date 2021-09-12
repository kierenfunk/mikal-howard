const promiseWrapper = (promise) => {
  // Don't modify any promise that has been already modified.
  if (promise.isFulfilled) return promise;

  // Set initial state
  let isRejected = false;
  let isFulfilled = false;

  // Observe the promise, saving the fulfillment in a closure scope.
  const result = promise.then(
    (v) => {
      if ('error' in v) isRejected = true;
      else isFulfilled = true;
      return v;
    },
    (e) => {
      isRejected = true;
      throw e;
    },
  );

  result.isFulfilled = () => isFulfilled;
  result.isPending = () => !(isFulfilled || isRejected);
  result.isRejected = () => isRejected;
  return result;
};

export default promiseWrapper;
