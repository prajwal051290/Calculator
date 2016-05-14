
/*
 * GET home page.
 */

function homePage(req, res){

  console.log("Rendering Homepage");
  res.render('index', { title: 'Calculator Application' });
  
}

function performValidation(operand1, operand2, operation){
	
	var validationMsg = "";
	
	if (isNaN(operand1)){
		validationMsg = "Operand1 is not a number!!!";
		return validationMsg;
	}
	
	if (isNaN(operand2)){
		validationMsg = "Operand2 is not a number!!!";
		return validationMsg;
	}
	
	if (operation === "DIV" && operand2 === 0) {
		validationMsg = "Divide by zero exception!!!";
		return validationMsg;
	}
	
	return validationMsg;
	
}

function performOperation(req, res){
	
	var result, validationMsg, op1, op2, opType;
	
	console.log("Performing Calculator Operations");
	
	op1 = req.param("firstOperand");
	op2 = req.param("secondOperand");
	opType = req.param("opType");
	
	validationMsg = performValidation(op1, op2, opType);
	
	if (validationMsg === ""){
	
		op1 = parseFloat(op1);
		op2 = parseFloat(op2);
				
		if (opType === "ADD"){
			
			result = op1 + op2;
			
		}else if (opType === "SUB"){
			
			result = op1 - op2;
			
		}else if (opType === "MUL"){
			
			result = op1 * op2;
			
		}else if (opType === "DIV"){
			
			result = op1 / op2;
			
		}
	}
	else {
		result = validationMsg; 
	}
	
	res.end(result.toString());
	
}

exports.homePage = homePage;
exports.performOperation = performOperation;