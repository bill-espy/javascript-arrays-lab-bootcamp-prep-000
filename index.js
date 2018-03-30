kittens = ["Milo","Otis","Garfield"]



function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name2){
  kittens.unshift(name2)
  return kittens 
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens 
}

function appendKitten(name5){
  [...kittens,name5]
}

function prependKitten(name6){
  return [name6, ...kittens]
}

function removeFirstKitten(){
  array.slice(1,2)
}

function removeLastKitten(){
  array.slice(0,array.length-1)
}


