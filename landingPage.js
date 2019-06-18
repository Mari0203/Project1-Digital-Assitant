// DOM elements to be updated
(currentTime = document.getElementById("currentTime")),
  (greeting = document.getElementById("greeting")),
  (name = document.getElementById("name")),
  (caption = document.getElementById("caption")),
  
  // Show Current Time
  setInterval(function() {
    var currentTime = moment().format("h:mm:ss a");
    $("#currentTime").html(currentTime);
  }, 1000);

// Set background and Greeting based on currentTime
function setBkgGreeting() {
  var currentTime = new Date().getHours();

  // Morning (6 - 09:59AM)
  if (6 <= currentTime && currentTime < 10) {
    document.body.style.backgroundImage = "url('./images/sunrise_LG.jpg')";
    // document.body.style.backgroundRepeat = "no-repeat";

    greeting.textContent = "Good Morning";
    console.log(greeting.textContent);

    // Daytime (10AM - 4:59PM)
  } else if (10 <= currentTime && currentTime < 17) {
    document.body.style.backgroundImage = "url('./images/daytime_LG.jpg')";
    greeting.textContent = "Good Day";
    // document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.color = "white";
    console.log(greeting.textContent);

    // Late Afternoon/Sunset (5 - 7:59PM)
  } else if (17 <= currentTime && currentTime < 20) {
    document.body.style.backgroundImage = "url('./images/sunset_LG.jpg')";
    greeting.textContent = "Good Evening";
    document.body.style.color = "white";
    console.log(greeting.textContent);
  }

  // Night (8PM - 5:59AM) // (20 <= currentTime && currentTime < 6)
  else {
    document.body.style.backgroundImage = "url('./images/nightBeach_LG.jpg')";
    greeting.textContent = "Good Night";
    document.body.style.color = "white";
    // document.body.background = "night";
    console.log(greeting.textContent);
  }
}

// Save user input name in local storage
  /* Check to see what's in local storage: If there's nothing in local storage for the name (i.e. 'null'), 
     take the 'name' element and add the text cotent with default. */
function getName() {
  if (local.Storage.getItem("name") === null) {
    name.textContent = "[Enter Your Name]";
  } else {
    name.textContent = local.Storage.getItem("name");
  }
}

// Set name based on user input
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure the ENTER (key#13) is pressed:
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }

  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

// Event listener to take the name input when the user types it and hit 'Enter',
// or when a user clicks somewhere else on the page away from input area (= "blur").
// name.addEventListener("keypress", setName);
// name.addEventListener("blur", setName);


// ==== Call functions ====== //
setBkgGreeting();
getName();
setName();

// When user clicks the image (Baymax) it routes to 2nd page (main.html):
$("#DA-image").on("click", function(e) {
  e.preventDefault();
  window.location = URL("main.html");
});
