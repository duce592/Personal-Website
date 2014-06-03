$(document).ready(function(){
  
	var num = "";
    var newnum = "";
    var operator = "";
    var totaldiv = $("#calculatorScreen");
    totaldiv.text("0");
    

    $(".number").click(function(){
    	if (num.length <= 7){
    		num += $.trim($(this).text());
			totaldiv.text(num);
    	} else {
    		alert("To many characters!")
		}
    });
    

    $(".operator").click(function(){
		operator = $.trim($(this).text());
		newnum = num;
		num = "";
		totaldiv.text("0");
    });
    

    $("#clearButton").click(function(){
		num = "";
		totaldiv.text("0");
		newnum = "";
    });
    

    $("#equalsButton").click(function(){
		if (operator === "+"){
			num = (parseFloat(newnum) + parseFloat(num));
		} else if (operator === "-"){
			num = (parseFloat(newnum) - parseFloat(num));
		} else if (operator === "/"){
			num = (parseFloat(newnum) / parseFloat(num));
		} else if (operator === "*"){
			num = (parseFloat(newnum) * parseFloat(num));
		};

		if (num.toString().indexOf('.') != -1){
			num = num.toFixed(2);
		};
			totaldiv.text(num);
			
    });
    

});