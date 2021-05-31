// function doDat (onSuccess, onError) {

//     const n = parseInt(Math.random()*1000)

//     if (n % 2 === 0) {
//         setTimeout(() => onSuccess(n), 2000)
//     } else {
//         setTimeout(() => onError(n), 2000)
//     }

// }

// doDat(
//     (n) => console.log(`N es par ${n}`),
//     (n) => console.error(`N es impar ${n}`),
//     )


function doDat2 () {
    return new Promise ((resolve, reject) => {
        const n = parseInt(Math.random()*1000)
        if (n % 2 === 0) {
            setTimeout(() => resolve(n), 1000)
        } else {
            setTimeout(() => reject(n), 1000)
        }
    })
}

// doDat2()
// .then((response) => {console.log(`Success Promise ${response}`); return doDat2()})
// .then((response) => {console.log(`Success nro 2 ${response}`); return doDat2()})
// .then((response) => console.log(`llegamos hasta aca ${response}`))
// .catch((error) => console.error(`Success Error ${error}`))
// .finally(() => console.log(`y aca cerramos`))


async function doDat3 () {
    try {
        const n = await doDat2()
        console.log(`SUCCESS ${n}`)
    }

    catch(e) {
        console.error(`FAILED ${e}`)

    }
}

doDat3()





