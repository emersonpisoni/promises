function task(name, delay, shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(`${name} failed`);
      } else {
        resolve(`${name} success`);
      }
    }, delay);
  });
}