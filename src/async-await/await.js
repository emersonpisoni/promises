function getUser() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("User fetched");
      resolve({ id: 1, name: "Alice" });
    }, 1000);
  });
}

function getOrders() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Orders fetched");
      resolve(["order1", "order2"]);
    }, 1000);
  });
}

async function run() {
  try {
    await getUser();
    const orders = await getOrders();

    console.log("Orders:", orders);
  } catch (err) {
    console.log("Error:", err);
  }
}

run();