$(document).ready(function(){
  
	var number = "";
    var newnumber = "";
    var operator = "";
    var matches = "";
    var totaldiv = $("#calculatorScreen");
    totaldiv.text("0");
    
    $(".number").click(function(){
		number += $.trim($(this).text());
		totaldiv.text(number);
    });
    
    $("#decimal").click(function(){
		if (number.indexOf('.') == -1){
			number += $.trim($(this).text());
		}
		totaldiv.text(number);
    });
    
    $(".operator").click(function(){
		operator = $.trim($(this).text());
		newnumber = number;
		number = "";
		totaldiv.text("0");
    });
    
    $("#clearButton").click(function(){
		number = "";
		totaldiv.text("0");
		newnumber = "";
    });
    
    $("#equalsButton").click(function(){
		if (operator === "+"){
			number = (parseFloat(number) + parseFloat(newnumber)).toString();
		} else if (operator === "-"){
			number = (parseFloat(newnumber) - parseFloat(number)).toString();
		} else if (operator === "/"){
			number = (parseFloat(newnumber) / parseFloat(number)).toString();
		} else if (operator === "*"){
			number = (parseFloat(newnumber) * parseFloat(number)).toString();
		}
		totaldiv.text(number);
		number = "";
    });
    
});