// let element;

// element = document;
// element = document.all;
// element = document.all[200];
// element = document.head;
// element = document.body;
// element = document.domain;
// element = document.characterSet;
// element = document.URL;
// element = document.contentType;

// // All links
// element = document.links;
// element = document.links[2];
// element = document.links[2].id;
// element = document.links[2].className;
// element = document.links[2].classList;

// // Forms
// element = document.forms;
// element = document.forms[0];
// element = document.forms[0].id;
// element = document.forms[0].method;
// element = document.forms[0].action;
// element = document.forms[0].classList;
// element = document.forms[0].className;

// // Images
// element = document.images;

// // Scripts
// element = document.scripts;

// // Looping all the images
// let images = document.images;

// let imagesArray = Array.from(images);

// for (let key in imagesArray) {
//     console.log(imagesArray[key]);
// }

// console.log(element);

// Selecting DOM elements
// let heading = document.getElementById('heading');

// console.log(heading.id);
// console.log(heading.className);
// console.log(heading.textContent);

// // Change CSS 
//  heading.style.color = '#FFFFFF';
//  heading.style.backgroundColor = '#000000';
//  heading.style.padding = '20px';
//  heading.style.marginTop = '50px';


//  // Change Text
//  heading.textContent = "Online Courses Reloaded";
//  //  Another way
//  heading.innerText = 'New Heading';

// Query Selector

// const learningHeading = document.querySelector('#learn');

// console.log(learningHeading);

// Selecting a class
// const tagline = document.querySelector('.tagline');

// const newText = tagline.textContent.replace('$15', '$12');

// tagline.textContent = newText;

// Selecting a tag

// let heading = document.querySelector('h2');

// console.log(heading);

// Nest your selectors with a CSS syntax
let firstImage = document.querySelector('.card img');
console.log(firstImage);

// querySelector supports nth child, first child and last child
let link;

link = document.querySelector('#primary a:first-child');
link = document.querySelector('#primary a:last-child');
link = document.querySelector('#primary a:nth-child(3)');


console.log(link);
