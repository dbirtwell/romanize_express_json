// Define the module method
module.exports = function(num) {

    // Validation
    if (!+num) { // unary equates to NaN
 		throw new Error('The value must a number.');		
	}
	if (num > 3999) {
		throw new Error('The largest year allowed is 3999.');		
	}
	if (num < 0) {
		throw new Error('The year must be a positive value.');		
	}

    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
};