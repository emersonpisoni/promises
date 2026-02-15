getUser(id, (err, user) => {
  if (err) return handle(err)

  getOrders(user, (err, orders) => {
    if (err) return handle(err)

    getInvoice(orders, (err, invoice) => {
      if (err) return handle(err)

      send(invoice)
    })
  })
})

// nesting depth grows with each step
// duplicated error checks
// hard to rearrange steps
// hard to reuse intermediate logic
// control flow tied to indentation