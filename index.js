// mouse click button press detection
for(i = 0; i < document.querySelectorAll("button").length; i++){
  document.querySelectorAll("button")[i].addEventListener("click", function(){
    playSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}


// keyboard press detection
document.addEventListener("keydown", function(e){
  playSound(e.key);
  buttonAnimation(e.key);
});


// play sound
function playSound(x){
  switch (x){
    case "w":
      var crashSound = new Audio("sounds/crash.mp3");
      crashSound.play();
    break;
    case "a":
      var kickSound = new Audio("sounds/kick-bass.mp3");
      kickSound.play();
    break;
    case "s":
      var snareSound = new Audio("sounds/snare.mp3");
      snareSound.play();
    break;
    case "d":
      var tom1Sound = new Audio("sounds/tom-1.mp3");
      tom1Sound.play();
    break;
    case "j":
      var tom2Sound = new Audio("sounds/tom-2.mp3");
      tom2Sound.play();
    break;
    case "k":
      var tom3Sound = new Audio("sounds/tom-3.mp3");
      tom3Sound.play();
    break;
    case "l":
      var tom4Sound = new Audio("sounds/tom-4.mp3");
      tom4Sound.play();
    break;
    default:
      console.log("no valid button pushed");
  }
}

function buttonAnimation(key){
  var pressedKey = document.querySelector("."+key);
  pressedKey.classList.add("pressed");
  setTimeout(function(){
    pressedKey.classList.remove("pressed"); 
  }, 100);
}
