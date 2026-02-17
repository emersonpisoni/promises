// Simulates a buggy 3rd-party async API that calls the callback twice.
function buggyApi(cb) {
  setTimeout(() => cb(null, "first result"), 100);
  setTimeout(() => cb(null, "second result (BUG)"), 200);
}

let calls = 0;

buggyApi((err, result) => {
  calls++;
  console.log(`Callback called #${calls}:`, result);

  // In a real system this could mean:
  // - sending payment twice
  // - writing duplicate rows
  // - calling res.send twice (Express error)
});