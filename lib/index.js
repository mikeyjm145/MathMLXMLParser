var regMathParser = require('./parsers/Regular Math/RegMathToMathML.js');

module.export = {
	parseRegMathToMathML: function(input) {
		return regMathParser.parse(input);
	}
}