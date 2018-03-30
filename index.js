kittens = ["Milo","Otis","Garfield"]



function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name2){
  kittens.unshift(name2)
  return kittens 
}

function destructivelyRemoveLastKitten(name3){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(name4){
  kittens.shift()
  return kittens 
}

function appendKitten(name5){
  [...kittens,name5]
}