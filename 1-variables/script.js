//1.1 Types simples

const name = 'Jacques'
let age = 80
let useless = 'something'

console.log(name, age, useless)

age += 1
useless = 14                    // Ici name n'est pas modifié donc on peut le laisser en constante.

console.log(name, age, useless)

//----------------------//
//1.2 Tableaux

const fruits = ['apple', 'pear', 'cherry']
const vegetables = ['potato', 'curlyflower', 'tomato']

console.log(fruits, vegetables)
// La déclaration const permet de créer une constante nommée accessible uniquement en lecture.
// Cela ne signifie pas que la valeur contenue est immuable,
// uniquement que l'identifiant ne peut pas être réaffecté.
fruits.push('banana')          // Ici on rajoute dans le tableau avec une méthode push
vegetables.pop()               // Ici on supprime le dernier élément avec la méthode pop

console.log(fruits, vegetables)

//----------------------//
//1.2 Objets

const settings = {
    sound: true,
    music: false,
    graphics: 'high',
    resolution: [1920, 1080]
}

let savedGame = {
    time: 384,
    score: 47,
    opponent: 'Lolo'
}

console.log(settings, savedGame)

savedGame = {}
settings.music = true
settings.resolution = [3840, 2160]

console.log(settings, savedGame)