// Write an event listener that listens for the keyup event on the input field.
// The event handler function should update the textContent property of both sections.


// fieldEL goes to the HTML document to find any element with the ID of "message". In this case, the <input> tag has that ID.
let fieldEl = document.getElementById("message");

// outputElLeft goes to the HTML document to find any element with the ID of "target-left". In this case, one of the two <article> elements has that ID. 
// The other <article> element has the "target-right" ID.
let outputElLeft = document.getElementById("target-left");
let outputElRight = document.getElementById("target-right");

// An event listener (keyup) is added to fieldEl which tracks what key is released and records its value...or something. 
// outputElLeft and outputElRight then both receive what is being entered from fieldEl and the innerHTML allows that information to also be posted to the DOM simultaneously.
fieldEl.addEventListener("keyup", function (event){
    outputElLeft.innerHTML = event.target.value
    outputElRight.innerHTML = event.target.value
});


