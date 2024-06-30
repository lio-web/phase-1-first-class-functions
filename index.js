function receivesAFunction(callback){
  callback()
}
function returnsANamedFunction(){
  return function named(){
  console.log  ("It is Lio")
}
}
function returnsAnAnonymousFunction(){
  return function(){
    console.log("I do not have a name")
  }
}