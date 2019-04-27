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
// let firstImage = document.querySelector('.card img');
// console.log(firstImage);

// // querySelector supports nth child, first child and last child
// let link;

// link = document.querySelector('#primary a:first-child');
// link = document.querySelector('#primary a:last-child');
// link = document.querySelector('#primary a:nth-child(3)');


// console.log(link);

// getElementsByClassName

// const links = document.getElementsByClassName('link');

// links[0].style.color = 'red';

// links[0].textContent = "New Text";

// console.log(links[0]);

// Say we wanna get link with Id #primary

// const primaryLinks = document.querySelector('#primary').getElementsByClassName('link');

// console.log(primaryLinks); 

// //getElementsByTagName

// const images = document.getElementsByTagName('img');
// // console.log(images[0].id);

// // Convert HTML Collection into array
// imagesArray = Array.from(images);

// imagesArray.forEach(function(image){
//     console.log(image);
// });
// console.log(imagesArray);

// const courses = document.querySelectorAll('.card h4');

// const coursesArray = Array.from(courses);
// coursesArray.forEach(function(course){
//     console.log(course);
// });
// console.log(courses); 

// // Select odd links
// const oddLinks = document.querySelectorAll('#primary a:nth-child(odd)');

// oddLinks.forEach(function(odd){
//     odd.style.backgroundColor = 'red';
//     odd.style.color = 'white';
// })


// // Select even links
// const evenLinks = document.querySelectorAll('#primary a:nth-child(even)');

// evenLinks.forEach(function(even){
//     even.style.backgroundColor = 'green';
//     even.style.color = 'white';
// })

// Changing add-to-cart button text

// const addToCartBtns = document.querySelectorAll('.add-to-cart');

// addToCartBtns.forEach(function(btn){
//     btn.textContent = "New Text";
// });

//  

// const navigation = document.querySelector('#primary');
// let element;
// // element = navigation.childNodes;
// // element = navigation.children;
// // 1 = element
// // 2 = Attribute
// // 3 = Text Nodes
// // 8 = Comments
// // 9 = document
// // 10 = doctype

// element = navigation.children[0].textContent = "New Text";
// console.log(element);

const coursesList = document.querySelector('#courses-list');
let element;
element = coursesList.children[1].children[1].children[0].children[1].lastElementChild;
element = coursesList.children[1].children[1].children[0].children[1].firstElementChild;
element = coursesList.children[1].children[1].children[0].children[1].childElementCount;
console.log(element);
