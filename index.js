function getFirstSelector(selector) {
  var firstEl = document.querySelector(selector)
  return firstEl
}

function nestedTarget() {
  var nest = document.querySelector('#nested')
  return nest
}

function increaseRankBy(n) {
  var rankedLists = document.getElementById('app').querySelectorAll('.ranked-list')
  var len = rankedLists.length
  for(var i = 0; i < len; i++) {
    rankedLists[i].innerHTML = parseInt(rankedLists[i].innerHTML) + n
  }
  return rankedLists
}

function deepestChild() {
  var gnode = document.getElementById('app').querySelector('div#grand-node')
  var children = gnode.childNodes
  var next = 1
  var string
  var prevChildren = []
  while(next === 1) {
    var nextChild = children[1]
    
    if(nextChild !== void(0)) {
      console.log('got next child')
      children = nextChild.childNodes 
      prevChildren.unshift(nextChild)
    }
    else if(nextChild === void(0)){
      console.log('next child was undefined -- end of nest')
      console.log(`The most value for prevChildren is: ${prevChildren[0]}`)
      next = 0
      string = prevChildren[0]
    }
  }
  return string
}