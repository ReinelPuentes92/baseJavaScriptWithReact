const saluda = function (name){
    return `Hello, ${name}`;
}

const saludaTwo = (name) => {
    return `Hello, ${name}`;
}

const saludaThree = (name) => `Hello, ${name}`;

//saluda = 30;

console.log(saluda);
console.log(saludaTwo('Reinel'));
console.log(saludaThree('Fernando'));

//Retorno de objetos
const getUser = () =>{
    return {
        uid: 'abcdfe',
        userName: 'El Papi'
    }
}

console.log(getUser());

const getUsers = () => ({
    uid: 'aksjdahsuidhu865#$%&/',
    userName: 'El Fercho'
});

console.log(getUsers());

//funcion estructurada inplicitamente
function getUserActive(name){
    return {
        uid: 'asdfgjkl456789"#$%',
        userName: name
    }
};

const userActive = getUserActive('Reinel Fernando Puentes Moreno');

console.log(userActive);

//funcion basada en flecha
const getUserActiveTwo = (name) => ({
    uid: 'asdfg',
    userName: name
});

const userActiveTwo = getUserActiveTwo('Laura Constanza Puentes Moreno');

console.log(userActiveTwo);