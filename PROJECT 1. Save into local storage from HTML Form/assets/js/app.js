// Variables
const form = document.querySelector('#form');
const tweetList = document.querySelector('#tweet-list');

//Event Listeners
eventListeners();

function eventListeners(){
    // Form Submission
    form.addEventListener('submit', newTweet);

    // Remove Tweet From List
    tweetList.addEventListener('click', removeTweet);
}

// Functions
function newTweet(event){
     event.preventDefault();
     
    // Read the text area value
    const tweet = document.querySelector('#tweet').value;

    // Create the remove button
    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';
 
    // Create an li element
    let li = document.createElement('li');
    li.textContent = tweet;

    // Add the remove button to each tweet
    li.appendChild(removeBtn);

    // Alert
    alert('New Tweet?')

    // Append tweet to the list
    tweetList.appendChild(li);
}

// Remove the Tweets From the DOM
function removeTweet(event){
    // Delegation
    if(event.target.classList.contains('remove-tweet')){
        event.target.parentElement.remove();
    }
}