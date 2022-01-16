// Question 1

let outOfStock = true;

if (outOfStock === true) {
    console.log("Out of stock");
} else {
    console.log("In stock");
}

// Question 2

for (i = 15; i <= 25; i++) {
    if (i === 17 || i === 20) {
        console.log(i);
    }
}

// Question 3

const gamesList = document.querySelector(".games")

let games = [
    {
     title: "Grand Theft Auto",
     rating: 4.48,
    },
    {
     title: "Portal 2",
     rating: 3.5,
    },
    {
     title: "Team Fortress",
     rating: null,
    },
    {
     title: "The Witcher",
     rating: 3.0,
    },
    {
     title: "The Elder Scrolls",
     rating: 2.9,
    },
   ];
   

   for (i = 0; i < games.length; i++) {
        const gameRating = games[i].rating
        const gameTitle = games[i].title
       if (gameRating <= 3.5) {
        gamesList.innerHTML += "<li>" + gameTitle + "</li>";
       }
   }

// The Witcher and Elder Scrolls should be rated higher imo

// Question 4

function whatIDontLike (wakeUpCall) {
    if (typeof wakeUpCall === "string") {
        console.log("I dont like " + wakeUpCall);
    } else {
        console.log("Please send in a string");
    }
}

whatIDontLike("getting up early");
whatIDontLike(true);
whatIDontLike(3); 
whatIDontLike();




// Question 5
function myFunction(argument1, argument2) {
let convertedNumber1 = parseInt(argument1);
let convertedNumber2 = parseInt(argument2);

if (isNaN(convertedNumber1) || isNaN(convertedNumber2)) {
    return "Invalid Arguments";
} else {
    return convertedNumber1 - convertedNumber2;
}
}

document.getElementById("subtraction").innerHTML = myFunction(1, 42);
document.getElementById("subtraction").innerHTML = myFunction(200, 150);
document.getElementById("subtraction").innerHTML = myFunction(10, "50");
document.getElementById("subtraction").innerHTML = myFunction("100", "400");
document.getElementById("subtraction").innerHTML = myFunction("Ten", "One Hundred");
document.getElementById("subtraction").innerHTML = myFunction(null, 123);



// Question 6
/*
Change the title of the page (the value of the title element in the head) to "Updated title".
Change the background colour of the whole page to "yellow". X
Change the color of the h1 element to "green". X
Change the h1 element's font to "impact". X
Change the value of the h1 element to be a link.
Remove the list style and padding from the ul element */

let pageButton = document.querySelector(".page");
let heading = document.querySelector("h1");

function pageButtonPressed() {
    heading.innerHTML = "Updated title"
    document.querySelector("body").style.backgroundColor = "yellow";
    heading.style.color = "green";
    heading.style.fontFamily = "impact";
    // Change the value of the h1 element to be a link.
    document.querySelector("ul").style.listStyleType = "none";
    
}

pageButton.onclick = pageButtonPressed;

// Question 7

