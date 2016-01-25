describe("Core Parsing Functions For Java to MathML",
function() {
	var regMathToMathMLParser = require('./../../lib/parsers/Java/JavaToMathML.js');
	
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
		var valueToParse = "double x =";
		var actual = parse(valueToParse);
		var expected = "<mi>double</mi>\n <mi>x</mi>\n<mo>=</mo>\n<mn></mn>\n"
		
		expect(actual).toEqual(expected);
	});
	
	it("should return mfenced/mn/mo/mn as output", function() {
		var valueToParse = "(5+4)";
		var actual = parse(valueToParse);
		var expected = "<mfenced open='(' close=')' separators=''>\n<mn>5</mn>\n<mo>+</mo>\n<mn>4</mn>\n</mfenced>\n"
		
		expect(actual).toEqual(expected);
	});
	
	it("should return msqrt/mn as output", function() {
		var valueToParse = "double x = Math.sqrt(5)";
		var actual = parse(valueToParse);
		var expected = "<mi>double</mi>\n <mi>x</mi>\n<mo>=</mo>\n<msqrt>\n<mn>5</mn>\n</msqrt>\n"
		
		expect(actual).toEqual(expected);
	});
    
    it("should return Math.sin() as output", function() {
		var valueToParse = "Math.sin(5+4)";
		var actual = parse(valueToParse);
		var expected = "<mfunc>sin</mfunc>\n<mfenced open='(' close=')' separators=''>\n<mn>5</mn>\n<mo>+</mo>\n<mn>4</mn>\n</mfenced>\n"
		
		expect(actual).toEqual(expected);
	});
    
    it("should return Math.pow(,) as output", function() {
		var valueToParse = "Math.pow(4,2)";
		var actual = parse(valueToParse);
		var expected = "<msup>\n<mn>4</mn>\n<mn>2</mn>\n</msup>\n"
		
		expect(actual).toEqual(expected);
	});
    
    it("should return mn=>+5 as output", function() {
		var valueToParse = "+5";
		var actual = parse(valueToParse);
		var expected = "<mn>+5</mn>\n"
		
		expect(actual).toEqual(expected);
	});
    
    it("should return mn/mo/mn as output", function() {
		var valueToParse = "5+-5";
		var actual = parse(valueToParse);
		var expected = "<mn>5</mn>\n<mo>+</mo>\n<mn>-5</mn>\n"
		
		expect(actual).toEqual(expected);
	});
    
    it("should return mn/mo/mi as output", function() {
		var valueToParse = "5 + something";
		var actual = parse(valueToParse).replace(",", "");
		var expected = "<mn>5</mn>\n<mo>+</mo>\n<mi>something</mi>\n"
		
		expect(actual.replace(",", "")).toEqual(expected);
	});
});

describe("Parenthises Parsing Function For Java to MathML Backup",
function() {
    var regMathToMathMLParser = require('./../../lib/parsers/Java/JavaToMathMLBackup.js');
	
	function parse(input) {
		return regMathToMathMLParser.parse(input);
	}
    
    it("should return <mtext><mn>5</mn></mtext> as output", function() {
		var valueToParse = "(5)";
		var actual = parse(valueToParse);
		var expected = "<mtext>(</mtext>\n<mn>5</mn>\n<mtext>)</mtext>\n"
		
		expect(actual).toEqual(expected);
	});
});