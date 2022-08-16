import {getHeroeById} from '../base/08_imports_exports';

/*const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const heroe = getHeroeById(14);
        resolve(heroe);
        //reject('Heroe has not found');        
    }, 2000);
});

promise.then((heroe) => {
    console.log('then heroe', heroe);
})
.catch(error => console.warn(error));*/

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            const heroe = getHeroeById(id);
            if(heroe){
                resolve(heroe);
            } else{
                reject('Heroe has not found');
            }
            
        }, 2000)
    });
};

getHeroeByIdAsync(12)
    .then(heroe => console.log('Then heroe', heroe))
    .catch(console.warn);


