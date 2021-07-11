let sign = "X";
let display = document.getElementById("player");
let block;


function printx(number){
let block = document.getElementById("r"+number);
console.log(block);

if(block.innerHTML == ""){
block.innerHTML = sign;
winner();
checkSign();
display.innerHTML = "<center>"+sign + "'s Turn now"+"</center>"

 }


}
function checkSign(){
    if(sign == "X")
    sign = "O"
    else
    sign = "X";
    
}

function getBox(no){
    return document.getElementById("r"+no).innerHTML;
}
function checkMove(a,b,c,m){
    if(getBox(a)==m && getBox(b)==m && getBox(c)==m){
        return true;
    }else{
        return false;
    }
}

function winner(){
if(checkMove(1,2,3,sign) || checkMove(4,5,6,sign) ||  checkMove(4,5,6,sign) || checkMove(7,8,9,sign) ||  checkMove(1,4,7,sign) ||  checkMove(2,5,8,"X") ||  checkMove(3,6,9,sign) ||  checkMove(1,5,9,sign) ||  checkMove(3,5,7,sign))
        {
          
            display.innerHTML = "<center>Congratulations ! "+sign + " Won the game" + "</center>";
            alert(sign +" has won the game");
            // setTimeout(clr(),10000);
            throw "End Game";
        

    }else{
        if(getBox(1) != "" && getBox(2) != "" && getBox(3) != "" && getBox(4) != "" && getBox(5) != "" && getBox(6) != "" && getBox(7) != "" && getBox(8) != "" && getBox(9) != ""){
            display.innerHTML = "<center>Its a Tie !</center>"; 
            throw "ITS A TIE";
        }
    }
}
function clr(){
    display.innerHTML = "<center>Lets Play</center>"
    // for(let i = 1 ; i <=9;i++)
    //  {
    //  document.getElementById("r"+i).innerHTML = "";
    // }
    location.reload();
}

