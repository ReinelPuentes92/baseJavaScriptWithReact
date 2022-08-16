//Arrays

//const arrays = new Array();
const arrayExample = [1,2,3,4];
/*arrayExample.push(1);
arrayExample.push(2);
arrayExample.push(3);
arrayExample.push(4);*/

let arrayExample2 = [...arrayExample];
arrayExample2.push(5);

//Operaciones con map
const arrayExample3 = arrayExample2.map(function(number){
    return number * 3;
});

console.log(arrayExample);
console.log(arrayExample2);
console.log(arrayExample3);