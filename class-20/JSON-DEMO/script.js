/* INTRO TO JSON */

let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement = document.getElementById('contentGrid');

let myJSON = {
  "title" : "Effie J. Rieper",
  "picture_url" : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Lil-Bub-2013.jpg/320px-Lil-Bub-2013.jpg",
  "favorite_color" : "#FF00FF",
  "pets" : ["cat", "dog", "roomba"]
}

var randomIndex = Math.floor(Math.random() * myJSON["pets"].length);

printToPage( randomIndex );

function printToPage(incoming) {
  outputParagraph.innerHTML = incoming;
}

let jsonDatabase = [
  {
    "title" : "Effie J. Rieper",
    "picture_url" : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Lil-Bub-2013.jpg/320px-Lil-Bub-2013.jpg",
    "favorite_color" : "#ff0072",
    "pets" : ["cat", "bees", "robot vacuum"]
  },
  {
    "title" : "Drake",
    "picture_url" : "https://thefader-res.cloudinary.com/private_images/w_760,c_limit,f_auto,q_auto:best/Screen_Shot_2016-04-29_at_11.46.25_AM_jkfdax/drake-dog-diamond-pet-views.jpg",
    "favorite_color" : "#405f7c",
    "pets" : ["husky", "hotline bling", "Degrassi"]
  },
  {
    "title" : "Billie Elish",
    "picture_url" : "https://img.buzzfeed.com/buzzfeed-static/static/2019-04/10/13/asset/buzzfeed-prod-web-06/anigif_sub-buzz-15799-1554917302-1.gif?downsize=700:*&output-format=auto&output-quality=auto",
    "favorite_color" : "#c1a411",
    "pets" : ["puppy", "instagram", "hairdye"]
  },
  {
    "title" : "Gorbin Morvins",
    "picture_url" : "https://sophosnews.files.wordpress.com/2017/05/shutterstock_324355691.jpg?w=780&h=408&crop=1",
    "favorite_color" : "#00FF00",
    "pets" : ["crab", "igloo", "worms"]
  }

]

// createElementMessy(myJSON);
// createElementProper(myJSON);

for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}

// function createElementMessy(incomingJSON) {
//   // var completeHTML = "<div class=\"contentItem\" style=\"background-color: " + incomingJSON['favorite_color'] + "\"> <h3 class=\"contentTitle\">" + incomingJSON['title'] + "</h3><h4>My Pets:</h4><ul class=\"petList\"><li>Pet 1</li><li>Pet 1</li><li>Pet 1</li></ul></div>";
//   // contentGridElement.innerHTML = completeHTML;
//
//   /// Start our HTML chunk
//   var incompleteHTML = "<div class=\"contentItem\" style=\"background-color: " + incomingJSON['favorite_color'] + "\"> <h3 class=\"contentTitle\">" + incomingJSON['title'] + "</h3><h4>My Pets:</h4><ul class=\"petList\">";
//   /// Append Pets to the list
//   for (var i = 0; i < incomingJSON['pets'].length; i++) {
//     var petString = "<li>" + incomingJSON['pets'][i] + "</li>";
//     incompleteHTML += petString;
//   }
//   /// Complete our HTML chunk
//   incompleteHTML += "</ul></div>";
//   contentGridElement.innerHTML = incompleteHTML;
// }

function createElementProper(incomingJSON) {

  /// Create whole content item div and set class
  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSON['favorite_color'];
  newContentElement.classList.add('contentItem');

  /// Create HEADLINE h3, set class, set content
  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerHTML = incomingJSON['title'];
  /// Add the HEADLINE to the item
  newContentElement.appendChild(newContentHeading);

  /// Create & add LIST HEADLINE to the item
  let newContentSubhead = document.createElement("H4");
  newContentSubhead.innerHTML = "My Pets:";
  newContentElement.appendChild(newContentSubhead);

  /// Create & add PET LIST to the item
  let newContentPetList = document.createElement("UL");
  newContentElement.appendChild(newContentPetList);

  /// Create & add all the pet LIST ITEMS to the PET LIST
  for (var i = 0; i < incomingJSON['pets'].length; i++) {
    var currentPetString = incomingJSON['pets'][i];
    var newPetItem = document.createElement("LI");
    newPetItem.innerHTML = currentPetString;
    newContentPetList.appendChild(newPetItem);
  }

  /// Create & add footer image
  let newImageContainer = document.createElement("DIV");
  newImageContainer.classList.add("footerImageContainer");
  newImageContainer.style.backgroundImage = "url('" + incomingJSON['picture_url'] + "')";
  // let newImage = document.createElement("IMG");
  // newImage.src = incomingJSON['picture_url'];
  // newImageContainer.appendChild(newImage);
  newContentElement.appendChild(newImageContainer);

  /// Add the item to the page
  contentGridElement.appendChild(newContentElement);

}
