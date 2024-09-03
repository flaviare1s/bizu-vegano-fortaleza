function clickMenu() {
  if (menu.style.display == "block") {
    menu.style.display = "none"
  } else {
    menu.style.display = "block"
  }
}

window.onload = function () {
  var modal = document.getElementById("updateModal")
  var closeButton = document.querySelector(".close-button")

  modal.style.display = "block"

  closeButton.onclick = function () {
    modal.style.display = "none"
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none"
    }
  }
}
