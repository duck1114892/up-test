var number = [1, 2, 3, 4, 6, 9]
console.log(finNumber(number, (x) => { return x > 2 }))

function finNumber(numbers, callback) {
    const arr = []
    for (var x of numbers) {
        if (callback(x)) {
            arr.push(x)
        }
    }
    return arr
}