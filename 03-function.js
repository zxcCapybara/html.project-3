// function greet(name) {
//     console.log('Hello -', name )
// }
// const greet2 = function (name) {
//     console.log('2 Hello -', name )
// }


// greet('Maxim')
// greet2('Maxim')

// console.dir(greet)

// setTimeout(function() {
//     greet('Maxim2')
// }, 1500)

// let counter = 0
// const interval = setInterval(function() {
//     // if (counter === 5) {
//     //     // clearInterval(interval)
//     // } else {
        
//     // }

//     console.log(++counter)
// }, 10)



// function greet(name) {
//     console.log('Hello -', name )
// }

// const arrow = (name, age) => {
//     console.log('Hello -', name, age )
// }
// const arrow2 = (name, age) => console.log('Hello -', name, age )
// arrow2('Maxim', 18)


// function pow(num, exp) {
//     return Math.pow(num, exp)
// }
// console.log(pow(2,3))

// const pow2 = (num, exp) => Math.pow(num, exp)

// console.log(pow2(2,3))

const sum = (a = 40, b = a / 2) => a + b

// console.log(sum(20, 13))
// console.log(sum())

function sumAll(...numbers) {
    // let res = 0
    // for (let num of numbers) {
    //     res += num
    // }
    // return res
    return numbers.reduce((acc, cur) => acc += cur, 0)
}

console.log(sumAll(1, 2, 3, 4, 5))


function createPerson (name) {
    return function (lastname) {
        console.log(name + ' ' + lastname)
    }
}

const addLastName = createPerson("Maxim1")
addLastName('Capybara')
addLastName('Petrov')









