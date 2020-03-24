
// name = 'window'
// function showName() {
//     console.log(this.name)
// }

// var person1 = {
//     name: 'person1',
//     sayName: showName
// }

// var person2 = {
//     name: 'person2',
//     sayName: function() {
//         const fun = person1.sayName
//         fun()
//     }
// }

// person1.sayName()
// person2.sayName()

// name = 'window'

// function A() {
//     this.name = 'FunctionA'
//     this.getName = function() {
//         console.log(this)
//     }
// }


// const a = new A()
// const test = a.getName
// test()

// console.log(this)
// name = 'window'

// function getName() {
//     console.log(this.name)
// }

// const a = {
//     name: 'objA'
// }

// getName.apply(a)
// getName.call(a)
// getName.apply()
// getName.call()



// name = 'window'
// b = () => {
//     console.log(this)
//     console.log(this.name)
// }

// console.log(this)



// es5
name = 'window'

function A(name) {
    this.name = name
}
A.prototype.getName = function() {
    console.log(this.name)
}

const a = new A('objA')
const test = a.getName
test()

// es6
name = 'window'
class A {
    constructor(name) {
        this.name = name
    }

    getName() {
        console.log(this.name)
    }
}

const a = new A('objA')
const test = a.getName
test()


class C {
    constructor(name) {
        this.name = name
    }
    getName = () => {
        console.log(this.name)
    }
}

const c = new C('ClassC')
const test = c.getName
test()


// name = 'window'

// const objA = {
//     name: 'objA',
//     getName: ()=>{
//         console.log(this.name)
//     }
// }

// const objB = {
//     name: 'objB',
//     getName: ()=>{
//         console.log(this.name)
//     }
// }

// const test = objA.getName
// test()