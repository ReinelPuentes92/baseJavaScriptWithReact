import {heroes,owners} from '../data/heroes';

//console.log(heroes);
//console.log(owners);

export const getHeroeById = (id) => {
    //return heroes.find(h => h.id == id);
    /*return heroes.find((heroe) => {
        if(heroe.id === id){
            return true;
        } else{
            return false;
        }
    });*/
    return heroes.find((heroe) => heroe.id === id);
};

//console.log(getHeroeById(2));

export const getHeroresByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

//console.log(getHeroresByOwner('Marvel'));

//Multiples exportaciones, y exportaciones por defecto

