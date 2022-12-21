for (let i = 1; i <= 10; i++) {
    console.log(i);
}


let ia = 10;
while (ia >= 1) {
    console.log(ia);
    ia--;
}

let i = 2;
do {
    console.log(i);
    i += 2;
} while (i <= 20);

const words = ["un", "deux", "trois"];
for (const word of words) {
    console.log(word);
}

let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);

let num;
while (num <= 0) {
    num = Number(prompt("Entrez un nombre positif :"));
}

for (let i = 1; i <= 10; i++) {
    console.log(i);
    if (i === 5) {
        break;
    }
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}