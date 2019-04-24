//3.1 Object.keys

const bus = {
    vehicle: 'Urbanway CNG 12',
    id: 3221,
    line: 'C6',
    paint: 'chrono',
    garage: {
        name: 'Sassenage',
        place: '47'
    },
    equipments: ['sae', 'tft', 'speech']
}
// let keys = []
// let values = []
//
// keys.push(Object.keys(bus))
// values.push(Object.values(bus))
//
// for (let i = 0 ; i<keys.length ; i++) {
//     console.log(keys[i] + ' ' + values[i])
// }
for (var i in bus) {
    console.log(i + ' ' + bus[i])
}
//3.2 Object.values
console.log(data)
let text = []
for (var iData in data) {
    text.push(Object.values(data[iData].texte).join(''))
console.log(iData + ' ' + text )
}