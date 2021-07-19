var button = document.getElementsByClassName("drum");
for(var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function(){

      var audio = new Audio("sounds/tom-1.mp3")
      audio.play();
  });
}
