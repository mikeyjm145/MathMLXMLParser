describe("Core Parsing Functions For MathML to Java",
function() {
	var mathMLToRegMathParser = require('./../../../index.js');
	
	function parse(input) {
		return mathMLToRegMathParser(5, input).replace("[,]", "");
	}
	
	it("should return 5 as output", function() {
		var valueToParse = "<mn>5</mn>";
		var actual = parse(valueToParse);
		var expected = "5"
		
		expect(actual).toEqual(expected);
	});
    
    it("should return (x+5 as output", function() {
		var valueToParse = "<mfenced open='(' close=')'><mi>x</mi><mo>+</mo><mn>5</mn></mfenced>";
		var actual = parse(valueToParse);
		var expected = "(x+5)"
		
		expect(actual).toEqual(expected);
	});
    
    it("should return (x+x as output", function() {
		var valueToParse = "<mfenced open='(' close=')'><mi>x</mi><mo>+</mo><mn>x</mn></mfenced>";
		var actual = parse(valueToParse);
		var expected = "(x+x)"
		
		expect(actual).toEqual(expected);
	});
});

describe("Core Parsing Functions For MathML to Java Functions",
function() {
	var mathMLToRegMathParser = require('./../../../index.js');
	
	function parse(input) {
		return mathMLToRegMathParser(5, input);
	}
	
	it("should return Math.sin(1) as output", function() {
		var valueToParse =
            "<mfunc>sin</mfunc><mfenced open='(' close=')' separators=''><mn>1</mn></mfenced>";
		var actual = parse(valueToParse);
		var expected = "Math.sin(1)";
        console.log("Actual: " + actual);
		
		expect(actual).toEqual(expected);
	});
    
    it("should return Math.tan(2) as output", function() {
		var valueToParse =
            "<mfunc>tan</mfunc><mfenced open='(' close=')' separators=''><mn>2</mn></mfenced>";
		var actual = parse(valueToParse);
		var expected = "Math.tan(2)";
		
		expect(actual).toEqual(expected);
	});
    
    it("should return Math.cos(3) as output", function() {
		var valueToParse =
            "<mfunc>cos</mfunc><mfenced open='(' close=')' separators=''><mn>3</mn></mfenced>";
		var actual = parse(valueToParse);
		var expected = "Math.cos(3)";
		
		expect(actual).toEqual(expected);
	});
    
    it("should return Math.asin(1) as output", function() {
		var valueToParse =
            "<mfunc>asin</mfunc><mfenced open='(' close=')' separators=''><mn>1</mn></mfenced>";
		var actual = parse(valueToParse);
		var expected = "Math.asin(1)";
        console.log("Actual: " + actual);
		
		expect(actual).toEqual(expected);
	});
    
    it("should return Math.atan(2) as output", function() {
		var valueToParse =
            "<mfunc>atan</mfunc><mfenced open='(' close=')' separators=''><mn>2</mn></mfenced>";
		var actual = parse(valueToParse);
		var expected = "Math.atan(2)";
		
		expect(actual).toEqual(expected);
	});
    
    it("should return Math.acos(3) as output", function() {
		var valueToParse =
            "<mfunc>acos</mfunc><mfenced open='(' close=')' separators=''><mn>3</mn></mfenced>";
		var actual = parse(valueToParse);
		var expected = "Math.acos(3)";
		
		expect(actual).toEqual(expected);
	});
    
    it("should return Math.sinh(1) as output", function() {
		var valueToParse =
            "<mfunc>sinh</mfunc><mfenced open='(' close=')' separators=''><mn>1</mn></mfenced>";
		var actual = parse(valueToParse);
		var expected = "Math.sinh(1)";
        console.log("Actual: " + actual);
		
		expect(actual).toEqual(expected);
	});
    
    it("should return Math.tanh(2) as output", function() {
		var valueToParse =
            "<mfunc>tanh</mfunc><mfenced open='(' close=')' separators=''><mn>2</mn></mfenced>";
		var actual = parse(valueToParse);
		var expected = "Math.tanh(2)";
		
		expect(actual).toEqual(expected);
	});
    
    it("should return Math.cosh(3) as output", function() {
		var valueToParse =
            "<mfunc>cosh</mfunc><mfenced open='(' close=')' separators=''><mn>3</mn></mfenced>";
		var actual = parse(valueToParse);
		var expected = "Math.cosh(3)";
		
		expect(actual).toEqual(expected);
	});
    
    it("should return Math.floor(4) as output", function() {
		var valueToParse =
            "<mfunc>floor</mfunc><mfenced open='(' close=')' separators=''><mn>1</mn></mfenced>";
		var actual = parse(valueToParse);
		var expected = "Math.floor(4)";
		
		expect(actual).toEqual(expected);
	});
});