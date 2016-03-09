describe("Core Parsing Functions For Regular Math to MathML",
function() {
	var regMathToMathMLParser = require('./../../../lib/parsers/Regular Math/RegMathToMathML.js');
	
	function parse(input) {
		return regMathToMathMLParser.parse(input);
	}
	
	it("should return <mn>5</mn> as output", function() {
		var valueToParse = "5";
		var actual = parse(valueToParse);
		var expected = "<mn>5</mn>\n"
		
		expect(actual).toEqual(expected);
	});
	
	it("should return <mi>x</mi> as output", function() {
		var valueToParse = "x";
		var actual = parse(valueToParse);
		var expected = "<mi>x</mi>\n"
		
		expect(actual).toEqual(expected);
	});
	
	it("should return mfenced/mn/mo/mn as output", function() {
		var valueToParse = "(5+4)";
		var actual = parse(valueToParse);
		var expected = "<mfenced open='(' close=')' separators=''>\n<mn>5</mn>\n<mo>+</mo>\n<mn>4</mn>\n</mfenced>\n"
		
		expect(actual).toEqual(expected);
	});
	
	it("should return msqrt/mn as output", function() {
		var valueToParse = "#{5}";
		var actual = parse(valueToParse);
		var expected = "<msqrt>\n<mn>5</mn>\n</msqrt>\n"
		
		expect(actual).toEqual(expected);
	});
    
    it("should return square root mathml as output", function() {
		var valueToParse = "sqrt(5)";
		var actual = parse(valueToParse).replace(",", "");
		var expected = "<msqrt>\n<mn>5</mn>\n</msqrt>\n"
		
		expect(actual.replace(",", "")).toEqual(expected);
	});
    
    it("should return cubed root mathml as output", function() {
		var valueToParse = "cbrt(5)";
		var actual = parse(valueToParse).replace(",", "");
		var expected = "<msup>\n<mrow>\n<mn>5</mn>\n</mrow>\n<mrow>\n<mn>3</mn>\n</mrow>\n</msup>\n"
		
		expect(actual.replace(",", "")).toEqual(expected);
	});
    
    it("should return logrithm formula mathml as output", function() {
		var valueToParse = "log(10)";
		var actual = parse(valueToParse).replace(",", "");
		var expected = "<mfrac>\n<mrow>\n<mfunc>log</mfunc>\n<mfenced open='(' close=')' separators=''>\n<mn>10</mn>\n</mfenced>\n</mrow>\n<mrow>\n<mfunc>log</mfunc>\n<mfenced open='(' close=')' separators=''>\n<mi>e</mi>\n</mfenced>\n</mrow>\n</mfrac>\n"
		
		expect(actual.replace(",", "")).toEqual(expected);
	});
    
    it("should return exponential mathml as output", function() {
		var valueToParse = "5^3";
		var actual = parse(valueToParse).replace(",", "");
		var expected = "<msup>\n<mrow>\n<mn>5</mn>\n</mrow>\n<mrow>\n<mn>3</mn>\n</mrow>\n</msup>\n"
		
		expect(actual.replace(",", "")).toEqual(expected);
	});
    
    it("should return exponential mathml with invisible parenthesis as output", function() {
		var valueToParse = "5^{3}";
		var actual = parse(valueToParse).replace(",", "");
		var expected = "<msup>\n<mrow>\n<mn>5</mn>\n</mrow>\n<mrow>\n<mfenced open='' close='' separators=''>\n<mn>3</mn>\n</mfenced>\n</mrow>\n</msup>\n"
		
		expect(actual.replace(",", "")).toEqual(expected);
	});
    
    it("should return floor mathml as output", function() {
		var valueToParse = "floor(5+5)";
		var actual = parse(valueToParse).replace(",", "");
		var expected = "<mfenced open='&lfloor;' close='&rfloor;' separators=''>\n<mn>5</mn>\n<mo>+</mo>\n<mn>5</mn>\n</mfenced>\n"
		
		expect(actual.replace(",", "")).toEqual(expected);
	});
    
    it("should return ceil mathml as output", function() {
		var valueToParse = "ceil(5+5)";
		var actual = parse(valueToParse).replace(",", "");
		var expected = "<mfenced open='&lceil;' close='&rceil;' separators=''>\n<mn>5</mn>\n<mo>+</mo>\n<mn>5</mn>\n</mfenced>\n"
		
		expect(actual.replace(",", "")).toEqual(expected);
	});
});