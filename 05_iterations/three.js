//for of

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"

for (const greet of greetings) {
    if (greet === " ") {
        continue
    }
    // console.log(`Each char is ${greet}`);
}

//maps

const map = new Map()
map.set("DC", "Batman")
map.set("MCU", "Ironman")
map.set("IN", "Shaktiman")

for (const [key, value] of map) {
    console.log(key, "=>", value);
}