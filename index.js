var sax = require('./lib/sax/sax.js');
var regMathParser = require('./lib/parsers/Regular Math/RegMathToMathML.js');
var regMathParserBackup = require('./lib/parsers/Regular Math/RegMathToMathMLBackup.js');
var mathMLToRegMathParser = require('./lib/parsers/MathML/MathMLToRegMath.js');

var javaParser = require('./lib/parsers/Java/JavaToMathML.js');
var javaParserBackup = require('./lib/parsers/Java/JavaToMathMLBackup.js');
var mathMLToJavaParser = require('./lib/parsers/MathML/MathMLToJava.js');

module.exports = function parse(parser, input) {
	var RegMath_To_MathML = 0;
	var RegMath_To_MathML_Backup = 1;
	var MathML_To_RegMath = 2;
    var Java_To_MathML = 3;
    var Java_To_MathML_Backup = 4;
    var MathML_To_Java = 5;
	var Java_To_Math = 6;
	var Math_To_Java = 7;

	var output = "";
    var translated = "";
	
	var ERRORS = [
		"Please insert 'Math.' in front of expression.",
		"This is not a valid implementaion of java Math function.",
		"Please use supported Java Math Class method.",
		"Must include one numbers/expressions between parenthesis.",
		"This is not a supported Math class function.",
		"Please insert the both parameters into the expression.",
		"Please insert the first parameter into the expression.",
		"Please insert the second parameter into the expression."
    ];
	
	var possibleErrors = ["The code has these errors:\n\n"];

	function theErrors(theOutput) {
		var hasErrors = false;
		for (var i = 0; i < ERRORS.length; i++) {
            var error = ERRORS[i];
			
			if (theOutput.indexOf(error) > -1) {
                console.log(error);
				possibleErrors.push("- " + error + "\n");
				hasErrors = true;
			}
		}
		
		return {errors: possibleErrors.join(""), hasErrors: hasErrors};
	}
    
	var errorCheck = {};

	if (input === null || input === undefined) {
		console.log("Invalid data");
		return "Bad Request";
	}

	if (parser <= 0 && parser >= 10) {
		return "Error: Wrong range.";
	}

	switch (parser) {
		case RegMath_To_MathML:
			output = regMathParser.parse(input);
			break;
		case RegMath_To_MathML_Backup:
			output = regMathParserBackup.parse(input);
			break;
		case MathML_To_RegMath:
			output = mathMLToRegMathParser.parse(sax, input, true);
			break;
        case Java_To_MathML: {
                output = javaParser.parse(input);
                
                errorCheck = theErrors(output);
                if (errorCheck.hasErrors) { output = errorCheck.errors; }
            }
            
			break;
        case Java_To_MathML_Backup: {
                output = javaParserBackup.parse(input);
                
                errorCheck = theErrors(output);
                if (errorCheck.hasErrors) { output = errorCheck.errors; }
            }
            
			break;
        case MathML_To_Java:
			output = mathMLToJavaParser.parse(sax, input);
			break;
		case Java_To_Math: {
                translated = javaParser.parse(input);
                
                errorCheck = theErrors(translated); console.log(translated);
                if (errorCheck.hasErrors) { output = errorCheck.errors; }
                else { output = mathMLToRegMathParser.parse(sax, translated, false); }
            }
			
			break;
		case Math_To_Java: {
                translated = regMathParser.parse(input);
                console.log(translated);
                output = mathMLToJavaParser.parse(sax, translated);
                
                errorCheck = theErrors(output);
                if (errorCheck.hasErrors) { output = errorCheck.errors; }
            }
            
			break;
		default:
			output = "coming soon!";
			break;
	};

	return output;
};