getUser(id)
  .then(getOrders)
  .then(getInvoice)
  .then(send)
  .catch(handle)

// flat chain instead of nesting

// sequence is linear

// error handling centralized

// steps become composable units

// easy to insert/remove/reorder stages