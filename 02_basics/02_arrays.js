
const marvelHeros = ["thor", "spiderman", "ironman"]
const dcHeros = ["superman", "flash", "batman"]

// marvelHeros.push(dcHeros)

console.log(marvelHeros);

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);

const allNewHeros = [...marvelHeros,...dcHeros]
// console.log(allNewHeros);

const annotherArray = [1, 2, 3, [4, 5, 6], 7, [6,7, [4, 5]]]

const realAnotherArray = annotherArray.flat(Infinity)

console.log(realAnotherArray);

