var button = document.getElementsByClassName("drum");
for(var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function(){


    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    

  });

  document.addEventListener("keydown", function(events){
    makeSound(events.key);
  });

  function makeSound(key){
    switch (key) {
      case "w":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        
        break;

      case "a":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();

        break;

      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();

        break;

      case "d":
        var kickBass = new Audio("sounds/kick-bass.mp3");
        kickBass.play();

        break;

      case "j":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();

        break;

      case "k":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();

        break;

      case "l":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();

        break;

      default:
        break;
    }
  }
}
