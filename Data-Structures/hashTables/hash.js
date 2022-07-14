// Hash function
function hash(key, arraylen) {
    let total = 0
    for (let char of key) {
        // map "a" to 1, "b" to 2, "c" to 3, etc
        let value = char.charCodeAt(0) - 96
        total = (total + value) % arraylen
    }
    return total
}

console.log(hash("prime", 10))