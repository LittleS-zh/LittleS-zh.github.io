//define three variable
alert("javascript was launched");
var firstNum, secondNum = "0", operator="";  

//the event when the number button was clicked
function assignment(){
	if(secondNum == "0")
	{
		secondNum = clickNum;
	}
	else
	{
		secondNum = secondNum + clickNum; //combine the string
	}
document.getElementById("result").value = secondNum;//display the number into the result bar
}												

//the event when the oprator button was clicked
function operatorChange() 
{
	if (operator == "")  
//first time to count a number
	{
	firstNum = secondNum;
	secondNum = "0";
	}
//to continue counting the number
	else
	{
	clickEqual();
	}
	operator = sign; 
}

function numberClicked(x)
{
	clickNum = x;
	assignment();
}


function clickPoint()
{
	if(secondNum.indexOf(".") == -1) //to check whether secondNum have the sign "."
	{
		if(secondNum == "0") //if secondNum == "0", set secondNum to "0."
		{	
			secondNum = "0.";
		}
		else
		{	
			secondNum = secondNum + "."; //if secondNum not equal to zero, add an "." after secondNum.
		}
	}
	else{}
document.getElementById("result").value = secondNum;//display the result.
}

function operatorClicked(x)
{
	sign = x
	operatorChange();
	document.getElementById("result").value = operator;//display the operator into the result bar
}

function clickEqual(){
switch (operator)
{
	case "+":
	firstNum = parseFloat(firstNum) + parseFloat(secondNum); //to extract the number in the string and add them
	break;
	
	case "-":
	firstNum = firstNum - secondNum; //to minus two number
	break;
	
	case "*":
	firstNum = firstNum * secondNum; // to multiply two number
	break;
	
	case "/":
	firstNum = firstNum / secondNum; // to divide two number
	break;
}
operator = "";
secondNum = "0";
document.getElementById("result").value = firstNum; //display the result in the result bar.
}

//to reset the whole calculator, clear the screen
function clickReset(){
	//reset all number and operator
	firstNum = "0";
	secondNum = "0";
	operator = "";
	document.getElementById("result").value = "" ;//clear the screen
}

function buttonHover(obj)
{
	obj.style.backgroundColor = "lightblue";
}

function buttonOut(obj)
{
	obj.style.backgroundColor = "lightgrey";
}

function sunForFun()
{
	var x = 0;
	for(var i=0; i<=100; i++)
	{
		x = x + i;
	}
	alert("the result is " + x);
}