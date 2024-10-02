let myIndex = 1;
while (myIndex <= 10) {
    console.log(myIndex);
    myIndex++;
}

for (let i = 2; i <= 20; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    console.log(`7 * ${i} = ${7 * i}`);
}

let array1 = [1, 2, 3, 4, 5];
let myArrayFunction = 0;
while (myArrayFunction < array1.length) {
    console.log(array1[myArrayFunction]);
    myArrayFunction++;
}

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array2.length; i++) {
    if (array2[i] === 7) {
        break;
    }
    console.log(array2[i]);
}

let number = 10;
for (let i = 1; i < 20; i++) {
    if (i >= number) {
        break;
    }
    console.log(i);
}

let myNewNumber = 1;
while (myNewNumber <= 20) {
    if (myNewNumber % 3 === 0) {
        myNewNumber++;
        continue;
    }
    console.log(myNewNumber);
    myNewNumber++;
}
