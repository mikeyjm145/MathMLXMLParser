describe("Core Parsing Functions For MathML to Java",
function() {
	var index = require('./../../../index.js');
	
	function parse(input) {
        var mathToMathML = index(0, input).replace("[,]", "");
		return index(5, mathToMathML).replace("[,]", "");
	}
	
	it("should return absolute value of 5 MathML as output", function() {
		var valueToParse = "|5|";
		var actual = parse(valueToParse);
		var expected = "Math.abs(5)"
		
		expect(actual).toEqual(expected);
	});
});