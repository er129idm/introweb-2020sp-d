var bodyElement;

var elementData = [{
    "color": "#ff0072",
    "xSpeed": 10,
    "ySpeed": 5,
    "xDirection" : 1,
    "yDirection" : 1
  },
  {
    "color": "#00FF22",
    "xSpeed": 20,
    "ySpeed": 10,
    "xDirection" : -1,
    "yDirection" : -1
  }
];

document.addEventListener('DOMContentLoaded', function(event) {

  /// The page is READY
  bodyElement = document.getElementsByTagName("body")[0];

  for (var i = 0; i < 100; i++) {
    makeRandomElementData();
  }

  for (var i = 0; i < elementData.length; i++) {
    createElement(elementData[i]);
  }

  window.setInterval(animateElements, 100);

});

function makeRandomElementData() {

  var randomRed = Math.random() * 255;
  var randomGreen = Math.random() * 255;
  var randomBlue = Math.random() * 255;
  var randomColor = "rgb(" + randomRed + ", " + randomGreen + ", " + randomBlue + ")";
  var randomXSpeed = Math.random() * 10;
  var randomYSpeed = Math.random() * 10;

  var newElement = {
    "color": randomColor,
    "xSpeed": randomXSpeed,
    "ySpeed": randomYSpeed,
    "xDirection" : 1,
    "yDirection" : 1
  }

  elementData.push(newElement);

}

function createElement(incomingJSON) {

  /// Create whole content item div and set class
  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add("bouncingElement");
  newContentElement.style.backgroundColor = incomingJSON["color"];

  newContentElement.style.left = (window.innerWidth / 2) + "px";
  newContentElement.style.top = (window.innerHeight / 2) + "px";

  newContentElement.innerHTML = "🍞";

  /// Add the item to the page
  bodyElement.appendChild(newContentElement);

}

function animateElements() {

  // console.log(elementData);

  // console.log("Animating...");
  var allElements = document.getElementsByClassName("bouncingElement");

  for (var i = 0; i < allElements.length; i++) {

    /// HORIZONTAL movement
    var oldLeft = parseInt(allElements[i].style.left);

    /// Bouncing...
    if (oldLeft > window.innerWidth) {
      elementData[i]["xDirection"] = -1;
      oldLeft = window.innerWidth;
    }
    if (oldLeft < 0) {
      elementData[i]["xDirection"] = 1;
      oldLeft = 0;
    }

    var newLeft = oldLeft + (elementData[i]["xSpeed"] * elementData[i]["xDirection"]);

    allElements[i].style.left = newLeft + 'px';

    /// VERTICAL movement
    var oldTop = parseInt(allElements[i].style.top);
    /// Bouncing...
    if (oldTop > window.innerHeight) {
      elementData[i]["yDirection"] = -1;
      oldTop = window.innerHeight;
    }
    if (oldTop < 0) {
      elementData[i]["yDirection"] = 1;
      oldTop = 0;
    }
    var newTop = oldTop + (elementData[i]["ySpeed"] * elementData[i]["yDirection"]);
    allElements[i].style.top = newTop + 'px';
  }


}
