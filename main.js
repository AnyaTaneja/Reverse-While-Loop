function Submit()
{
    var operator=(document.getElementById("input3").value) ;
    var number=(document.getElementById("input1").value);
    var number1=(document.getElementById("input2").value);
    switch(operator){
        case "+":
            document.getElementById("display").innerHTML= number +number1
            break;
        case "-":
            document.getElementById("display").innerHTML=number - number1
            break;
        case "*":
            document.getElementById("display").innerHTML=number * number1
            break;
        case "/":
            document.getElementById("display").innerHTML=number / number1
            break;
        default:
            document.getElementById("display").innerHTML="Please enter a valid operator"
            break;
        
        
    }
}

