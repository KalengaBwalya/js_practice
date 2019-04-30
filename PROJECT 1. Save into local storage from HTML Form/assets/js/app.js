// Variables


//Event Listeners
eventListeners();

function eventListeners(){
    // Form Submission
    document.querySelector('#form').addEventListener('submit', newTweet);

}

// Functions
function newTweet(event){
     event.preventDefault();
     console.log('form submitted');
}