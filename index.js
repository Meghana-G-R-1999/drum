// document.querySelector("h1").innerHTML = "no"

for(var i = 0; i < document.querySelectorAll(".drum").length; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    var buttonPressed = this.innerHTML;
    button(buttonPressed);
    buttonAnimation(buttonPressed);
  });
}

document.addEventListener("keydown", function(event){
  console.log(event.key); //event.key will gives which keyboard button is pressed
  button(event.key);
  buttonAnimation(event.key);
});

function button(key){
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kick_bass = new Audio("sounds/kick-bass.mp3");
      kick_bass.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log(key)
  }
}

function buttonAnimation(btn){
  var currentbtn = document.querySelector("."+btn);
  currentbtn.classList.add("pressed");

  setTimeout(function(){
    currentbtn.classList.remove("pressed");
  },100)
}
