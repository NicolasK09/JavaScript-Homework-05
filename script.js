//Homework 1
const div = document.createElement('div');
div.setAttribute('id', 'myDiv');


const img = document.createElement('img');
img.setAttribute('src', 'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg');
img.setAttribute('alt', 'image');


const h2 = document.createElement('h2');
h2.setAttribute('class', 'title');
h2.textContent = 'image title';


div.appendChild(img);
div.appendChild(h2);


document.body.appendChild(div);


//Homework 2

let array = [23, 45, 32, 5, 87, 7, 3, 98];

array.sort(function(a, b){
    return a - b;
});

let minNumber = array[0];
console.log(minNumber);

//Homework 3 
let str = '12345';
let digits = str.split('').map(Number);

let sum = digits.reduce((a,b) => a + b, 0);
console.log(sum);

let number = parseInt(str);
console.log(number);

//Homework 4
let array1 = ['html', 100, 'css', 'javascript', 25, 10, 'python', 11];

let numbers = array1.filter(item => typeof item === 'number');

console.log(numbers);

//Homework 5
let array2 = [14, 150, 'css', null, 'javascript', 25];

let transformedArray = array2.map(item => {
  if (typeof item === 'number') {
    return item * item;
  } else if (typeof item === 'string') {
    return item.toUpperCase();
  } else {
    return item;
  }
});

console.log(transformedArray);


//Homework 6

let str1 = 'javascript';
let result = '';

for (let i = 0; i < str.length; i++) {
  result += str[i] + ' ';
}

console.log(result);
