/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function(){
    clickResult();
    var question = [];
    ask(question);
   
});

var clickResult = function(){
    $(".digit").mousedown(function(){
        $(this).css('background-color', 'white');
       
        $(".digit").mouseup(function(){
            $(this).css('background-color', 'black');
        });
    });
    $(".action").mousedown(function(){
        $(this).css('background-color', 'white');
        
        $(".action").mouseup(function(){
            $(this).css('background-color', 'indianred');
        });
    });
}

var ask = function(array1){
    var view = document.getElementById('input');
    $(".digit").click(function(){
       var text = $(event.target).text();
        view.innerHTML = view.innerHTML + text;
        array1.push(text);
        if(array1.length > 11)
        {
            limit();
        }
    });
    $(".action").click(function(){
       
       var text = $(event.target).text();
        view.innerHTML = view.innerHTML + " " + text + " ";
          if(array1.length > 11)
        {
            limit();
        }
        
    });
    
    $("#add").click(function(){
        array1.push("+");
        
    }); 
    $("#subtract").click(function(){
        array1.push("-");
    }); $("#multiply").click(function(){
        array1.push("*");
    });
    $("#divide").click(function(){
        array1.push("/");
    }); 
    
  
    $("#clear").click(function(){
        array1 = [];
       
        view.innerHTML = " ";
    }); 
    $("#equals").click(function(){
        solve(array1);
        array1 = [];
    });
}

var limit = function()
{
    var displayed = document.getElementById('input');
    var displayText = displayed.innerHTML;
    var broken =  displayText.toArray;
    var newDisplay = " ";
    for(j = 1; j < 9; j++)
        {
            newDisplay.concat(broken[j]);
        }
    window.prompt(newDisplay);
    displayed.innerHTML = newDisplay;
}

var solve = function(arrayFull){
    var actions = ["+", "-", "*", "/"];
    var firstNum = "";
    var secondNum = "";
    var operator = "";
    var result = "";
    var onFirst = new Boolean('true');
    var hold = "";
    if(actions.includes(arrayFull[0]))
        {
            var view = document.getElementById('input');
            view.innerHTML = "Invalid Entry";
        }
    else{
        var cycles = 0;
        for(i = 0; i < arrayFull.length; i++)
            {
                if(actions.includes(arrayFull[i]))
                    {
                        operator = arrayFull[i];
                        hold = i;
                        break;
                    }
                else
                {
                    cycles++;
                }
            }
            if(cycles === arrayFull.length)
                {
                    var view = document.getElementById('input');
                    view.innerHTML = "Invalid Entry";
                }

            for(j = 0; j < hold; j++)
                {
                    firstNum += arrayFull[j];
                }
            for(k = hold + 1; k < arrayFull.length; k++)
                {
                    secondNum += arrayFull[k];
                }
    }
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    if(operator === "+")
       {
           result = add(firstNum, secondNum);
       }
    else if(operator === "-")
        {
           result = subtract(firstNum, secondNum);
        }
    else if(operator === "/")
        {
           result = divide(firstNum, secondNum)
        }
    else if(operator === "*")
        {
           result = multiply(firstNum, secondNum);
        }
    
     var view = document.getElementById('input');
     var text = result;
     view.innerHTML = view.innerHTML + " " + text;

}

var add = function(numA, numB)
{
    return numA + numB;
}

var subtract = function(numA, numB)
{
    return numA - numB; 
}

var divide = function(numA, numB)
{
    return numA/numB;
}

var multiply = function(numA, numB)
{
    return numA * numB;
}