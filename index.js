
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {

//Detecting mouse clicks
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnnimation(buttonInnerHtml);

  });
}


//Detecting keyboard clicks

  document.addEventListener("keypress", function(event) {

    makeSound(event.key);
    buttonAnnimation(event.key);

  });



//function called when either moyse button or keyboard button is pressed.

function makeSound(key) {
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
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "l":
      var kichBass = new Audio('sounds/kick-bass.mp3');
      kichBass.play();
      break;


    default:
      console.log(buttonInnerHtml);

  }
}

function buttonAnnimation(currentKey) {
var activeButton =  document.querySelector("."+currentKey);
activeButton.classList.add("pressed");

setTimeout(function(){
    activeButton.classList.remove("pressed");
},100);

}
