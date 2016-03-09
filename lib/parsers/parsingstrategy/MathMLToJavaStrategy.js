var common = require("./common.js");

module.exports = (function () {
    var tags = common.tags;
    var java = common.javaTags;
    
    function theTagType(tType, tagTypes, openSign, openValueToCompare, openValueToReturn, closeSign, closeValueToCompare, closeValueToReturn) {
        if (tType === tagTypes.OPEN && openSign === openValueToCompare && closeSign === closeValueToCompare) {
			return openValueToReturn;
		} else if (tType === tagTypes.CLOSED && openSign === openValueToCompare && closeSign === closeValueToCompare) {
			return closeValueToReturn;
		}
    }
    
    function theOpenClose(tType, tagTypes, openSign, closeSign) {
        if (tType === tagTypes.OPEN) {
			return openSign;
		} else if (tType === tagTypes.CLOSED) {
			return closeSign;
		}
    }
    
    function fenced(attr, tType, tagTypes) {
		if (attr === null) {
			return "";
		}

		var openSign = attr.open.value;
		var closeSign = attr.close.value;
		//var separators = attr[2].value;
        
        var invisibleParenthesis = theTagType(tType, tagTypes, openSign, "", "", closeSign, "", "");
        
        var absValueParenthesis = theTagType(tType, tagTypes, openSign, "|", toMathFunction("abs") + "(", closeSign, "|", ")");
        
        var general = theOpenClose(tType, tagTypes, openSign, closeSign);
        
        //var absValueParenthesis = theTagType(tType, tagTypes, openSign, "&lceil;", toMathFunction("ceil") + "(", closeSign, "&rceil;", ")");
        
        //var absValueParenthesis = theTagType(tType, tagTypes, openSign, "|", closeSign, "|");

		return invisibleParenthesis || absValueParenthesis || general || "";
	}

	function signDisplay(tType, open, close, tagTypes) {
		if (tType === tagTypes.OPEN) {
			return open;
		} else if (tType === tagTypes.CLOSED) {
			return close;
		}
		return "";
	}

	function getTag(name, attr, parent, tType, tagTypes) {
		var value = "";
		// Work on and root.
		console.log("I am here.")
		switch (name) {
			case tags.fenced: value = fenced(attr, tType, tagTypes); break;
			case tags.frac: value = signDisplay(tType, "(", ")", tagTypes); break;
			case tags.identifier: break;
			case tags.math: break;
			case tags.mathText: break;
            case tags.mfunc: break;
			case tags.number: break;
			case tags.operator: break;
			//case tags.root: value = signDisplay(tType,"{", "}", tagTypes); break;
			case tags.row: value = signDisplay(tType, "(", ")", tagTypes); break;
			case tags.squareRoot: value = signDisplay(tType,"Math.sqrt(", ")", tagTypes); break;
			case tags.subscript: value = signDisplay(tType, "", "}", tagTypes); break;
			case tags.superscript: value = signDisplay(tType, "Math.pow(", ")", tagTypes); break;
		}

		return value;
	}
    
    function toMathFunction(value) {
        var funcName = value;
        console.log(value)
        switch (value) {
            case java.sine: funcName = "Math.sin"; break;
            case java.cosine: funcName = "Math.cos"; break;
            case java.tangent: funcName = "Math.tan"; break;
            case java.asine: funcName = "Math.asin"; break;
            case java.acosine: funcName = "Math.acos"; break;
            case java.atangent: funcName = "Math.atan"; break;
            case java.hyperbolicSine: funcName = "Math.sinh"; break;
            case java.hyperbolicCosine: funcName = "Math.cosh"; break;
            case java.hyperbolicTangent: funcName = "Math.tanh"; break;
            case java.floor: funcName = "Math.floor"; break;
            case java.ceil: funcName = "Math.ceil"; break;
            case java.round: funcName = "Math.round"; break;
			case java.pow: funcName = "Math.pow"; break;
            case java.abs: funcName = "Math.abs"; break;
		}
        
        return funcName;
    }
	
	function placeRoot(notation) {
		return null;
	}

	function placeFrac(frac) {
		if (frac.NODE_COUNT === 0) {
			frac.NODE_COUNT++;
		} else {
			return "/";
		}

		return "";
	}

	function placeScript(notation, sign) {
		if (notation.placed) {
			return "";
		}

		if (notation.NODE_COUNT === 0) {
			notation.NODE_COUNT++;
		} else {
			notation.placed = !notation.placed;
			return sign;
		}

		return "";
	}

	function placeOperator(parent) {
		if (parent.otherAttr === null) {
			return "";
		}

		var symbols = "";

		switch (parent.name) {
			case tags.frac: symbols = placeFrac(parent.otherAttr); break;
			case tags.superscript: symbols = placeScript(parent.otherAttr, ","); break;
			//case tags.root: symbols = placeRoot(parent.name); break;
		}

		return symbols;
	}

	return {
		getTag: getTag,
		signDisplay: signDisplay,
		fenced: fenced,
		placeFrac: placeFrac,
		placeOperator: placeOperator,
        getFunction: toMathFunction,
		tags: tags
	}
})();