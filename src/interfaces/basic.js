import { task } from "../util.js";

task("A")
  .then(resultA => {
    console.log(resultA);
    return task("B");
  })
  .then(resultB => {
    console.log(resultB);
    return task("C");
  })
  .then(resultC => {
    console.log(resultC);
  })
  .catch(err => {
    console.error("Error:", err);
  })
  .finally(() => {
    console.log("All done");
  });