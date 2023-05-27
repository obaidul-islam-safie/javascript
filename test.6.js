//aray thake duplicate number ber kora

const numbers = [1, 5, 6, 8, 5, 1, 10, 9, 6, 7, 3];

const duplicates = numbers.filter(function(value, index, array){
    return array.indexOf(value) !== index
});
console.log(duplicates);