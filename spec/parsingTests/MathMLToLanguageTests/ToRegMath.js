describe("Core Parsing Functions For MathML to Regular Math",
function() {
	var mathMLToRegMathParser = require('./../../../index.js');
	
	function parse(input) {
		return mathMLToRegMathParser(2, input);
	}
	
	it("should return 5 as output", function() {
		var valueToParse = "<mn>5</mn>";
		var actual = parse(valueToParse);
		var expected = "5"
		
		expect(actual).toEqual(expected);
	});
    
    it("should return (x+5) as output", function() {
		var valueToParse = "<mfenced open='(' close=')'><mi>x</mi><mo>+</mo><mn>5</mn></mfenced>";
		var actual = parse(valueToParse);
		var expected = "(x+5)"
		
		expect(actual).toEqual(expected);
	});
    
    it("should return #{4} as output", function() {
		var valueToParse = "<msqrt><mn>4</mn></msqrt>";
		var actual = parse(valueToParse);
		var expected = "#{4}"
		
		expect(actual).toEqual(expected);
	});
    
    /* it("FAILS but should return #5{4} as output", function() {
		var valueToParse = "<mroot><mrow><mn>4</mn></mrow><mn>5</mn></mroot>";
		var actual = parse(valueToParse);
		var expected = "#5{4}"
		
		expect(actual).toEqual(expected);
	}); */
    
    it("should return 4_{3} as output", function() {
		var valueToParse = "<msub><mn>4</mn><mn><mn>3</mn></mn></msub>";
		var actual = parse(valueToParse);
		var expected = "4_{3}"
		
		expect(actual).toEqual(expected);
	});
});