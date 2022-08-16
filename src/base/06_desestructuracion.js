// Desestructuracion
// Asignacion Desestructurante

const person = {
    nombre: 'Reinel',
    edad: 30,
    clave: 'Rey'
};

const {nombre, edad} = person;

console.log(nombre);
console.log(edad);

/*console.log(person.nombre);
console.log(person.edad);
console.log(person.clave);*/

const returnPerson = (person) => {
    const {nombre, edad, clave} = person

    console.log('Print object by parts');
    console.log(nombre, edad, clave);

    console.log('Print full object');
    console.log(person);
};

returnPerson(person);

//Desestructuracion por partes
const returnPersonByParts = ({nombre, edad, clave, rango = 'Ingeniero'}) => {
    console.log('Define value objects');
    console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad
    }
};

returnPersonByParts(person);

const personKey = returnPersonByParts(person);

console.log('Return different object');
console.log(personKey);

const userContext = ({clave, edad}) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.9876,
            lng: -34.7865
        }
    }
}

const {nombreClave, anios, latlng:{lat,lng}} = userContext(person);
console.log('Return different object by select');
console.log(nombreClave);
console.log(lat,lng);