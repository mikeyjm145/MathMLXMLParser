var regMathParser = require('./parsers/Regular Math/RegMathToMathML.js');

var MathMLParse = {
	parseRegMathToMathML: function(input) {
		return regMathParser.parse(input);
	}
};

module.export = MathMLParse;