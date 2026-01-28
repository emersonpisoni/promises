const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve('Operation completed successfully!');
        } else {
            reject(new Error('Something went wrong!'));
        }
    }, 1000);
});

promise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error.message);
    });