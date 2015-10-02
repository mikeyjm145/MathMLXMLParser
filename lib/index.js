var regMathParser = require('./parsers/Regular Math/RegMathToMathML.js');

MathXMLParser.parserRegularMath = {
	parseRegMathToMathML: function(input) {
		return regMathParser.parse(input);
	}
}