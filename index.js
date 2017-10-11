function dialogFeld() {
  var eingabe = prompt("Gimme your name, please!", "");
  if (eingabe != null) {
    document.getElementById("Type").innerHTML =
      "Herzlichen Dank, " + eingabe + ". Deine Daten wurden erfolgreich an die NSA weitergeleitet.";
  }
}