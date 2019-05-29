


function inputs() {
    //input three values from user
    var triangleinputs = [];
    var side1, side2, side3, triangleSidesinput;
    side1=document.getElementsByName("sideA")[0].value;
    side2=document.getElementsByName("sideB")[0].value;
    side3=document.getElementsByName("sideC")[0].value;
    triangleinputs.push(side1,side2,side3);
    triangleSidesinput = triangleinputs.map(Number);
    triangleSidesinput.sort()
    console.log(triangleSidesinput)
    isosceleseTest(triangleSidesinput);
    
  };
// inputs()

// triangleinputs.push(side1,side2,side3);               //Push the values from the input prompt to an array
//   triangleinputs;
//   triangleSidesinput = triangleinputs.map(Number);  //map the string inputs received to numbers

// function triangleSidesinputSort(){
//   triangleSidesinput.sort()
// }

//Separate Function to test the null input condition
function nullInputTest() {
    if ((side1 == 0) || (side2 == 0) || (side3 == 0))  {
      //alert ("You Have entered a Null value, this is not a Triangle")
      text = "You Have entered a Null value, this is not a Triangle.";
  };
}

//function to Test if the 3 -sides of the triangle are equal but also test that a null value has not been entered by calling the nullInputTest() Function
function equilateralTest() {
  equilateralTest()
  if ((side1 == side2) && (side2 == side3)) {
    //alert ("Equilateral Triangle")
    text = "This is an Equilateral Triangle.";
};
}

function isosceleseTest(triangleSidesinput){
  if ((triangleSidesinput[0] === triangleSidesinput[1] || triangleSidesinput[1] === triangleSidesinput[1]) && ((triangleSidesinput[0] + triangleSidesinput[1]) > triangleSidesinput[2])) {
      alert("Isoscelese Triangle")
      text = "This is an Isoscelese Triangle.";
}
}

function scalene(){
  if ((triangleSidesinput[0] !== triangleSidesinput[1]) && (triangleSidesinput[0] !== triangleSidesinput[2])) {
      //alert("Scalene Triangle");
      text = "Scalene.";
}
  
};


//function triangleProgram(){
 // inputs();
  
  /*if nullInputTest() ===false {
    equilateralTest()
    isosceleseTest()
    scalene()

  };
  else {
    Alert("Done");
    }



}
    */
  
