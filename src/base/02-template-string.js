const firstName = 'Reinel';
const lastName = 'Puentes';

//const fullName = firstName + " " + lastName;
const fullName = `${firstName} ${lastName}`;

console.log(fullName);

function getHello(fullName){
    return `Hola ${fullName}`;
}

console.log(`This is a text: ${getHello(fullName)}`); 