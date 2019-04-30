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

// const coursesList = document.querySelector('#courses-list');
// let element;
// element = coursesList.children[1].children[1].children[0].children[1].lastElementChild;
// element = coursesList.children[1].children[1].children[0].children[1].firstElementChild;
// element = coursesList.children[1].children[1].children[0].children[1].childElementCount;
// console.log(element);

// Traversing from children to parent
// const cartBtn = document.querySelector(".add-to-cart");

// let parent;

// parent = cartBtn.parentNode;
// parent = cartBtn.parentElement;
// parent = cartBtn.parentElement.parentElement;
// parent = cartBtn.parentElement.parentElement.children[0];

// console.log(parent);

// // Sibling
// element = cartBtn.parentElement.children[0].nextElementSibling;
// element = cartBtn.previousElementSibling;

// // e.g Course name
// const courseName = cartBtn.parentElement.querySelector('h4');
// element = courseName.nextElementSibling.nextElementSibling;
// console.log(element);

// Create a new Element
// new anchor
// const newLink = document.createElement('a');

// // Add a class
// newLink.className = 'link';
// // add the href
// newLink.href = '#';
// // add the text
// newLink.appendChild(document.createTextNode('New Link'));

// console.log(newLink);

// // add the element to the HTML
// const parent = document.querySelector('#primary');
// parent.appendChild(newLink);
// console.log(parent);

// // Replace an Element
// const newHeading  = document.createElement('h1');
// // add id
// newHeading.id = 'heading';
// // add class
// newHeading.className = 'heading'
// // Add text
// newHeading.appendChild(document.createTextNode('The Great Courses'));

// // Replace in the HTML
// const oldHeading = document.querySelector('#heading');

// oldHeading.replaceWith(newHeading);

// console.log(newHeading);

// //Remove Elements
// const cards = document.querySelectorAll('.card');

// cards[0].remove();

// console.log(cards);

// // Remove by the children

// const navigation = document.querySelector('#primary');
// const links = document.querySelectorAll('#primary .link')

// navigation.removeChild(links[2]);
// console.log(links);

// Classes, Ids & Attributes
// const link = document.querySelector('.link');
// let element;
// element = link;

// // read class
// element = link.className;
// // read the class (DOM Token List)
// element = link.classList;
// // Access specific class with classList
// element = link.classList[0];
// // add a new class
// link.classList.add('new-class');
// // remove the class
// link.classList.remove('link');

// // Ids
// link.id = 'new-id';
// // remove Id
// link.id = '';
// link.removeAttribute('id')

// // Attribute Functions
// element = link.getAttribute('href');
// element = link.getAttribute('class');
// element = link.setAttribute('href','http://facebook.com');
// element = link.setAttribute('target', '_blank'); 
// // custom attribute
// element = link.setAttribute('data-link', '10');
// element = link.hasAttribute('data-link');
// element = link.removeAttribute('data-link');

// console.log(element);

// Event Listeners
// const clearCartBtn = document.getElementById('clear-cart');
// clearCartBtn.addEventListener('click', clearCart);
// function clearCart(event){
//     // target
//     let element;
//     element = event;

//     // read target
//     element = event.target;
//     element = event.target.id;
//     element = event.target.className;
//     element = event.target.innerText;
//     element = event.target.innerText = 2 + 2;

//     console.log(element);

// }

// Mouse Events
// create the variables

// const heading = document.querySelector('#heading');
// const links = document.querySelector('nav');
// const clearCartBtn = document.querySelector('#clear-cart');

// // Click Mouse event
// clearCartBtn.addEventListener('click', printEvent);
// // Double Click
// clearCartBtn.addEventListener('dblclick', printEvent);
// // Mouse Enter
// clearCartBtn.addEventListener('mouseenter', printEvent);
// // Mouse Leave
// clearCartBtn.addEventListener('mouseleave', printEvent);
// // Mouse Over
// clearCartBtn.addEventListener('mouseover', printEvent);
// // Mouse out
// clearCartBtn.addEventListener('mouseout ', printEvent);
// // Mouse Up
// clearCartBtn.addEventListener('mouseup', printEvent);
// // Mouse Down
// clearCartBtn.addEventListener('mousedown', printEvent);
// Mouse Move
// heading.addEventListener('mousemove', printEvent);

// function printEvent(event){
//     console.log(`The Event is ${event.type}`);
// }

// Input & Form Events
// Create the variables

// const searchForm = document.getElementById('search'),
//     searchInput = document.getElementById('search-course');

// Events for forms
// searchForm.addEventListener('submit', printEvent);

// Input Events
// Key Down
// searchInput.addEventListener('keydown', printEvent);
// Key Up
// searchInput.addEventListener('keyup', printEvent);
// Key Press
// searchInput.addEventListener('keypress', printEvent);
// Focus
// searchInput.addEventListener('focus', printEvent);
// Key Up
// searchInput.addEventListener('blur', printEvent);
// Cut
// searchInput.addEventListener('cut', printEvent);
// Copy
// searchInput.addEventListener('copy', printEvent);
// Paste
// searchInput.addEventListener('paste', printEvent);
// Input - Listens to all previous events
// searchInput.addEventListener('input', printEvent);


// function printEvent(event){
//     // event.preventDefault(); // Stops Form's default action
//     // if(searchInput.value.length == 0){
//     //     alert('Type Something Please');
//     // }  
//     // Print value from input 
//     console.log(searchInput.value);
//     console.log(`Type: ${event.type}`);
// }

// Event Bubbling
// Variables
// const card = document.querySelector('.card'),
//     infoCards = document.querySelector('.info-card'),
//     addToCartBtn = document.querySelector('.add-to-cart');

// // Event Listeners
// card.addEventListener('click', function(event){
//     console.log('You clicked on the card');
//     event.stopPropagation(); // Prevents Event Bubbling
// });
// infoCards.addEventListener('click', function(event){
//     console.log('You clicked on the info card');
//     event.stopPropagation();
// });
// addToCartBtn.addEventListener('click', function(event){
//     console.log('You clicked on the add to cart button');
//     event.stopPropagation();
// });

// Delegation

// const shoppingCart = document.querySelector('#shopping-cart');
// shoppingCart.addEventListener('click', removeProductFromCart);

// function removeProductFromCart(event) {
//     // console.log(event.target.classList); 

//     if (event.target.classList.contains('remove')) {
//         // console.log(event.target.parentElement.parentElement);
//         event.target.parentElement.parentElement.remove();
//     } else if (event.target.id == 'clear-cart') {
//         event.target.previousElementSibling.remove();
//     }
// }

// // Add to cart
// const courseList = document.querySelector('#courses-list');

// courseList.addEventListener('click', addToCart);

// function addToCart(event) {
//     if (event.target.classList.contains('add-to-cart')) {
//         console.log("Course Added");
//     }
// }

// Local Storage

// Add to Local Storage
// localStorage.setItem('name', 'Kalenga');

// Add to Session Storage
// sessionStorage.setItem('name', 'bwalya');

// Remove from Local Storage
// localStorage.removeItem('name');

// Read the value
// const name = localStorage.getItem('name');
// console.log(name);

// Clear Storage
// localStorage.clear();

localStorage.setItem('name', 'Kalenga');
localStorage.setItem('name', 'Walter White');