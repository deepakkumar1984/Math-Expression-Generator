var operators = ['+', '-', 'x', '÷'];
var normalOps = ['+', '-', '*', '/'];
function generateExpression(level) {
    if (level == 1) {
        return level1Expression();
    }
    else if (level == 2) {
        return level2Expression();
    }
    else if (level == 3) {
        return level3Expression();
    }
    else if (level == 4) {
        return level4Expression();
    }
    else if (level == 5) {
        return level5Expression();
    }
}

function level1Expression() {
    var result = {};
    var totalNumbers = chance.integer({ min: 3, max: 5 });
    var numbers = chance.unique(chance.natural, totalNumbers, { min: 1, max: 100 });
    var question = "";
    var normalExpression = "";
    for (var i = 0; i < numbers.length; i++) {
        question += numbers[i] + " ";
        normalExpression += numbers[i] + " ";
        if (i < numbers.length - 1) {
            var opInt = chance.integer({ min: 0, max: 1 });
            question += operators[opInt] + " ";
            normalExpression += normalOps[opInt] + " ";
        }
    }

    result.question = question;
    result.answer = math.eval(normalExpression);
    return result;
}

function level2Expression() {
    var result = {};
    var totalNumbers = chance.integer({ min: 3, max: 5 });
    var numbers = chance.unique(chance.natural, totalNumbers, { min: 1, max: 100 });
    var question = "";
    var normalExpression = "";
    for (var i = 0; i < numbers.length; i++) {
        question += numbers[i] + " ";
        normalExpression += numbers[i] + " ";
        if (i < numbers.length - 1) {
            var opInt = chance.integer({ min: 0, max: 1 });
            question += operators[opInt] + " ";
            normalExpression += normalOps[opInt] + " ";
        }
    }

    result.question = question;
    result.answer = math.eval(normalExpression);
    return result;
}

function level3Expression() {
    var result = {};
    var totalNumbers = chance.integer({ min: 4, max: 6 });
    var numbers = chance.unique(chance.natural, totalNumbers, { min: 1, max: 20 });
    var divideChance = chance.integer({ min: 0, max: (numbers.length - 1) * 2 });
    var question = "";
    var normalExpression = "";
    for (var i = 0; i < numbers.length; i++) {
        question += numbers[i] + " ";
        normalExpression += numbers[i] + " ";
        if (i < numbers.length - 1) {
            if (divideChance == i) {
                question += operators[3] + " ";
                normalExpression += normalOps[3] + " ";
            }
            else {
                var opInt = chance.integer({ min: 0, max: 2 });
                question += operators[opInt] + " ";
                normalExpression += normalOps[opInt] + " ";
            }
        }
    }

    result.question = question;
    result.answer = math.eval(normalExpression).toFixed(2);
    return result;
}

function level4Expression() {
    var result = {};
    var totalNumbers = chance.integer({ min: 5, max: 8 });
    var numbers = chance.unique(chance.natural, totalNumbers, { min: 1, max: 100 });
    var divideChance = chance.integer({ min: 0, max: (numbers.length - 1) * 2 });
    var braces = [];//chance.unique(chance.natural, 3, { min: 0, max: 11 });
    var question = "";
    var normalExpression = "";
    for (var i = 0; i < numbers.length; i++) {
        if (braces.indexOf(i) > -1) {
            question += "(" + numbers[i] + " ";
        }
        else {
            question += numbers[i] + " ";
        }

        normalExpression += numbers[i] + " ";
        if (i < numbers.length - 1) {
            if (divideChance == i) {
                question += operators[3] + " ";
                normalExpression += normalOps[3] + " ";
            }
            else {
                var opInt = chance.integer({ min: 0, max: 2 });
                question += operators[opInt] + " ";
                normalExpression += normalOps[opInt] + " ";
            }
        }
    }

    result.question = question;
    result.answer = math.eval(normalExpression).toFixed(2);;
    return result;
}

function level5Expression() {
    var result = {};
    var totalNumbers = chance.integer({ min: 8, max: 12 });
    var numbers = chance.unique(chance.natural, totalNumbers, { min: 1, max: 1000 });
    var divideChances = chance.unique(chance.natural, 3, { min: 0, max: (numbers.length - 1) * 2 });
    var braces = [];//chance.unique(chance.natural, 3, { min: 0, max: 11 });
    var question = "";
    var normalExpression = "";
    for (var i = 0; i < numbers.length; i++) {
        if (braces.indexOf(i) > -1) {
            question += "(" + numbers[i] + " ";
        }
        else {
            question += numbers[i] + " ";
        }

        normalExpression += numbers[i] + " ";
        if (i < numbers.length - 1) {
            if (divideChances.indexOf(i) > -1) {
                question += operators[3] + " ";
                normalExpression += normalOps[3] + " ";
            }
            else {
                var opInt = chance.integer({ min: 0, max: 2 });
                question += operators[opInt] + " ";
                normalExpression += normalOps[opInt] + " ";
            }
        }
    }

    result.question = question;
    result.answer = math.eval(normalExpression).toFixed(2);;
    return result;
}