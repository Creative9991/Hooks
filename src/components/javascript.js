const Javascript = () => {
  //Setting the value with Local storage in HTML/ javascript

  //localStorage.setItem("myCat", "Tom");

  //const myCat = localStorage.getItem("Cat");

  //console.log(myCat);

  // Output : -------> Cat

  // Setting the value with Session Storage in HTML/ Javascript

  //sessionStorage.setItem("laptop", "Mac");

  //const newlaptop = sessionStorage.getItem("laptop");

  //console.log(newlaptop);
  // OUTPUT : -------> Mac

  //---------[[[[.reduce usage in Javascript]]]]]]------------

  //1) To sum of given array values

  function findReduceSum() {
    const myArray = [1, 2, 3, 4, 5];
    var initialValue = 0;
    var myNewvalue = myArray.reduce(
      (previouseValue, currentValue) => previouseValue + currentValue,
      initialValue
    );

    console.log(myNewvalue);
  }

  findReduceSum();

  //2 It can also providing summing of array values

  function arraysValuesum() {
    const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];

    var arrayInitialValue = 0;
    const summingArrayValues = objects.reduce(
      (arrayPreviousValue, arrayCurrentValue) =>
        arrayPreviousValue + arrayCurrentValue.x,
      arrayInitialValue
    );

    console.log(summingArrayValues);
  }
  arraysValuesum();

  // Finding Duplicates in Array

  function findDuplicate() {
    const myArray = [
      "a",
      "b",
      "a",
      "b",
      "c",
      "e",
      "e",
      "c",
      "d",
      "d",
      "d",
      "d",
    ];
    const myArrayWithNoDuplicates = myArray.reduce(
      (previousValue, currentValue) => {
        if (!previousValue.includes(currentValue)) {
          return [...previousValue, currentValue];
        }
        return previousValue;
      },
      []
    );
    console.log(myArrayWithNoDuplicates);
  }

  findDuplicate();

  //// -------- Reverse -------------////

  function reversedArra() {
    const reversedArray = [2, 3, 4, 5, 6, 7, 8];

    const myReversedArray = reversedArray.reverse();

    console.log(myReversedArray);
  }

  reversedArra();

  ////////----- Array-Concatination ------////////

  const howToConcat = (myNewArrayOne, myNewArrayTwo) => {
    const myNewArrayConcat = myNewArrayOne.concat(myNewArrayTwo);

    console.log(myNewArrayConcat);
  };

  howToConcat([1, 2, 3, 4, 5, 67], [3, 4, 5, 6, 7, 9]);

  //------->  Two Arrays Intersection <--------

  function arrayCancat() {
    var arrayOne = [1, 2, 3, 4, 5, 6];
    var arrayTwo = [9, 8, 7, 6, 5, 4];

    const intersection = arrayOne.filter((element) =>
      arrayTwo.includes(element)
    );

    console.log(intersection);
  }

  arrayCancat();

  // Setting the cookie with Cookie in HTML/Javascript

  document.cookie = "username=Mukesh Katipally";
  /// ------>------------------------------------------------------
  /// ------>Call apply bind in javascript
  //--------?------------------------------------------------------

  /// Call

  var firstEmployee = { name: "Mukesh", age: 29 };

  function myCallFunction(grettings1) {
    console.log(grettings1 + " " + this.name + " " + this.age);
  }

  myCallFunction.call(firstEmployee, "Hello");

  /// Apply

  var firstapplyEmployee = { name: "Mukesh", age: 29 };
  var secondapplyEmployee = { name: "Katipally", age: 30 };

  function myApplyFunction(grettings1, grettings2) {
    console.log(
      grettings1 + " " + this.name + " " + this.age + ", " + grettings2
    );
  }

  myApplyFunction.apply(firstapplyEmployee, ["Arey", "Namasthe"]);
  myApplyFunction.apply(secondapplyEmployee, ["Arey", "Namasthe"]);

  //// Bind

  var myNewBindEmployeeOne = { name: "Mukesh", age: 29 };
  var myNewBindEmployeeTwo = { name: "Katipally", age: 30 };

  function myFunctionBind(bindGreeting1, bindGreeting2) {
    console.log(
      bindGreeting1 + "--" + this.name + "--" + this.age + "---" + bindGreeting2
    );
  }

  var myNewBindMethod = myFunctionBind.bind(myNewBindEmployeeOne);
  var myNewBindMethodTwo = myFunctionBind.bind(myNewBindEmployeeTwo);

  myNewBindMethod("Hello", "How Are you");
  myNewBindMethodTwo("Hello", "How are you");

  ////////////////// End of Call aply bind /////////////////////

  ///////////////// Slice in JS ///////////////////////////////

  var sliceVar = [23, 4, 6, 7, 8, 9];

  var myNewSlicedVar = sliceVar.slice(1, 2);

  console.log(myNewSlicedVar);

  // It won't mutate the original Array
  console.log(sliceVar);

  ////////////////// Splice in JS ////////////////////////

  var mySplice = [1, 2, 3, 4, 5, 6, 7];

  var myNewSplice = mySplice.splice(0, 3);

  console.log(myNewSplice);

  //[1,2,3]

  // it Mutate the original Array
  console.log(mySplice);
  // [4,5,6,7]

  /// --------- Movies

  //-------> Clousure Concept JS ------//

  // Inner Function can able to access the outer function variable is a concept of the Javascript

  function clousureFunction(x) {
    return function (y) {
      return x + y;
    };
  }

  const myAdd = clousureFunction(5);

  console.log(myAdd(10));

  ///// Hoisted ///////////

  foo();
  function foo() {
    console.log("Hello");
  }

  // Where as declaration can not be hoisted only the assignement be hoisted

  //If we un the below code it gives foo() is not a function

  // foo();
  // var foo = function(){
  //   console.log('Hello');
  // }

  //References
  //https://www.youtube.com/watch?v=Ypp64J5KAKA

  // Call back in JS

  function callbackOne() {
    setTimeout(() => {
      console.log("Hello i will be called after 5 secs");
    }, 5000);
  }

  function callbackTwo() {
    console.log("Hello i will be called immediately");
  }

  callbackOne();
  callbackTwo();

  // Map

  const someObjects = new Map();

  someObjects.set("name", "mukesh");
  someObjects.set("address", "Here");

  console.log(someObjects.get("address"));

  /////////////////////////////////////////////
  /////// Reverse a string
  var myName = "MY NAME IS MUKESH";

  var newName = myName.split("").reverse().join("");

  console.log(newName);

  /// Deep Comparison vs Shallow Comparision of the object

  // Shallow Copy is the concept of copying the obj in to different variable
  // If we change the new obect value then the original value going to be changed....

  var myDetails = {
    fullName: "Mukesh",
    firstName: "Mukeshreddy",
    lastName: "Katipally",
  };

  var myNewDetails = myDetails;

  console.log(myNewDetails);

  myNewDetails.fullname = "Katipally Mukeshreddy";

  console.log(myDetails);

  // then the output would be

  /*
 fullname : 'Katipally Mukeshreddy';
   firstName : 'Mukeshreddy',
   lastName : 'Katipally'



 ///Deep copy

if we try to copy or create an object with deep copy concept 
then even if changed some value inside newly created object the original value changes
 
 */

  var myBio = {
    dateOfMonth: "September",
    dateOfYear: 1992,
    date: 9,
  };

  var myNewBio = {
    dateOfMonth: myBio.dateOfMonth,
    dateOfYear: myBio.dateOfYear,
    date: myBio.date,
  };

  myNewBio.date = 8;

  console.log(myBio);

  // higher order Function example

  //A Higher-Order Function is a regular
  //function that takes one or more functions
  //as arguments and/or returns a function as a value from it.

  //For example, take the popular Array methods like, map(),
  // filter(), reduce(), find(), and many more. All these functions
  //take another function as an argument to apply it to the elements of an array.

  //----> the below function is the first example of normal function that do some increment

  const incValues = [2, 34, 87];
  const n = 2;

  //write a function that increse the array values with given n

  function myIncFuntion(incValues, n) {
    const newArrayInc = [];

    for (var i = 0; i < incValues.length; i++) {
      newArrayInc.push(incValues[i] + n);
    }
    return newArrayInc;
  }

  console.log(myIncFuntion(incValues, n));

  //Pure Function

  //A Pure Function is a function that produces the same output
  //for the same input. It means it returns the same result when you pass the same arguments. A pure function shouldn't
  // have any side effects to change the expected output.

  /*
As a developer we should always make sure the written function as below
Predictable: It produces a predictable output for the same inputs.
Readable: Anyone reading the function as a standalone unit can understand its purpose completely.
Reusable: Can reuse the function at multiple places of the source code without altering its and the caller's behavior.
Testable: We can test it as an independent unit.

Pure function is a best example to follow all of these above mentioned functionalities

a pure function, reducing side effects will make your code better to manage and maintain.
 It means lesser bugs, quick identification of issues, isolating problems, increased reusability 
 and testability.

*/

  ///-----------------------------------

  //simple pure function example -1

  function sayGreeting(name) {
    return `Hello ${name}`;
  }

  console.log(sayGreeting("Mukesh"));

  //simple pure function example -2

  function sayPure(x, y) {
    return x * y;
  }
  console.log(sayPure(7, 6));

  /// --------------------------------

  /// ------------------- Class - Javascript //////////////////

  const myClass = class {
    constructor(name, height) {
      this.name = name;
      this.height = height;
    }
  };

  class RectangleOne {
    construtor(name, height) {
      this.name = name;
      this.height = height;
    }
  }

  const myNewClass = class RectangleTwo {
    constructor(name, height) {
      this.name = name;
      this.height = height;
    }
  };

  //BOdy of the class

  /* Kind: Getter, setter, method, or field
Location: Static or instance
Visibility: Public or private */

  //Constructor is the place where we can intialize the object of the class

  // THere is only one constuctor should be in the class, if we specify more than one constructor we get an error saying syntax error

  //Static initialization

  //Getter

  class Rectanular {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }

    get calculate() {
      return this.getCalculate();
    }

    getCalculate() {
      return this.height * this.width;
    }
  }

  let newOutput = new Rectanular(10, 10);

  console.log(newOutput.calculate);

  //----------------------------Inheritence concept and Super class in javascript------------------------------------

  class Dog {
    constructor(name) {
      this.name = name;
    }

    speak() {
      console.log(`${this.name}, is a dog name`);
    }
  }

  class Puppy extends Dog {
    constructor(name) {
      super(name);
    }

    speak() {
      console.log(`${this.name}, is a dog name`);
    }
  }

  const frooty = new Puppy("Parota");

  frooty.speak();

  return <div className="my-javascript"></div>;
};

export default Javascript;
