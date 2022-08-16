//Condicion normal
const active = true;
/*let msj = '';

if (!active) {
    msj = 'Active';
} else {
    msj = 'Inactive';
}*/

//validacion ternaria
//const msj = (!active) ? 'Active' : 'Inactive'; 
const msj = (active) && 'Active';

console.log(msj);



