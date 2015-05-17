var prioryty = {
	'+': 3,
	'-': 3,
	'*': 4,
	'/': 4,
	'^': 5,
	'sin': 2,
	'cos': 2,
	'tg': 2,
	'ctg': 2,
	'asin': 2,
	'acos': 2,
	'atg': 2,
	'actg': 2,
	'mod': 2,
	'!': 6,
	'(': 1,
	')': 1,
	'': 0
}
function stackRefresh(stack, res, symb) {
	if((!stack.length || symb == '(') && symb != ')') {
		stack.push(symb);
		return;
	}
	if(symb.length > 1) {
		stack.push(symb);
		return;
	}
	var tmp;
	if(symb == ')') {
		tmp = stack.pop();
		while(tmp != '(') {
			res.push(tmp);
			tmp = stack.pop();
		}
		return;
	}
	if(prioryty[stack[stack.length - 1]] < prioryty[symb]) {
		stack.push(symb);
	}
	else {
		if(stack[stack.length - 1] == '^' && symb == '^') {
			stack.push(symb);
			return;
		}
		tmp = stack.pop();
		res.push(tmp);
		stackRefresh(stack, res, symb);
	}
}

function poland(str) {
	var stack = [];
	var result = [];
	var start = str.split('');
	var i = 0;
	while(i < str.length) {
		if(str[i] >= 0 && str[i] <= 9) {
			var number = str[i];
			i++;
			while((str[i] >= 0 && str[i] <= 9 && i < str.length) || str[i] == '.') {
				number += str[i];
				i++;
			}
			result.push(number);
		}
		else {
			if(prioryty[str[i]]) {
				if(str[i] == '-' || str[i] == '+') {
					if(i == 0) {
						result.push('0');
					}
					else {
						if(str[i - 1] == '(') {
							result.push('0');
						}
					}
				}
				stackRefresh(stack, result, str[i])
			}
			else {
				var tmp = str[i];
				while(str[i + 1] != '(') {
					i++;
					tmp += str[i];
				}
				stackRefresh(stack, result, tmp);
			}
			i++;
		}
	}
	stackRefresh(stack, result, '');
	return result.join(' ');
}