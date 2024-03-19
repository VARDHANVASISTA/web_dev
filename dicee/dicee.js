function execute(){
    var rN1 = Math.floor(Math.random()*6)+1;
    var c1 = "/images/dice"+rN1+".png";  
    document.getElementsByClassName("dice")[0].querySelector("img").setAttribute("src", c1);
    var rN2 = Math.floor(Math.random()*6)+1;
    var c2 = "/images/dice"+rN2+".png";  
    document.getElementsByClassName("dice")[1].querySelector("img").setAttribute("src", c2);
    if (rN1 === rN2){
        document.querySelector("h4").textContent="It's a tie!";
    }
    else if (rN1 > rN2) {
        document.querySelector("h4").textContent="Player 1 wins!";
    } 
    else if (rN1 < rN2) {
        document.querySelector("h4").textContent="Player 2 wins!";
    }
}
