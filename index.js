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

	var output;

	if (input === null || input === undefined) {
		console.log("Invalid data");
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
			output = mathMLToRegMathParser.parse(sax, input);
			break;
        case Java_To_MathML:
			output = javaParser.parse(input);
			break;
        case Java_To_MathML_Backup:
			output = javaParserBackup.parse(input);
			break;
        case MathML_To_Java:
			output = mathMLToJavaParser.parse(sax, input);
			break;
		default:
			output = "coming soon!";
			break;
	};

	return output;
};