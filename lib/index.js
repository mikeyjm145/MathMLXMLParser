var regMathParser = require('./parsers/Regular Math/RegMathToMathML.js');

module.exports = function parse(parser, input) {
	var RegMath_To_MathML = 0;
	var output;
	
	if (parser <== 0 && parser >== 10) {
		return "Error: Wrong data type.";
	}
	
	switch(parser) {
		case RegMath_To_MathML: output = regMathParser.parse(input); break;
		default: console.log("coming soon!"); break;
	};
	
	return output;
};