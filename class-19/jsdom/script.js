var heading = document.getElementById("title");
var executeButton = document.getElementById("executeButton");
var outputParagraph = document.getElementById("outputText");
var inputElement = document.getElementById("myInput");

// addEventListener requires two parameters: the event that is occurring and a callback that includes the event
// heading.addEventListener("mouseover", demonstrationFunction);
// document.addEventListener('mousemove', mouseMovedFunc);

executeButton.addEventListener("click", demonstrationFunction);

//////////////////////////

function demonstrationFunction() {

  console.log("Called function....");

  // alert("Over");

  /// Modifying css directly
  // var randomRed = Math.random() * 255;
  // var randomGreen = Math.random() * 255;
  // var randomBlue = Math.random() * 255;
  // var newColorString = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
  // console.log(newColorString);
  //
  // heading.style.color =
  // heading.style.fontSize = "5rem";
  // heading.style.textShadow = "0px 0px 25px #ff0072";
  // heading.style.transform = "rotate(15deg)";

  /// Modifying classes
  // console.log("Class list BEFORE:");
  // console.log(heading.classList);
  // heading.classList.add("specialTitle");
  heading.classList.toggle("specialTitle");
  // console.log("Class list AFTER:");
  // console.log(heading.classList);

  /// Modifying HTML content
  // outputParagraph.innerHTML = "Some new text...";

  var currentInputText = inputElement.value;
  outputParagraph.innerText = "My cat " + currentInputText + "s way too much.";


  // alert("HIIIIII.");
  // console.log("Hey there...");
  // var inputContents = document.getElementById("myInput").value;
  // alert("You input " + inputContents + "!");
}

///////

function mouseMovedFunc(eventDetails) {

  var mouseX = eventDetails.screenX;
  var mouseY = eventDetails.screenY;

  console.log("Cursor is at: " + mouseX + "," + mouseY + ".");

  executeButton.style.transform = "translate(" + mouseX + "px," + mouseY + "px)";

}
