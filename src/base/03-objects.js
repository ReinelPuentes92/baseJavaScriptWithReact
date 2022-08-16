//console.log('Hola React');

const person = {
    firstName: 'Reinel',
    lastName: 'Puentes',
    edad: 30,
    direccion: {
        city: 'Bogotá',
        zip: 11089,
        lat: 14.6789,
        lng: 56.2348
    }
};

//console.table(person);
//console.log(person);

//Se realiza la clonacion del objeto person a personTwo y se modifica el valor de la propiedad firstName.
const personTwo = {...person};
personTwo.firstName = 'Peter';

console.log(person);
console.log(personTwo);