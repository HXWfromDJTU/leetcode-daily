// sum(2)(3) = 5
// sum(2, 3) = 5

var add = function () {
    var args = Array.prototype.slice.call(arguments, 0)
    var total = 0
    args.forEach(num => {
        total+=num
    })
    return total
}

const currying = fn =>
    judge = (...args) =>
        args.length >= fn.length
            ? fn(...args)
            : (...arg) => judge(...args, ...arg)

var sum = currying(add)

const res1 = add(2, 3, 8, 9)
const res2 = sum(2)(3)(3)(9)
console.log(res1, res2)