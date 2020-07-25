const {Exercises,ArrayManipulator,PictureManager, add, calcSqrt, removeBugs, clearLowPriority} = require('./code')

// test("add should return sum of a + b", () => {
//     let sum = add(1, 2)
//     expect(sum).toBe(3)
// })

class checkClass{
  checkSqrt(){
    test("The function 'calcSqrt' should recive 2 numbers and return the square root of the numbers squares sum ", function(){
      let sum = calcSqrt(3,4)
      expect(sum).toBe(5)
    })
  }
  checkBugs(){

    test("should remove all BUGs from list of code", () => {
      let code = ["great code", "good code", "BUG", "async await awesome code", "BUG", "BUG", "general code"]
      let bugFreeCode = removeBugs(code)
      expect(bugFreeCode).not.toContain("BUG")
      expect(bugFreeCode).toContain("good code")
    })
  }

  checkPriority(){
    test("should keep only HIGH priority tasks", () => {
        let tasks = [{ text: "dummy", priority: "HIGH" }, { text: "dummy", priority: "LOW" }]
        let filteredTasks = clearLowPriority(tasks)
    
        expect(filteredTasks.length).toBe(1)
        expect(filteredTasks[0].priority).toBe("HIGH")
    })
    
  }

  checkPicture(){
    test("addPicture should add a picture URL to the pictureURLs array", function () {
      //sanity 
        const picManager = new PictureManager()
        expect(picManager.pictureURLs.length).toBe(0)
        
        picManager.addPicture("some_url")
        expect(picManager.pictureURLs.length).toBe(1)           //test
        expect(picManager.pictureURLs).toContain("some_url")    //double check 
      })

      test('removePicture should remove picture from the array', function(){
        //sanity 
        const picManager = new PictureManager()
        expect(picManager.pictureURLs.length).toBe(0)
        
        picManager.addPicture("some_url")
        expect(picManager.pictureURLs.length).toBe(1)

        picManager.removePicture("some_url")
        expect(picManager.pictureURLs.length).toBe(0)



      })
  }

  checkArrayMani(){

    test('manipulate should recieve 2 arrays and return "Not Same Length" if they are not the same length. If they are, it should return and object', function(){
      let arman = new ArrayManipulator()
      let answer = arman.manipulate(["food", "item", "location"],["cherry", "lightbulb"])
      expect(answer).toBe('Not Same Length')

      let answer2 = arman.manipulate(["food", "item", "location"],["cherry", "lightbulb", "kundofon"])
      expect(answer2).toEqual({food:"cherry", item:"lightbulb", location:"kundofon"})

    })
      
  }

  checkExer(){
    test('is even should return true if n is even, false otherwise', function(){
      let exece = new Exercises()
      let answer = exece.isEven(2)
      expect(answer).toBeTruthy()
      let answer2 = exece.isEven(1)
      expect(answer2).toBeFalsy()
    })

    test('is even should return true if n is even, false otherwise', function(){
      let exece = new Exercises()
      let answer = exece.isEven(-1)
      expect(answer).toBeFalsy()
      let answer2 = exece.isEven(2)
      expect(answer2).toBeTruthy()
    })

    test('removeAtleastOne should remove at least one element from the array `arr`', function(){
      let exece = new Exercises()
      let originalarr = [1,2,3,4,5]
      let arr = [1,2,3,4,5]
      let answerArr = exece.removeAtLeastOne(arr)
      expect(originalarr).not.toHaveLength(arr.length)

    })

    test(`simplify should return a clean, lowercase string without these symbols: "!", "#", ".", ",", "'"`, function(){
      let exece = new Exercises()
      let word = 'Hell!o, w#orld.'
      exece.simplify(word)
      expect(word).not.toContain(["!", "#", ".", ",", "'"])
    })

    test(`validate should recieve array of booleans, and return {error: "Need at least one boolean"} if there are no booleans or true/false according to the greater booleans`, function(){
      let arr1 = [1,2,3,4,5]
      let arr2 = [true,2,3,4,false]
      let arr3 = [true,2,3,4,false, true]
      let arr4 = [true,2,3,4,false, false]

      let exece = new Exercises()

      let answer1 = exece.validate(arr1)
      let answer2 = exece.validate(arr2)
      let answer3 = exece.validate(arr3)
      let answer4 = exece.validate(arr4)

      expect(answer1).toStrictEqual({error: "Need at least one boolean"})
      expect(answer2).toStrictEqual(false)
      expect(answer3).toStrictEqual(true)
      expect(answer4).toStrictEqual(false)

    })

    test('tests if push has been called', function(){
      let exece = new Exercises()
      let spy = jest.spyOn(exece, 'add')
      exece.add(1,2)
      expect(spy).toHaveBeenCalled()
      spy.mockRestore()

    })

    test('tests if push has been called', function(){
      let exece = new Exercises()
      let spy = jest.spyOn(Array.prototype, 'push')
      exece.add(1,2)
      expect(spy).toHaveBeenCalled()
      spy.mockRestore()

    })

    test('tests if push has been called', function(){
      let exece = new Exercises()
      let push = jest.fn()
      exece.add2(1,2,push)
      expect(push).toHaveBeenCalled()

    })
  }
}

/*
Write a method called validate
The method should receive an array of booleans
It should verify that there is at least one boolean in the array
If there isn't, it should return {error: "Need at least one boolean"}
If there are more trues than falses in the array, the method should return true
Otherwise, it should return false
*/

let check = new checkClass()

// check.checkSqrt()
// check.checkBugs()
// check.checkPriority()
// check.checkPicture()
// check.checkArrayMani()
check.checkExer()