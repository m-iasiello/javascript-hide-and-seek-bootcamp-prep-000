function getFirstSelector(selector) {
  var firstEl = document.querySelector(selector)
  return firstEl
}

function nestedTarget() {
  var nest = document.querySelectorAll('#nested').target
  return nest
}