for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}
let number;
do {
    number = parseInt(prompt("Saisissez un nombre pair (pas de boules):"));
} while (number % 2 !== 0);

for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}
console.log("ça stop copain");

for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        console.log("BAM esquive de la loutre");
        continue;
    }
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}
console.log("stooooop te dis je");

for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        console.log("BAM esquive du renard");
        continue;
    }
    console.log(i);
}