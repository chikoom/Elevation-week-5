const add = function(a, b){
  return a + b
}

const calcSqrt = function(a, b){
  return Math.sqrt(Math.pow(a, 2)+Math.pow(b, 2))
}

const removeBugs = function (code) {
  return code.map(c => c != "BUG")
}

const clearLowPriority = function(objArray) {
  return objArray.filter(obj => obj.priority === "HIGH")
}

class PictureManager {
  constructor() {
      this.pictureURLs = []
  }

  addPicture(picURL) {
      this.pictureURLs.push(picURL)
  }

  removePicture(picURL) {
      this.pictureURLs.splice(this.pictureURLs.indexOf(picURL), 1)
  }
}

class ArrayManipulator{
  constructor() {
      this.marray = []
  }
  manipulate(arr1,arr2){
    if(arr1.length !== arr2.length){
      return 'Not Same Length'
    }
    let objReturned = {}
    arr1.forEach((item,index) => objReturned[item]=arr2[index])
    return objReturned
  }
}

class Exercises{
  //should return true if n is even, false otherwise
  isEven(n) {
    return n % 2 == 0 ? true : false
  }

  //should remove at least one element from the array `arr`
  removeAtLeastOne(arr) {
    let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1
    arr.splice(0, numItemsToRemove)
    return arr
  }

  //should return a clean, lowercase string without these symbols: "!", "#", ".", ",", "'"
  simplify(str) {
    let symbols = ["!", "#", ".", ",", "'"]
    return str.split("").filter(c => symbols.indexOf(c) == -1).join("")
  }

  validate(arr){
    let counter = {
      true_vals: 0,
      false_vals: 0
    }

    arr.forEach(val => {
      if(val === true) counter.true_vals +=1
      if(val === false) counter.false_vals +=1
    })

    if(counter.true_vals === 0 && counter.false_vals === 0) return {error: "Need at least one boolean"}
    if(counter.true_vals > counter.false_vals) return true
    if(counter.true_vals <= counter.false_vals) return false

  }

  add(x, y){
    let stuff = []
    stuff.push(x, y)
  }

  add2(x, y,call){
    let stuff = []
    stuff.push(x, y)
    call()
  }

}

module.exports = {Exercises,ArrayManipulator,PictureManager, add, calcSqrt, removeBugs, clearLowPriority}
