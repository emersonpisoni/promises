step1()
  .then(step2)
  .then(step3)
  .then(success)
  .catch(handle)

// any rejection skips to nearest catch
// thrown errors also become rejections
// automatic propagation
// single error boundary possible