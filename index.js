//Number of Drum buttons
var l = document.querySelectorAll(".drum").length;

for(var i=0;i<l;i++)
{

document.querySelectorAll(".drum")[i].addEventListener("click",function (){

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    color(buttonInnerHTML);

});

}
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
    color(event.key);
});

function makeSound(key){

    switch (key) {
        case "w":
          var tom1 = new Audio('sounds/tom-1.mp3');
          tom1.play();
          break;

         case "a":
           var tom2 = new Audio('sounds/tom-2.mp3');
           tom2.play();
         break;

         case "s":
           var tom3 = new Audio('sounds/tom-3.mp3');
           tom3.play();
         
         break;

         case "d":
           var tom4 = new Audio('sounds/tom-4.mp3');
           tom4.play();
         break;

         case "j":
           var crash = new Audio('sounds/crash.mp3');
           crash.play();
         break;

         case "k":
           var kick = new Audio('sounds/kick-bass.mp3');
           kick.play();
         break;

         case "l":
           var snare = new Audio('sounds/snare.mp3');
           snare.play();
         break;
 
     default:
       
 };
}

function buttonAnimation(currentKey){
   var activeButton = document.querySelector("."+ currentKey);
   activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },100);

  
}
function color(press){
   var h1Color = document.querySelector("h1");
   h1Color.classList.add("red");
    setTimeout(function() {
        h1Color.classList.remove("red");
    },100);
}