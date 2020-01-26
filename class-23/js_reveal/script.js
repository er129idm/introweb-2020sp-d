var clickerElements;
var popoverElement;
var popupContentElements;
var popupCloseElement;

document.addEventListener('DOMContentLoaded', function(event) {

  /// Init RELLAX for Parallax
  var rellax = new Rellax('.rellax');

  /// Get the "close" button
  popupCloseElement = document.getElementById('closeButton');

  /// Get the popup container
  popoverElement = document.getElementById('popover');

  /// Get all our clickable titles
  clickerElements = document.getElementsByClassName('contentClicker');
  console.log("There are " + clickerElements.length + " clickable titles...");

  /// Get all of our popup content sections
  popupContentElements = document.getElementsByClassName('popContent');

  /// Set up the click and reveal
  for (var i = 0; i < clickerElements.length; i++) {

    console.log("Setting up #" + i);

    clickerElements[i].addEventListener('click', function(detailsAboutTheThingThatWasClicked) {

      /// Show the POPOVER CONTAINER
      popoverElement.style.display = "block";

      /// The element we CLICKED on...
      console.log("CLICKED...");
      var clickedElement = detailsAboutTheThingThatWasClicked.target;
      console.log(clickedElement);

      /// The ID of the CONTENT we should reveal...
      var revealElementID = clickedElement.getAttribute('data-popcontent');

      // console.log("Reveal element ID is: " + revealElementID);
      var actualRevealElement = document.getElementById(revealElementID);
      actualRevealElement.style.display = "block";

      /// HIDE all other content sections
      for (var x = 0; x < popupContentElements.length; x++) {
        if (popupContentElements[x] != actualRevealElement) {
          popupContentElements[x].style.display = "none";
        }
      }

    });
  }

  closeButton.addEventListener('click', function() {
    popoverElement.style.display = "none";
  });

});
