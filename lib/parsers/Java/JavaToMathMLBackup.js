module.exports = (function() {
  "use strict";

  /*
   * Generated by PEG.js 0.9.0.
   *
   * http://pegjs.org/
   */

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function peg$SyntaxError(message, expected, found, location) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.location = location;
    this.name     = "SyntaxError";

    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, peg$SyntaxError);
    }
  }

  peg$subclass(peg$SyntaxError, Error);

  function peg$parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},
        parser  = this,

        peg$FAILED = {},

        peg$startRuleIndices = { Expression: 0 },
        peg$startRuleIndex   = 0,

        peg$consts = [
          "=",
          { type: "literal", value: "=", description: "\"=\"" },
          function(first, rest) {
                return combine(first, rest, {
                  "=": function(left, right) { return (left + toMathMLOperator("=") + right).replace(/,/g,""); }
                });
              },
          "+",
          { type: "literal", value: "+", description: "\"+\"" },
          "-",
          { type: "literal", value: "-", description: "\"-\"" },
          function(first, rest) {
                return combine(first, rest, {
                  "+": function(left, right) { return left + toMathMLOperator("+") + right; },
                  "-": function(left, right) { return left + toMathMLOperator("-") + right; }
                });
              },
          "*",
          { type: "literal", value: "*", description: "\"*\"" },
          "/",
          { type: "literal", value: "/", description: "\"/\"" },
          function(first, rest) {
                return combine(first, rest, {
                  "*": function(left, right) { return left + toMathMLOperator("*") + right; },
                  "/": function(left, right) { return toMathMLFraction(toMathMLRow(left) + toMathMLRow(right)); }
                });
              },
          "^",
          { type: "literal", value: "^", description: "\"^\"" },
          function(first, rest) {
                return combine(first, rest, {
                  "^": function(left, right) { return toMathMLPostscript(left, right); }
                });
              },
          "(",
          { type: "literal", value: "(", description: "\"(\"" },
          ")",
          { type: "literal", value: ")", description: "\")\"" },
          function(expr) { return toMathMLParenthesis("(", expr, ")", ""); },
          "{",
          { type: "literal", value: "{", description: "\"{\"" },
          "}",
          { type: "literal", value: "}", description: "\"}\"" },
          function(expr) { return toMathMLParenthesis("", expr, "", ""); },
          "[",
          { type: "literal", value: "[", description: "\"[\"" },
          "]",
          { type: "literal", value: "]", description: "\"]\"" },
          function(expr) { return toMathMLParenthesis("[", expr, "]", ""); },
          "Math",
          { type: "literal", value: "Math", description: "\"Math\"" },
          ".",
          { type: "literal", value: ".", description: "\".\"" },
          "sin(",
          { type: "literal", value: "sin(", description: "\"sin(\"" },
          function(expr) { return "Math.sin(" + expr + ")"; },
          "cos(",
          { type: "literal", value: "cos(", description: "\"cos(\"" },
          function(expr) { return "Math.cos(" + expr + ")"; },
          "tan(",
          { type: "literal", value: "tan(", description: "\"tan(\"" },
          function(expr) { return "Math.tan(" + expr + ")"; },
          "asin(",
          { type: "literal", value: "asin(", description: "\"asin(\"" },
          function(expr) { return "Math.asin(" + expr + ")"; },
          "acos(",
          { type: "literal", value: "acos(", description: "\"acos(\"" },
          function(expr) { return "Math.acos(" + expr + ")"; },
          "atan(",
          { type: "literal", value: "atan(", description: "\"atan(\"" },
          function(expr) { return "Math.atan(" + expr + ")"; },
          "sinh(",
          { type: "literal", value: "sinh(", description: "\"sinh(\"" },
          function(expr) { return "Math.sinh(" + expr + ")"; },
          "cosh(",
          { type: "literal", value: "cosh(", description: "\"cosh(\"" },
          function(expr) { return "Math.cosh(" + expr + ")"; },
          "tanh(",
          { type: "literal", value: "tanh(", description: "\"tanh(\"" },
          function(expr) { return "Math.tanh(" + expr + ")"; },
          "abs(",
          { type: "literal", value: "abs(", description: "\"abs(\"" },
          function(expr) { return toMathMLParenthesis("|", expr,"|", ""); },
          "floor(",
          { type: "literal", value: "floor(", description: "\"floor(\"" },
          function(expr) { return "Math.floor(" + expr + ")"; },
          "ceil(",
          { type: "literal", value: "ceil(", description: "\"ceil(\"" },
          function(expr) { return "Math.ceil(" + expr + ")"; },
          "round(",
          { type: "literal", value: "round(", description: "\"round(\"" },
          function(expr) { return "Math.round(" + expr + ")"; },
          "sqrt(",
          { type: "literal", value: "sqrt(", description: "\"sqrt(\"" },
          function(expr) { return toMathMLSquareRoot(expr); },
          "pow(",
          { type: "literal", value: "pow(", description: "\"pow(\"" },
          ",",
          { type: "literal", value: ",", description: "\",\"" },
          function(expr, expr2) { return toMathMLPostscript(expr, expr2); },
          "cbrt(",
          { type: "literal", value: "cbrt(", description: "\"cbrt(\"" },
          function(expr) { return toMathMLNthRoot(expr, 3) },
          "log10(",
          { type: "literal", value: "log10(", description: "\"log10(\"" },
          function(expr) { return toMathMLFraction(toMathMLRow("Math.log(" + expr + ")") + toMathMLRow("Math.log(" + toMathMLNumber(10) + ")")); },
          "log(",
          { type: "literal", value: "log(", description: "\"log(\"" },
          function(expr) { return toMathMLFraction(toMathMLRow("Math.log(" + expr + ")") + toMathMLRow("Math.log(" + toMathMLIdentifier("e") + ")")); },
          "hypt(",
          { type: "literal", value: "hypt(", description: "\"hypt(\"" },
          function(expr, expr2) { return toMathMLSquareRoot(toMathMLPostscript(expr, toMathMLNumber(2)) + toMathMLPostscript(expr2, toMathMLNumber(2))); },
          "expm1(",
          { type: "literal", value: "expm1(", description: "\"expm1(\"" },
          function(expr) { return toMathMLOperator(first) + toMathMLPostscript(toMathMLIdentifier("e"), expr) + toMathMLOperator("-") + toMathMLNumber("1") },
          /^[0-9]/,
          { type: "class", value: "[0-9]", description: "[0-9]" },
          /^[.]/,
          { type: "class", value: "[.]", description: "[.]" },
          function() { return toMathMLNumber(text()); },
          /^[+\-]/,
          { type: "class", value: "[+-]", description: "[+-]" },
          "++",
          { type: "literal", value: "++", description: "\"++\"" },
          /^[\-\-]/,
          { type: "class", value: "[--]", description: "[--]" },
          /^[a-zA-Z]/,
          { type: "class", value: "[a-zA-Z]", description: "[a-zA-Z]" },
          /^[a-zA-Z0-9$_]/,
          { type: "class", value: "[a-zA-Z0-9$_]", description: "[a-zA-Z0-9$_]" },
          function() { return toMathMLIdentifier(text()); },
          { type: "other", description: "Prescript" },
          /^[_]/,
          { type: "class", value: "[_]", description: "[_]" },
          function() { return text(); },
          { type: "other", description: "whitespace" },
          /^[ \t\n\rz]/,
          { type: "class", value: "[ \\t\\n\\r\\z]", description: "[ \\t\\n\\r\\z]" }
        ],

        peg$bytecode = [
          peg$decode(";!"),
          peg$decode("%%;\".\" &\"/1#;F.\" &\"/#$+\")(\"'#&'#/\x8F#$%;H/D#2 \"\"6 7!/5$;H/,$;!/#$+$)($'#(#'#(\"'#&'#0N*%;H/D#2 \"\"6 7!/5$;H/,$;!/#$+$)($'#(#'#(\"'#&'#&/)$8\":\"\"\"! )(\"'#&'#"),
          peg$decode("%;#/\xA7#$%;H/P#2#\"\"6#7$.) &2%\"\"6%7&/5$;H/,$;\"/#$+$)($'#(#'#(\"'#&'#0Z*%;H/P#2#\"\"6#7$.) &2%\"\"6%7&/5$;H/,$;\"/#$+$)($'#(#'#(\"'#&'#&/)$8\":'\"\"! )(\"'#&'#"),
          peg$decode("%;$/\xA7#$%;H/P#2(\"\"6(7).) &2*\"\"6*7+/5$;H/,$;#/#$+$)($'#(#'#(\"'#&'#0Z*%;H/P#2(\"\"6(7).) &2*\"\"6*7+/5$;H/,$;#/#$+$)($'#(#'#(\"'#&'#&/)$8\":,\"\"! )(\"'#&'#"),
          peg$decode("%;%/\x8F#$%;H/D#2-\"\"6-7./5$;H/,$;$/#$+$)($'#(#'#(\"'#&'#0N*%;H/D#2-\"\"6-7./5$;H/,$;$/#$+$)($'#(#'#(\"'#&'#&/)$8\":/\"\"! )(\"'#&'#"),
          peg$decode(";,.S &;..M &;8.G &;-.A &;+.; &;).5 &;'./ &;(.) &;&.# &;*"),
          peg$decode(";A.# &;B"),
          peg$decode(";/.M &;0.G &;1.A &;2.; &;3.5 &;4./ &;5.) &;6.# &;7"),
          peg$decode(";?.# &;@"),
          peg$decode(";8./ &;;.) &;9.# &;:"),
          peg$decode(";C./ &;F.) &;D.# &;E"),
          peg$decode(";<.) &;=.# &;>"),
          peg$decode("%20\"\"6071/@#; /7$22\"\"6273/($8#:4#!!)(#'#(\"'#&'#"),
          peg$decode("%25\"\"6576/@#; /7$27\"\"6778/($8#:9#!!)(#'#(\"'#&'#"),
          peg$decode("%2:\"\"6:7;/@#; /7$2<\"\"6<7=/($8#:>#!!)(#'#(\"'#&'#"),
          peg$decode("%2?\"\"6?7@/\x82#;H/y$2A\"\"6A7B/j$;H/a$2C\"\"6C7D/R$;H/I$; /@$;H/7$22\"\"6273/($8):E)!\")()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#"),
          peg$decode("%2?\"\"6?7@/\x82#;H/y$2A\"\"6A7B/j$;H/a$2F\"\"6F7G/R$;H/I$; /@$;H/7$22\"\"6273/($8):H)!\")()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#"),
          peg$decode("%2?\"\"6?7@/p#;H/g$2A\"\"6A7B/X$;H/O$2I\"\"6I7J/@$; /7$22\"\"6273/($8':K'!!)(''#(&'#(%'#($'#(#'#(\"'#&'#"),
          peg$decode("%2?\"\"6?7@/\x82#;H/y$2A\"\"6A7B/j$;H/a$2L\"\"6L7M/R$;H/I$; /@$;H/7$22\"\"6273/($8):N)!\")()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#"),
          peg$decode("%2?\"\"6?7@/\x82#;H/y$2A\"\"6A7B/j$;H/a$2O\"\"6O7P/R$;H/I$; /@$;H/7$22\"\"6273/($8):Q)!\")()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#"),
          peg$decode("%2?\"\"6?7@/\x82#;H/y$2A\"\"6A7B/j$;H/a$2R\"\"6R7S/R$;H/I$; /@$;H/7$22\"\"6273/($8):T)!\")()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#"),
          peg$decode("%2?\"\"6?7@/\x82#;H/y$2A\"\"6A7B/j$;H/a$2U\"\"6U7V/R$;H/I$; /@$;H/7$22\"\"6273/($8):W)!\")()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#"),
          peg$decode("%2?\"\"6?7@/\x82#;H/y$2A\"\"6A7B/j$;H/a$2X\"\"6X7Y/R$;H/I$; /@$;H/7$22\"\"6273/($8):Z)!\")()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#"),
          peg$decode("%2?\"\"6?7@/\x82#;H/y$2A\"\"6A7B/j$;H/a$2[\"\"6[7\\/R$;H/I$; /@$;H/7$22\"\"6273/($8):])!\")()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#"),
          peg$decode("%2?\"\"6?7@/\x82#;H/y$2A\"\"6A7B/j$;H/a$2^\"\"6^7_/R$;H/I$; /@$;H/7$22\"\"6273/($8):`)!\")()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#"),
          peg$decode("%2?\"\"6?7@/\x82#;H/y$2A\"\"6A7B/j$;H/a$2a\"\"6a7b/R$;H/I$; /@$;H/7$22\"\"6273/($8):c)!\")()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#"),
          peg$decode("%2?\"\"6?7@/\x82#;H/y$2A\"\"6A7B/j$;H/a$2d\"\"6d7e/R$;H/I$; /@$;H/7$22\"\"6273/($8):f)!\")()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#"),
          peg$decode("%2?\"\"6?7@/\x82#;H/y$2A\"\"6A7B/j$;H/a$2g\"\"6g7h/R$;H/I$; /@$;H/7$22\"\"6273/($8):i)!\")()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#"),
          peg$decode("%2?\"\"6?7@/\x82#;H/y$2A\"\"6A7B/j$;H/a$2j\"\"6j7k/R$;H/I$; /@$;H/7$22\"\"6273/($8):l)!\")()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#"),
          peg$decode("%2?\"\"6?7@/\xAD#;H/\xA4$2A\"\"6A7B/\x95$;H/\x8C$2m\"\"6m7n/}$;H/t$; /k$;H/b$2o\"\"6o7p/S$;H/J$; /A$;H/8$22\"\"6273/)$8-:q-\"&\")(-'#(,'#(+'#(*'#()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#"),
          peg$decode("%2?\"\"6?7@/\x82#;H/y$2A\"\"6A7B/j$;H/a$2r\"\"6r7s/R$;H/I$; /@$;H/7$22\"\"6273/($8):t)!\")()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#"),
          peg$decode("%2?\"\"6?7@/\x82#;H/y$2A\"\"6A7B/j$;H/a$2u\"\"6u7v/R$;H/I$; /@$;H/7$22\"\"6273/($8):w)!\")()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#"),
          peg$decode("%2?\"\"6?7@/\x82#;H/y$2A\"\"6A7B/j$;H/a$2x\"\"6x7y/R$;H/I$; /@$;H/7$22\"\"6273/($8):z)!\")()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#"),
          peg$decode("%2?\"\"6?7@/\xAD#;H/\xA4$2A\"\"6A7B/\x95$;H/\x8C$2{\"\"6{7|/}$;H/t$; /k$;H/b$2o\"\"6o7p/S$;H/J$; /A$;H/8$22\"\"6273/)$8-:}-\"&\")(-'#(,'#(+'#(*'#()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#"),
          peg$decode("%2?\"\"6?7@/\x82#;H/y$2A\"\"6A7B/j$;H/a$2~\"\"6~7/R$;H/I$; /@$;H/7$22\"\"6273/($8):\x80)!\")()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#"),
          peg$decode("%%;D/E#$4\x81\"\"5!7\x82/,#0)*4\x81\"\"5!7\x82&&&#/#$+\")(\"'#&'#.\" &\"/l#%4\x83\"\"5!7\x84/J#$4\x81\"\"5!7\x82/,#0)*4\x81\"\"5!7\x82&&&#.\" &\"/#$+\")(\"'#&'#.\" &\"/'$8\":\x85\" )(\"'#&'#"),
          peg$decode("%4\x86\"\"5!7\x87.\" &\"/& 8!:\x85! )"),
          peg$decode("%$2\x88\"\"6\x887\x890)*2\x88\"\"6\x887\x89&/C#$4\x8A\"\"5!7\x8B0)*4\x8A\"\"5!7\x8B&/'$8\":\x85\" )(\"'#&'#"),
          peg$decode("%;D/e#$4\x8C\"\"5!7\x8D/,#0)*4\x8C\"\"5!7\x8D&&&#/C$$4\x8E\"\"5!7\x8F0)*4\x8E\"\"5!7\x8F&/'$8#:\x90# )(#'#(\"'#&'#"),
          peg$decode("<%4\x92\"\"5!7\x93.\" &\"/& 8!:\x94! )=.\" 7\x91"),
          peg$decode("<%$4\x96\"\"5!7\x970)*4\x96\"\"5!7\x97&/& 8!:\x94! )=.\" 7\x95")
        ],

        peg$currPos          = 0,
        peg$savedPos         = 0,
        peg$posDetailsCache  = [{ line: 1, column: 1, seenCR: false }],
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$resultsCache = {},

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleIndices)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleIndex = peg$startRuleIndices[options.startRule];
    }

    function text() {
      return input.substring(peg$savedPos, peg$currPos);
    }

    function location() {
      return peg$computeLocation(peg$savedPos, peg$currPos);
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        input.substring(peg$savedPos, peg$currPos),
        peg$computeLocation(peg$savedPos, peg$currPos)
      );
    }

    function error(message) {
      throw peg$buildException(
        message,
        null,
        input.substring(peg$savedPos, peg$currPos),
        peg$computeLocation(peg$savedPos, peg$currPos)
      );
    }

    function peg$computePosDetails(pos) {
      var details = peg$posDetailsCache[pos],
          p, ch;

      if (details) {
        return details;
      } else {
        p = pos - 1;
        while (!peg$posDetailsCache[p]) {
          p--;
        }

        details = peg$posDetailsCache[p];
        details = {
          line:   details.line,
          column: details.column,
          seenCR: details.seenCR
        };

        while (p < pos) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }

          p++;
        }

        peg$posDetailsCache[pos] = details;
        return details;
      }
    }

    function peg$computeLocation(startPos, endPos) {
      var startPosDetails = peg$computePosDetails(startPos),
          endPosDetails   = peg$computePosDetails(endPos);

      return {
        start: {
          offset: startPos,
          line:   startPosDetails.line,
          column: startPosDetails.column
        },
        end: {
          offset: endPos,
          line:   endPosDetails.line,
          column: endPosDetails.column
        }
      };
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, found, location) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/"/g,    '\\"')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0100-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1000-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(", ")
              + " or "
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new peg$SyntaxError(
        message !== null ? message : buildMessage(expected, found),
        expected,
        found,
        location
      );
    }

    function peg$decode(s) {
      var bc = new Array(s.length), i;

      for (i = 0; i < s.length; i++) {
        bc[i] = s.charCodeAt(i) - 32;
      }

      return bc;
    }

    function peg$parseRule(index) {
      var bc    = peg$bytecode[index],
          ip    = 0,
          ips   = [],
          end   = bc.length,
          ends  = [],
          stack = [],
          params, i;

      var key    = peg$currPos * 41 + index,
          cached = peg$resultsCache[key];

      if (cached) {
        peg$currPos = cached.nextPos;

        return cached.result;
      }

      while (true) {
        while (ip < end) {
          switch (bc[ip]) {
            case 0:
              stack.push(peg$consts[bc[ip + 1]]);
              ip += 2;
              break;

            case 1:
              stack.push(void 0);
              ip++;
              break;

            case 2:
              stack.push(null);
              ip++;
              break;

            case 3:
              stack.push(peg$FAILED);
              ip++;
              break;

            case 4:
              stack.push([]);
              ip++;
              break;

            case 5:
              stack.push(peg$currPos);
              ip++;
              break;

            case 6:
              stack.pop();
              ip++;
              break;

            case 7:
              peg$currPos = stack.pop();
              ip++;
              break;

            case 8:
              stack.length -= bc[ip + 1];
              ip += 2;
              break;

            case 9:
              stack.splice(-2, 1);
              ip++;
              break;

            case 10:
              stack[stack.length - 2].push(stack.pop());
              ip++;
              break;

            case 11:
              stack.push(stack.splice(stack.length - bc[ip + 1], bc[ip + 1]));
              ip += 2;
              break;

            case 12:
              stack.push(input.substring(stack.pop(), peg$currPos));
              ip++;
              break;

            case 13:
              ends.push(end);
              ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

              if (stack[stack.length - 1]) {
                end = ip + 3 + bc[ip + 1];
                ip += 3;
              } else {
                end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                ip += 3 + bc[ip + 1];
              }

              break;

            case 14:
              ends.push(end);
              ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

              if (stack[stack.length - 1] === peg$FAILED) {
                end = ip + 3 + bc[ip + 1];
                ip += 3;
              } else {
                end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                ip += 3 + bc[ip + 1];
              }

              break;

            case 15:
              ends.push(end);
              ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

              if (stack[stack.length - 1] !== peg$FAILED) {
                end = ip + 3 + bc[ip + 1];
                ip += 3;
              } else {
                end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                ip += 3 + bc[ip + 1];
              }

              break;

            case 16:
              if (stack[stack.length - 1] !== peg$FAILED) {
                ends.push(end);
                ips.push(ip);

                end = ip + 2 + bc[ip + 1];
                ip += 2;
              } else {
                ip += 2 + bc[ip + 1];
              }

              break;

            case 17:
              ends.push(end);
              ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

              if (input.length > peg$currPos) {
                end = ip + 3 + bc[ip + 1];
                ip += 3;
              } else {
                end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                ip += 3 + bc[ip + 1];
              }

              break;

            case 18:
              ends.push(end);
              ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3]);

              if (input.substr(peg$currPos, peg$consts[bc[ip + 1]].length) === peg$consts[bc[ip + 1]]) {
                end = ip + 4 + bc[ip + 2];
                ip += 4;
              } else {
                end = ip + 4 + bc[ip + 2] + bc[ip + 3];
                ip += 4 + bc[ip + 2];
              }

              break;

            case 19:
              ends.push(end);
              ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3]);

              if (input.substr(peg$currPos, peg$consts[bc[ip + 1]].length).toLowerCase() === peg$consts[bc[ip + 1]]) {
                end = ip + 4 + bc[ip + 2];
                ip += 4;
              } else {
                end = ip + 4 + bc[ip + 2] + bc[ip + 3];
                ip += 4 + bc[ip + 2];
              }

              break;

            case 20:
              ends.push(end);
              ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3]);

              if (peg$consts[bc[ip + 1]].test(input.charAt(peg$currPos))) {
                end = ip + 4 + bc[ip + 2];
                ip += 4;
              } else {
                end = ip + 4 + bc[ip + 2] + bc[ip + 3];
                ip += 4 + bc[ip + 2];
              }

              break;

            case 21:
              stack.push(input.substr(peg$currPos, bc[ip + 1]));
              peg$currPos += bc[ip + 1];
              ip += 2;
              break;

            case 22:
              stack.push(peg$consts[bc[ip + 1]]);
              peg$currPos += peg$consts[bc[ip + 1]].length;
              ip += 2;
              break;

            case 23:
              stack.push(peg$FAILED);
              if (peg$silentFails === 0) {
                peg$fail(peg$consts[bc[ip + 1]]);
              }
              ip += 2;
              break;

            case 24:
              peg$savedPos = stack[stack.length - 1 - bc[ip + 1]];
              ip += 2;
              break;

            case 25:
              peg$savedPos = peg$currPos;
              ip++;
              break;

            case 26:
              params = bc.slice(ip + 4, ip + 4 + bc[ip + 3]);
              for (i = 0; i < bc[ip + 3]; i++) {
                params[i] = stack[stack.length - 1 - params[i]];
              }

              stack.splice(
                stack.length - bc[ip + 2],
                bc[ip + 2],
                peg$consts[bc[ip + 1]].apply(null, params)
              );

              ip += 4 + bc[ip + 3];
              break;

            case 27:
              stack.push(peg$parseRule(bc[ip + 1]));
              ip += 2;
              break;

            case 28:
              peg$silentFails++;
              ip++;
              break;

            case 29:
              peg$silentFails--;
              ip++;
              break;

            default:
              throw new Error("Invalid opcode: " + bc[ip] + ".");
          }
        }

        if (ends.length > 0) {
          end = ends.pop();
          ip = ips.pop();
        } else {
          break;
        }
      }

      peg$resultsCache[key] = { nextPos: peg$currPos, result: stack[0] };

      return stack[0];
    }


      function combine(first, rest, combiners) {
        var result = first;
        var i = 0;
        for (i = 0; i < rest.length; i++) {
          result = combiners[rest[i][1]](result, rest[i][3]);
        }

        return result;
      }

      function toMathML(value) {
        var startOfResult = result = "<math mode='display' xmlns='http://www.w3.org/1998/Math/MathML'>\n<mrow>";

        var endOfResult = "</mrow>\n</math>";

        return startOfResult + value + endOfResult;
      }

      function toMathMLOperator(operator) {
        switch(operator){
          case '*': return "<mo>x</mo>\n";break;
          case '+': return "<mo>+</mo>\n";break;
          case '-': return "<mo>-</mo>\n";break;
          case '=': return "<mo>=</mo>\n";break;
          default: return "";
        }
      }

      function toMathMLNumber(number) {
        return "<mn>" + number + "</mn>\n";
      }

      function toMathMLIdentifier(identifier) {
        return "<mi>" + identifier + "</mi>\n";
      }

      function toMathMLRow(values) {
        return "<mrow>\n" + values + "</mrow>\n";
      }

      function toMathMLFraction(value) {
        return "<mfrac>\n" + value + "</mfrac>\n";
      }

      function toMathMLSquareRoot(value) {
        return "<msqrt>\n" + value + "</msqrt>\n";
      }

      function toMathMLNthRoot(value, rootValue) {
        return "<mroot>\n" + toMathMLRow(value) + rootValue + "</mroot>\n";
      }

      function toMathMLPostscript(postbase, postsuper) {
        return "<msup>\n" + postbase + postsuper + "</msup>\n";
      }

      function toMathMLPrescript(presub, presuper) {
        return "<msub>\n" + presub + presuper + "</msub>\n";
      }

      function toMathMLMultiScript(base, postsub, postsuper, presub, presuper) {
        return 
          "<mmultiscripts>\n" + base + "\n" + toMathMLPostscript(postsub, postsuper) + toMathMLPrescript(presub, presuper) + "</mmultiscripts>\n";
      }

      function toMathMLIntegral(start, end) {
        /*
            Come up with math operator for integral sign
        */
        return "<msubsup>" + "<mo>&#x222B;</mo>\n" + start + "\n" + end + "\n" + "</msubsup>\n";
      }

      function toMathMLMover(value) {
        return "<mover accentover='true'>" + toMathMLRow(value) + "<mo>&#x23DE;</mo>\n" + "</mover>\n";
      }

      function toMathMLMunder(value) {
        return "<munder accentunder='true'>" + toMathMLRow(value) + "<mo>&#x23DE;</mo>\n" + "\n" + "</munder>\n";
      }

      function toMathMLParenthesis(symbolBegin, value, symbolEnd, separators) {
        return "<mtext>"+ symbolBegin +"</mtext>\n" + value + "<mtext>"+ symbolEnd +"</mtext>\n";
      }


    peg$result = peg$parseRule(peg$startRuleIndex);

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(
        null,
        peg$maxFailExpected,
        peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
        peg$maxFailPos < input.length
          ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
          : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
      );
    }
  }

  return {
    SyntaxError: peg$SyntaxError,
    parse:       peg$parse
  };
})();