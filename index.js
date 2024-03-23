const length = document.querySelectorAll(".drum").length;

for (var i = 0; i < length; i++) {
  const drum = document.querySelectorAll(".drum")[i];
  drum.addEventListener("click", function () {
    // console.log(drum);
    makeSound(drum.innerHTML);
    addAnimation(drum);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  d = document.querySelector("." + event.key);
  addAnimation(d);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var w = new Audio("sounds/tom-1.mp3");
      w.play();
      break;
    case "a":
      var w = new Audio("sounds/tom-2.mp3");
      w.play();
      break;
    case "s":
      var w = new Audio("sounds/tom-3.mp3");
      w.play();
      break;
    case "d":
      var w = new Audio("sounds/tom-4.mp3");
      w.play();
      break;
    case "j":
      var w = new Audio("sounds/snare.mp3");
      w.play();
      break;
    case "k":
      var w = new Audio("sounds/crash.mp3");
      w.play();
      break;
    case "l":
      var w = new Audio("sounds/kick-bass.mp3");
      w.play();
      break;

    default:
      console.log("You have used the wrong key!!");
  }
}

function addAnimation(drum) {
  drum.classList.add("pressed");
  setTimeout(function () {
    drum.classList.remove("pressed");
  }, 100);
}
