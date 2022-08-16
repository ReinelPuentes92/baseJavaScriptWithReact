const personDragon = ['Goku', 'Vegueta', 'Trunks'];

const [,,p3] = personDragon;

console.log(p3);

const returnArray = () => {
    return ['ABC', 12345];
};

const [letters, numbers] = returnArray();
console.log(letters, numbers);

const usersState = (value) => {
    return [value, ()=>{console.log('Hello World')}];
};

const [nombre, setNombre] = usersState('Goku');
console.log(nombre);
setNombre();