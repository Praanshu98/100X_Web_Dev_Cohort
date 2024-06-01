//

const numberList = [1, 2, 3, 4, 5];

const numberListImperative = [];

// Imperative

for (let element = 0; element < numberList.length; element++) {
    numberListImperative.push(numberList[element] * 2);
}

// Declaritive

const numberListDeclaritive = numberList.map((element) => element * 2);

console.log(numberListImperative);
console.log(numberListDeclaritive);
