
function changeLightMode(){
  let body = document.querySelector("body")
  let hr = document.querySelector("hr")
  if (body.style.backgroundColor === "black"){
    body.style.backgroundColor = "transparent";
    body.style.color = "black";
    lightButton.textContent = "Light Mode"
    hr.style.color = "black"
  }else{
    body.style.backgroundColor = "black";
    body.style.color = "white";
    lightButton.textContent = "Dark Mode";
    hr.style.color = "white"
  }
}

// Obtain the img element, and assign it to the image variable
let image = document.getElementById("pet")

// Obtain the 'shrink-grow' button, and assign it to the changeSize variable
let changeSize = document.getElementById("shrink-grow")

//DO NOT CHANGE THE FOLLOWING CODE
changeSize.addEventListener("click", function() {
  if (image.style.height == "100px") {
    image.style.height = "300px"
    image.style.width = "300px"
  }
  else {
    image.style.height = "100px"
    image.style.width = "100px"
  }
})


let lightButton = document.querySelector("#lightButton")

lightButton.addEventListener("click", function(){
  changeLightMode()
})