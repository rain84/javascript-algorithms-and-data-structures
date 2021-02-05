{
    class Promise {
        constructor() {}

        /** @deprecated */
        methodName = (...params: any[]) => {}
    }
}

for (let index = 0; index < 2; index++) {
    console.log(index)

    // new Promise((resolve, reject) => (index ? resolve() : reject()))
    //     .then(() => console.log(`${index} resolved`))
    //     .catch(() => console.log(`${index} rejected`))
}
