module.exports = function multiply(first, second) {
	var multi = new Array(200).fill(0);

	for(var i = first.length - 1; i >= 0; i--) {
		var carry = 0;
		for(var j = second.length - 1; j >= 0; j--) {
			var product = +first[i] * +second[j];
			/* Определяем позицию вставки результата*/
			var answerPosition = (multi.length - 1) - (first.length - 1 - i) - (second.length - 1 - j);

			product += multi[answerPosition] + carry;

			multi[answerPosition] = product % 10;

			carry = Math.floor(product / 10);
		}

		multi[answerPosition - 1] = carry;

		carry = 0;
   }
   multi = multi.join('').replace(/^0+/, '')
	
	return multi;
 }
