// step1

let numbers = [1, 2, 3, 4];
let newNumbers = [];

console.log(numbers)

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 !== 0) {
        newNumbers.push(numbers[i] * 2);
    }
}

console.log("The doubled numbers are", newNumbers);

// find the odd number by filter

let oddNumbers = numbers.filter(i => i % 2 !== 0);
console.log(oddNumbers);

// multiple the odd number by map

let doubleoddNumbers = oddNumbers.map(i => i * 2 );
console.log(doubleoddNumbers);


// step 2


let monday = [
    {
        name     : 'Write a summary HTML/CSS',
        duration : 180
    },
    {
        name     : 'Some web development',
        duration : 120
    },
    {
        name     : 'Fix homework for class10',
        duration : 20
    },
    {
        name     : 'Talk to a lot of people',
        duration : 200
    }
];

let tuesday = [
    {
        name     : 'Keep writing summary',
        duration : 240
    },
    {
        name     : 'Some more web development',
        duration : 180
    },
    {
        name     : 'Staring out the window',
        duration  : 10
    },
    {
        name     : 'Talk to a lot of people',
        duration : 200
    },
    {
        name     : 'Look at application assignments new students',
        duration : 40
    }
];

let tasks = monday.concat(tuesday);
console.log(tasks);

// convert the hours to minuts

tasks.forEach(function(i){
    i.duration = i.duration / 60;
    return tasks;
})

// filter out two hours or more

let twohour = tasks.filter(x => x.duration >= 2);
console.log(twohour);

// Multiply the each duration by map

let sum = 5
let billing = twohour.map(function(i){
    return i.duration * sum;
})
console.log(billing)


const amount = billing.reduce(function(x,y) {
    return x + y;
});
console.log(`my total amunt is ${amount} €`);


