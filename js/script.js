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
       if (games.rating <= 3.5) {
        gamesList.innerHTML + "<li>" + games.title + "</li>";
       }
   }

// Question 4

// Question 5

// Question 6

// Question 7

