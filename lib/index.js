var regMathParser = require('./parsers/Regular Math/RegMathToMathML.js');
var regMathParserBackup = require('./parsers/Regular Math/RegMathToMathMLBackup.js');

module.exports = function parse(parser, input) {
	var RegMath_To_MathML = 0;
	var RegMath_To_MathML_Backup = 1;
	var output;
	
	if (input === null || input === undefined) {
		console.log("Invalid data");
	}
	
	if (parser <= 0 && parser >= 10) {
		return "Error: Wrong range.";
	}
	
	switch(parser) {
		case RegMath_To_MathML:
			output = regMathParser.parse(input);
			break;
		case RegMath_To_MathML_Backup:
			output = regMathParserBackup.parse(input);
			break;
		default:
			output = "coming soon!";
			break;
	};
	
	console.log(output);
	
	return output;
};