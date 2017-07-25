window.onload = function(){
    var quotebox = document.getElementById("intro-quote");
    var quotes = ["You're looking lovely today.",
        "I hope you have a fantastic day.",
        "Thanks for stopping by!"];
    quotebox.innerText = quotes[Math.floor(Math.random()*quotes.length)];
    // probably nicer to store quotes in a .json file instead of hard-coded
};