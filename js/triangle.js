var triangleinputs = [];
var triangleSidesinput, text;
function sideInputs() {
    alert("This is the beginning of the code");
    var side1=parseInt(document.scanInputs.sideA.value);
    var side2=parseInt(document.scanInputs.sideB.value);
    var side3=parseInt(document.scanInputs.sideC.value);
    triangleSidesinput = triangleinputs.push(side1,side2,side3).map(Number);
    
    alert(triangleSidesinput);
    
    triangleSidesinputSort();
    nullInputTest();
    equilateralTest()
    isosceleseTest()
    scalene()
  }
  //document.write(triangleSidesinput);

  function triangleSidesinputSort(){
    triangleSidesinput.sort();
  }
  
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
  
  function isosceleseTest(){
    if ((triangleSidesinput[0] === triangleSidesinput[1]) && ((triangleSidesinput[0] + triangleSidesinput[1]) <= triangleSidesinput[2])) {
        //alert("Isoscelese Triangle");}
        text = "This is an Isoscelese Triangle.";
  }
}
  
  function scalene(){
    if ((triangleSidesinput[0] !== triangleSidesinput[1]) && (triangleSidesinput[0] !== triangleSidesinput[2])) {
        //alert("Scalene Triangle");
        text = "Scalene.";
  }
  };