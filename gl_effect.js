function glitchText() {
  var elements = document.querySelectorAll(".glitch");
  for (var i = 0; i < elements.length; i++) {
    var text = elements[i].textContent;
    var newText = "";
    for (var j = 0; j < text.length; j++) {
      var char = text.charAt(j);
      if (Math.random() < 0.1) {
        newText += "<span class='glitch-char' style='color: rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")'>" + char + "</span>";
      } else {
        newText += char;
      }
    }
    elements[i].innerHTML = newText;
  }
}

function clearGlitch() {
  var elements = document.querySelectorAll(".glitch");
  for (var i = 0; i < elements.length; i++) {
    var text = elements[i].innerHTML;
    var newText = text.replace(/<span class='glitch-char'[^>]*>(.*?)<\/span>/gi, "$1");
    elements[i].innerHTML = newText;
  }
}

setInterval(function() {
  glitchText();
  setTimeout(function() {
    clearGlitch();
  }, 100);
}, 500);
