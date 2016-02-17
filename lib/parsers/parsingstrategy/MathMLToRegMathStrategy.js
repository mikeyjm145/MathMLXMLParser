var common = require("./common.js");

module.exports = (function () {
	var tags = common.tags;

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
        
        return signDisplay(tType, openSign, closeSign, tagTypes);
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
			case tags.root: value = signDisplay(tType,"{", "}", tagTypes); break;
			case tags.row: value = signDisplay(tType, "(", ")", tagTypes); break;
			case tags.squareRoot: value = signDisplay(tType,"#{", "}", tagTypes); break;
			case tags.subscript: value = signDisplay(tType, "", "}", tagTypes); break;
			case tags.superscript: value = signDisplay(tType, "", "}", tagTypes); break;
			case tags.underOverscript: value = tags.underOverscript + ","; break;
			case tags.underscript: value = tags.underscript + ","; break;
		}

		return value;
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
    
    function placeSuperScript(parent, symbol) {
        console.log("I am here" + parent.baseLevel + " " + parent.currLevel + " " + parent.NODE_COUNT);
        if (parent.baseLevel + 1 === parent.currLevel && parent.baseLevel + 1 === parent.NODE_COUNT) {
            return symbol;
        }
        
        parent.NODE_COUNT++;
        
        return "";
    }

	function placeOperator(parent) {
		if (parent.otherAttr === null) {
			return "";
		}

		var symbols = "";

		switch (parent.name) {
			case tags.frac: symbols = placeFrac(parent.otherAttr); break;
			case tags.superscript: symbols = placeSuperScript(parent.otherAttr, "^{"); break;
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
		tags: tags
	}

})();