

function diceGame(){
    var numberP =(Math.floor((Math.random()*6)+1)); // Generate Random number for player

    var numberC = (Math.floor((Math.random()*6)+1)); // Generate Random Number for Computer

    var randomImageP = "./images/" + numberP + ".png"; // Making the image path a string to be processed in JS
    document.getElementById("img1").setAttribute("src",randomImageP); // Replacing source of an image
    
    var randomImageC = "./images/" + numberC + ".png"; 
    document.getElementById("img2").setAttribute("src",randomImageC);

    if (numberP<numberC){           // Score Comparision
        document.querySelector("h2").innerHTML="*** Computer Wins ***"; 
    } else if (numberP>numberC){
        document.querySelector("h2").innerHTML="*** Player Wins ***"
    } else if (numberC==numberP){
        document.querySelector("h2").innerHTML="* Match Draw, Play Again! *"
    } else {
        document.querySelector("h2").innerHTML="*** Opps! Something Went Wrong With JavaScript ***"
    }

    

}    
