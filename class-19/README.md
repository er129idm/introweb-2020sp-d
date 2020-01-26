## Day 19

* JS review: conditional statements

* Continuing JS: functions

* Manipulating the DOM with JS

    * Grabbing elements by ID, Class, Element name

    * Changing innerHTML

    * Modifying CSS

    * adding event listeners

    * functions, if statements and forms

### Resources
- eventListener names: https://developer.mozilla.org/en-US/docs/Web/Events

### Homework:

*Calculator*

Write a function called `halfNumber` that will take one argument (a number), divide it by 2, and return the result in an `alert`. It should also log a string to the console like "Half of 5 is 2.5.".

Write a function called `fortune` that will take one argument (your visitor's name) and prints a random "fortune cookie style" fortune into an element of your page.

Write a function called `restyle` that applies new CSS styles to the `fortune` text in a random manner. Modify at least three CSS properties.

Start with this webpage, which has inputs and buttons for things to calculate:

```html
<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<title>Calculator</title>
</head>
<body>

  <label>Half this number...
    <input type="number" id="half-input">
  </label>
  <button id="half-button">Calculate</button>
  <br><br>

  <label>Give me your name and I'll give you a fortune...
    <input id="fortune-input">
  </label>
  <button id="fortune-button">Get Fortune</button>
  <br><br>
  <div id="fortune-output"></div>

</body>
</html>
```

Add a script tag, and add your functions.

For each operation, create an event listener for the button, and when it's clicked, find the value of the appropriate input and show the result.

#### Deliverable Format

Make this a functional webpage hosted via GitHub Pages and send me the link.
