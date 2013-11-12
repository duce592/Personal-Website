$(document).ready(function(){
  
	var number = "";
    var newnumber = "";
    var operator = "";
    var totaldiv = $("#calculatorScreen");
    totaldiv.text("0");
    
    $(".number").click(function(){
		number += $.trim($(this).text());
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
			number = (parseInt(number, 10) + parseInt(newnumber,10)).toString(10);
		} else if (operator === "-"){
			number = (parseInt(newnumber, 10) - parseInt(number,10)).toString(10);
		} else if (operator === "/"){
			number = (parseInt(newnumber, 10) / parseInt(number,10)).toString(10);
		} else if (operator === "*"){
			number = (parseInt(newnumber, 10) * parseInt(number,10)).toString(10);
		}
		totaldiv.text(number);
    });
    
});