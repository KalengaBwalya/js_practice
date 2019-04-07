let element;

element = document;
element = document.all;
element = document.all[200];
element = document.head;
element = document.body;
element = document.domain;
element = document.characterSet;
element = document.URL;
element = document.contentType;

// All links
element = document.links;
element = document.links[2];
element = document.links[2].id;
element = document.links[2].className;
element = document.links[2].classList;

// Forms
element = document.forms;
element = document.forms[0];
element = document.forms[0].id;
element = document.forms[0].method;
element = document.forms[0].action;
element = document.forms[0].classList;
element = document.forms[0].className;

// Images
element = document.images;

// Scripts
element = document.scripts;

// Looping all the images
let images = document.images;

let imagesArray = Array.from(images);

for(let key in imagesArray){
    console.log(imagesArray[key]);
}

console.log(element);