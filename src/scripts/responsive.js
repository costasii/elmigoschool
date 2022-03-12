function respNavbar() {
    var x = document.getElementById("respnavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }