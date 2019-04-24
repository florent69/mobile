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

// keys.push(Object.keys(bus))
// values.push(Object.values(bus))

for (let i = 0 ; i<Object.keys(bus).length ; i++) {
    console.log(Object.keys(bus)[i],':',Object.values(bus)[i])
} // Avec Object.keys & Object.values : on affiche les objets d'objet également

for (var i in bus) {
    console.log(i + ' ' + bus[i])
} // Ici on ne peut pas afficher ce qu'il se trouve dans l'objet garage

//3.2 Object.values
console.log(data)
let text = []
for (var iData in data) {
    text.push(Object.values(data[iData].texte).join(''))
console.log(iData + ' ' + text )
}