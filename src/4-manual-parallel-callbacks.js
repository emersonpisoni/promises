function task(name, ms, cb) {
  setTimeout(() => cb(null, `${name} ok`), ms);
}

let done = 0;
const results = [];
let finished = false;

function finishOnce(err) {
  if (finished) return; // defensive: avoid multiple finishes
  finished = true;

  if (err) {
    console.error("Finish with error:", err);
  } else {
    console.log("All done:", results);
  }
}

function markDone(i, value) {
  results[i] = value;
  done++;
  if (done === 3) finishOnce(null);
}

task("A", 200, (err, r) => {
  if (err) return finishOnce(err);
  markDone(0, r);
});

task("B", 100, (err, r) => {
  if (err) return finishOnce(err);
  markDone(1, r);
});

task("C", 150, (err, r) => {
  if (err) return finishOnce(err);
  markDone(2, r);
});