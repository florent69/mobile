//2.1 Fonctions simples
const sayHello = () => {
    console.log('Hello')
}

const sayMyName = (first, last) => {
    console.log(first, last)
}

const sayMyAge = (age) => {
    console.log('You are ' + age + ' years old')
}

sayHello()
sayMyName('Odile', 'Crok')
sayMyAge(23)

//----------------------//
//2.2 this

const object = {                    // constante objet qui est un objet {}
    color: 'red',                   // clé et attribut couleur : rouge
    shape: 'circle',                // forme : rond
    threeDimensions: false,         // 3dimensions : false
    showThis: () => {               // méthode showThis qui montre l'objet dans la console
        console.log(object)         // Donc la fonction flèche fonctionne différemment à ce niveau
    }                               // This ne se réfère pas à l'objet coourant du coup
}

object.showThis()

//----------------------//
//2.3 Application

const odile = {
    name: {
        first: 'Odile',
        last: 'Crok'
    },
    age: 23,
    sayHello: () => {
        console.log('Hello')
    },
    sayMyName: () => {
        console.log(odile.name.first + ' ' + odile.name.last)
    },
    sayMyAge: () => {
        console.log('You are ' + odile.age + ' years old')
    }
}

odile.sayHello()
odile.sayMyName()
odile.sayMyAge()