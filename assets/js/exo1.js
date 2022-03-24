let eleves = [
    {
        nom: "Donald",
        age: 80,
        class: 'CP',
        note: [18, 14, 15, 13, 18]
    },
    {
        nom: "riki",
        age: 50,
        class: 'term',
        note: [18, 20, 16, 19, 15]
    },
    {
        nom: "qui",
        age: 15,
        class: '2nd',
        note: [20, 19, 15, 1, 5]
    },
    {
        nom: "mario",
        age: 36,
        class: 'CM2',
        note: [6, 5, 15, 1, 10]
    },
];

console.log(eleves);
let strJSON = JSON.stringify(eleves);
console.log(strJSON);