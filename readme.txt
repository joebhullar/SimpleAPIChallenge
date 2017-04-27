  README
----------------

OVERVIEW:
The purpose of these challenges are to get an understanding of your ability to work with data sent from an API. While you won't be working with a real API in this challenge we have provided a stub that should behave similarly.

`data.js` introduces a type called DataSource which has a function called getNextPage. getNextPage returns the next three models from the API. Okay... actually it's just returning a few entries at a time from an array, but it's intended to simulate paginated results that sent from an API. Think of this function as the equivalent of making a synchronous AJAX request. NOTE: this file cannot be modified to complete any of the challenges.

`index.html` contains some HTML boilerplate that you will use for the following challenge. We've included jQuery and encourage you to use it in your solution. Feel free to modify this file to better reflect your coding style.

`index.js` is a blank slate. This is where the bulk of your solution should reside.

`index.css` contains a few basic styles. You're more than welcome to add your own if you'd like to introduce your own flair.


SUBMISSION:
In order to observe your thought process we would like you to initialize a git repository and commit regularly thoughout the Challenge 1. When you submit your solution please zip all files (`index.js`, `index.html`, `index.css`, `data.js`, written portion of Challenge 2) as well as the `.git` directory that is created when you initialize a new git repository.


CHALLENGE 1:
Your first challenge is to incrementally load data from the API (call getNextPage on an instance of DataSource) into a table each time the "Load More" button is pressed. Your table should have the following columns: Id, Name, Colour, Average Price. Average Price is an aggregate that you must calculate based on the prices in each of the soldInStores array. Data should only show up in the table if the corresponding colour is selected from the colour filter dropdown (or the dropdown is set to its default value: "-- Colour --".

Have a look at the video titled "challenge01.mp4" for a demo of the expected result. The colour dropdown menu doesn't seem to appear in the video...

Remember, you can't modify `data.js`, but all other files are fair game!


CHALLENGE 2:
Is data that you have been collecting from the API (by calling getNextPage) being returned in a format that is optimal for completing Challenge 1? If so why? If not why?

