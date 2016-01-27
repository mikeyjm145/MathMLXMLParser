var MTJS = require("../parsingstrategy/MathMLToJavaStrategy.js");

var mathMLToJavaParser = (function (script) {

	var tags = MTJS.tags;

	var tagType = { OPEN: 0, CLOSED: 1 };
	var heirarchy = { openTags: [], level: 0 };
	var history = { closedTags: [], lastTag: null };
	var test = "";

	function resetCount(node) {
		if (node.name === tags.frac) {
			if (node.otherAttr === null) {
				return;
			}

			node.otherAttr.NODE_COUNT = 0;
		} else if (node.name === tags.superscript) {
			if (node.otherAttr === null) {
				return;
			}

			node.otherAttr.NODE_COUNT = 0;
		}
	}

	function getOtherAttributes(name) {
		if (name === tags.frac) {
			return { NODE_COUNT: 0 };
		} else if (name === tags.superscript || name === tags.subscript) {
			return { NODE_COUNT: 0, placed: false };
		}

		return null;
	}


	function addNode(name, attr, parent, currLevel, otherAttr) {
		heirarchy.openTags.push({ name: name, attr: attr, parent: parent, level: currLevel, otherAttr: otherAttr });
		heirarchy.level++;
	}

	function peek() {
		if (heirarchy.openTags.length > 0) {
			return heirarchy.openTags[heirarchy.openTags.length - 1];
		}

		return null;
	}

	function removeNode() {
		var currOpenNode = peek();
		if (currOpenNode === null) {
			return null;
		}

		var removedNode = null;

		if (currOpenNode.level === heirarchy.level - 1) {
			removedNode = heirarchy.openTags.pop();
			heirarchy.level--;
			history.closedTags.push(removedNode);
			history.lastTag = removedNode.name;
		}

		return removedNode;
	}

	function parseOpenTag(node) {
		if (heirarchy.openTags.length === 0) {
			addNode(node.name, node.attributes, null, heirarchy.level, getOtherAttributes(node.name));

			test += MTJS.getTag(node.name, node.attributes, null, tagType.OPEN, tagType);
			console.log(test);
		} else {
			var parent = heirarchy.openTags[heirarchy.openTags.length - 1];
			addNode(node.name, node.attributes, parent.name, heirarchy.level, getOtherAttributes(node.name));
			test += MTJS.placeOperator(parent);

			test += MTJS.getTag(node.name, node.attributes, parent, tagType.OPEN, tagType);
			console.log(test);
		}
	}

	function parseCloseTag(tagName) {
		var currOpenNode = peek();
		if (currOpenNode === null) {
			return;
		}

		console.log("curr level: " + currOpenNode.level + " heir level: " + (heirarchy.level - 1));

		if (currOpenNode.level === heirarchy.level - 1) {
			var node = removeNode();
			test += MTJS.getTag(node.name, node.attr, node.parent, tagType.CLOSED, tagType);
			resetCount(node);
			console.log(test);
		}
	}

	function parseText(t) {
		if (t !== "" && t != "\n" && t != "\r\n" && t !== "\t") {
			test += t;
		}
	}

	var parserForMMLToJ = function (saxParser, script) {
		if (script === null) {
			return "null script";
		}

		test = "";

		var sax = saxParser.sax;
		var parser = sax.parser(true, {
			trim: true,
			nomalize: true,
			lowercase: false,
			xmlns: true,
			position: true,
			strictEntities: true
		});
        
		parser.onopentag = function (node) {
            parseOpenTag(node);
		};

		parser.onclosetag = function (tagName) {
			parseCloseTag(tagName);
		};

		parser.ontext = function (t) {
            var index = heirarchy.openTags.length - 1;
            var parent = heirarchy.openTags[index];
            
            if (parent.name === "mfunc") {
                console.log(t);
                test += MTJS.getFunction(t);
            } else {
                test += t;
            }
            
            console.log(test);
		};

		try {
			parser.write(script).close();
			if (parser.error !== null) {
				return parser.error[0].toString();
			}
		} catch (error) {
            var paticularError = "Error: Text data outside of root node.";
            if (error.toString().indexOf(paticularError) == -1) {
               console.log(error);
               return error.toString();
            }
		}

		return test;
	}

	return {
		parse: parserForMMLToJ
	};
})();

module.exports = mathMLToJavaParser;