const num = 52
const float = 52.52
const pow = 10e3
const big = 1_000_000
const negative = -10


// console.log(Number.MAX_SAFE_INTEGER)

// console.log(Math.pow(2, 53) - 1)

// console.log(Number.MIN_SAFE_INTEGER)

// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)
// console.log(Number.POSITIVE_INFINITY)
// console.log(Number.NEGATIVE_INFINITY)
// // console.log(1/0)
// console.log(Number.isFinite(1 / 0))
// const  weird = 23 / undefined
// console.log(Number.isNaN(weird))
// console.log(Number.isNaN(12))


// const strInt = "52"
// const strFloat = '52.52'

// console.log(Number(strInt))
// console.log(Number(strFloat))

// console.log(Number.parseInt(strInt))
// console.log(Number.parseFloat(strFloat))

// console.log(+strInt, +strFloat)

// console.log(+(0.1 + 0.2).toFixed(1))

// console.log(BigInt(Number.MAX_SAFE_INTEGER) + 1231321312n)
// console.log(Math.sqrt(25))
// console.log(Math.pow(2, -3))
// console.log(Math.abs(-52))
// console.log(Math.max(2, 5, 52, 198, 1))


const myNum = 5.9
// console.log(Math.floor(myNum))
// console.log(Math.ceil(myNum))
// console.log(Math.round(myNum))
// console.log(Math.trunc(myNum))
// console.log(Math.random())

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max-min + 1) + min)
}

const num1 = getRandomNumber(10, 100)

console.log(num1)




