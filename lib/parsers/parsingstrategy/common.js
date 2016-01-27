module.exports = (function () {
    var tags = {
        math: "math",
        fenced: "mfenced",
        frac: "mfrac",
        identifier: "mi",
        mathText: "mtext",
        multiscripts: "mmultiscripts",
        number: "mn",
        operator: "mo",
        overscript: "mover",
        root: "mroot",
        row: "mrow",
        squareRoot: "msqrt",
        subscript: "msub",
        superscript: "msup",
        underscript: "munder",
        underOverscript: "munderover"
    }
    
    var JavaTags = {
        functions: "mfunc",
        sine: "sin",
        cosine: "cos",
        tangent: "tan",
        asine: "asin",
        acosine: "acos",
        atangent: "atan",
        hyperbolicSine: "sinh",
        hyperbolicCosine: "cosh",
        hyperbolicTangent: "tanh",
        floor: "floor",
        ceil: "ceil",
        round: "round"
    }
    
    return {
        tags: tags,
        javaTags: JavaTags
    }
})();