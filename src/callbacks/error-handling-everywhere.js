step1((err, r1) => {
  if (err) return handle(err)

  step2(r1, (err, r2) => {
    if (err) return handle(err)

    step3(r2, (err, r3) => {
      if (err) return handle(err)

      success(r3)
    })
  })
})

// repeated error branches
// easy to forget one check
// inconsistent handling
// duplicated cleanup logic