//4.1 Découverte

const [a, ,b] = [1, 2, 3, 4]   // destructuring
console.log(a)
console.log(b)

const {first, last, age} = {first: 'Paul', last: 'Henta', age: 35}
console.log(first)
console.log(last)
console.log(age)

//4.2 Application

console.log(data)

for (var iData in data) {
    let texte = Object.values(data[iData].texte).join('')
    let start = Object.values(data[iData].dateDebut).join('')
    let end = Object.values(data[iData].dateFin).join('')
    let [a, b, c] = [texte, start, end]

    console.log(iData + ' ' + a + 'Date de début: ' +  b + ' ; Date de fin: ' + c)
}
