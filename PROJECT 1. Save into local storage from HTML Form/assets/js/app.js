/* ----------------
Variables
---------------- */

const form = document.querySelector('#form');
const tweetList = document.querySelector('#tweet-list');


/* ----------------
Event Listeners
---------------- */

eventListeners();

function eventListeners(){
    // Form Submission
    form.addEventListener('submit', newTweet);

    // Remove Tweet From List
    tweetList.addEventListener('click', removeTweet);

    // Document
    document.addEventListener('DOMContentLoaded', localStorageOnLoad);
}


/* ----------------
Functions 
---------------- */

function newTweet(event){
     event.preventDefault();
     
    // Read the text area value
    const tweet = document.querySelector('#tweet').value;

    // Create the remove button
    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';
 
    // Create an li element
    const li = document.createElement('li');
    li.textContent = tweet;

    // Add the remove button to each tweet
    li.appendChild(removeBtn);

    // Append tweet to the list
    tweetList.appendChild(li);

    //Add to local storage
    addTweetLocalStorage(tweet);

    // Alert
    alert('Tweet Added')

    // Clear Form
    this.reset();
}

// Remove the Tweets From the DOM
function removeTweet(event){
    // Delegation
    if(event.target.classList.contains('remove-tweet')){
        event.target.parentElement.remove();
    }

    // Remove from Storage
    removeTweetLocalStorage(event.target.parentElement.textContent);
} 

// Add tweets to local storage
function addTweetLocalStorage(tweet){
    let tweets = getTweetsFromLocalStorage();
    // Add tweet into Array
    tweets.push(tweet);
    // Convert tweet array to string
    localStorage.setItem('tweets', JSON.stringify(tweets)); // Convert from array format to string
}

// Get tweets from local storage
function getTweetsFromLocalStorage(){
    let tweets;
    const tweetsLS = localStorage.getItem('tweets');
    // Get the values, if null is returned then we create an empty array
    if(tweetsLS === null){
        tweets = [];
    } else {
        tweets = JSON.parse(tweetsLS); // Convert from string format to array
    }

    return tweets;
}

// Print Local Storage Tweets on Load

function localStorageOnLoad(){
    let tweets = getTweetsFromLocalStorage();
    
    // Loop through storage and print the values
    tweets.forEach(function(tweet){
        // Create the remove button
        const removeBtn = document.createElement('a');
        removeBtn.classList = 'remove-tweet';
        removeBtn.textContent = 'X';
    
        // Create an li element
        const li = document.createElement('li');
        li.textContent = tweet;

        // Add the remove button to each tweet
        li.appendChild(removeBtn);

        // Append tweet to the list
        tweetList.appendChild(li);

    });
}

function removeTweetLocalStorage(tweet){
    // get tweets from storage
    let tweets = getTweetsFromLocalStorage();

    // Remove the X from the tweet
    const tweetDelete = tweet.substring(0, tweet.length - 1);

    // Loop through the tweets and remove the tweet that is equal
    tweets.forEach(function(tweetLS, index){
        if(tweetDelete === tweetLS){
            tweets.splice(index, 1)
        }
    });

    // Refresh the Local Storage
    localStorage.setItem('tweets', JSON.stringify(tweets));
}