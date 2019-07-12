reset();

// show/hide prompts
function toggle() {
   // adjust left & right containers
   var l = document.getElementById("left");
   l.classList.toggle("minimizeSliders");

   var r = document.getElementById("right");
   r.classList.toggle("showPrompts");

   // change button text
   var b = document.getElementById("button");
   b.value = (b.value === "Show Prompts" ? "Hide Prompts" : "Show Prompts");
   console.log(b.style);
   b.classList.toggle("addMargin");

   var r = document.getElementById("res");
   r.classList.toggle("addMargin");
}

// show additional info for prompt
function showMore(b, id) {
   id.classList.toggle("extra");
   b.value = (b.value === "More" ? "Less" : "More");
}

// change P(init)
function changeP(val, slide) {
   slide.value = val.innerHTML;
   updateI(slide.value);
}

// display initial values for each parameter
function reset() {
   var i = document.getElementById("init");
   i.value = i.defaultValue;
   updateI(i.defaultValue);

   var t = document.getElementById("trans");
   t.value = t.defaultValue;
   updateT(t.defaultValue);

   var s = document.getElementById("slip");
   s.value = s.defaultValue;
   updateS(s.defaultValue);

   var g = document.getElementById("guess");
   g.value = g.defaultValue;
   updateG(g.defaultValue);
}

// update slider values
// P(init)
function updateI(val) {
   document.getElementById("demoI").innerHTML = val;
   updateProbs();
}

// P(trans)
function updateT(val) {
   document.getElementById("demoT").innerHTML = val;
   updateProbs();
}

// P(slip)
function updateS(val) {
   document.getElementById("demoS").innerHTML = val;
   updateProbs();
}

// P(guess)
function updateG(val) {
   document.getElementById("demoG").innerHTML = val;
   updateProbs();
}

// update P(learned) and P(correct)
function updateProbs() {
   // get the parameter values
   var i = document.getElementById("init").value,
       i_c = 1.0 - i,
       t = document.getElementById("trans").value,
       t_c = 1.0 - t,
       s = document.getElementById("slip").value,
       s_c = 1.0 - s,
       g = document.getElementById("guess").value,
       g_c = 1.0 - g;

   // conditional probabilities
   var r = (i * s_c) / (i * s_c + i_c * g),
       w = (i * s) / (i * s + i_c * g_c);

   var learnC = r + (1.0 - r) * t,
       cor = document.getElementById("correct");
   cor.innerHTML = learnC.toFixed(2);

   var learnW =  w + (1.0 - w) * t,
       wro = document.getElementById("wrong");
   wro.innerHTML = learnW.toFixed(2);

   // likelihood correct
   // var likeC = i * s_c + i_c * g;
   // document.getElementById("likelihood").innerHTML = likeC.toFixed(2);

   // check if mastery achieved
   if (i >= 0.95) {
      mastered();
   }

}

// display message upon mastery (P(L) >= 0.95)
function mastered() {
   // Get the modal
   var modal = document.getElementById("myModal");

   // Get the <span> element that closes the modal
   var span = document.getElementsByClassName("close")[0];

   // Display pop-up
   modal.style.display = "block";

   // When the user clicks on <span> (x), close the modal
   span.onclick = function() {
      modal.style.display = "none";
   }

   // When the user clicks anywhere outside of the modal, close it
   window.onclick = function(event) {
      if (event.target == modal) {
         modal.style.display = "none";
      }
   }
}

// display/hide parameter descriptions
function displayInfo(p) {
   console.log(p);
   p.style.display = "block";
}

function hideInfo(p) {
   console.log(p);
   p.style.display = "none";
}
