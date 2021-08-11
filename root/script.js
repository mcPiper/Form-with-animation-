let button = document.getElementById("finish")
button.addEventListener("click", checkTest)
function checkTest() {
let result = 0
let a1 = document.getElementById("q1").value;
if (a1 === "4"){
    result++;
}

let a3 = document.getElementById("q3").checked;
if (a3 === true){
    result++;
}
document.getElementById("rezult").innerHTML="Total correct answers: " + result 
}



var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }