var common = require("./common.js");

module.exports = (function () {
    var tags = common.tags;
    var java = common.javaTags;
    
    function fenced(attr, tType, tagTypes) {
		if (attr === null) {
			return "";
		}

		var openSign = attr.open.value;
		var closeSign = attr.close.value;
		//var separators = attr[2].value;
		
		if (tType === tagTypes.OPEN && openSign === "" && closeSign === "") {
			return "{";
		} else if (tType === tagTypes.CLOSED && openSign === "" && closeSign === "") {
			return "}";
		}

		if (tType === tagTypes.OPEN) {
			return openSign;
		} else if (tType === tagTypes.CLOSED) {
			return closeSign;
		}

		return "";
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
		switch (name) {
			case tags.fenced: value = fenced(attr, tType, tagTypes); break;
			case tags.frac: value = signDisplay(tType, "(", ")", tagTypes); break;
			case tags.identifier: break;
			case tags.math: break;
			case tags.mathText: break;
			case tags.multiscripts: value = tags.multiscripts + ","; break;
			case tags.number: break;
			case tags.operator: break;
			case tags.overscript: value = tags.overscript + ","; break;
			//case tags.root: value = signDisplay(tType,"{", "}", tagTypes); break;
			case tags.row: value = signDisplay(tType, "(", ")", tagTypes); break;
			case tags.squareRoot: value = signDisplay(tType,"#{", "}", tagTypes); break;
			case tags.subscript: value = signDisplay(tType, "", "}", tagTypes); break;
			case tags.superscript: value = signDisplay(tType, "", "}", tagTypes); break;
			case tags.underOverscript: value = tags.underOverscript + ","; break;
			case tags.underscript: value = tags.underscript + ","; break;
            //case java.functions: value = toMathFunction(aValue); break;
		}

		return value;
	}
    
    function tagMatch(counter, value) {
        
    }
    
    function toMathFunction(value) {
        var funcName = "";
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
            case java.ceil: funcName = "Math.ciel"; break;
            case java.round: funcName = "Math.round"; break;
            case java.sine: funcName = "Math.sin"; break;
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
			case tags.superscript: symbols = placeScript(parent.otherAttr, "^{"); break;
			case tags.subscript: symbols = placeScript(parent.otherAttr, "_{"); break;
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