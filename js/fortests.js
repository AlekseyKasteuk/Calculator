function factor (str, substr, pastestr) {
	var i, j, k1, k2;
	var part1, part2;
	var flag = true;
	while (flag) {
		flag = false;
		for(i = 0; i < str.length ; i++) {
			if(str[i] == substr) {
				part2 = '';
				j = i - 1;
				if(str[j] != ')') {
					while(true) {
						if(isNaN(str[j] - 0)) { break; }
						part2 = str[j] + part2;
						j--;
					}
					if(str[j] == '-') {
						part2 = '-' + part2;
					}
					k2 = j + 1;
					part2 = '(' + part2 + ')';
				}
				else {
					k2 = 1;
					j--;
					while(k2) {
						if(str[j] == '(') {
							k2--;
						}
						if(str[j] == ')') {
							k2++;
						}
						if(k2){
							part2 = str[j] + part2;
						}
						j--;
					}
					part2 = '(' + part2 + ')';
					switch(str[j]) {
						case 'n':
							part2 = 'sin' + part2;
							j -= 3;
							if(str[j] == 'a') {
								part2 = 'a' + part2;
								j--;
							}
							break;
						case 's':
							part2 = 'cos' + part2;
							j -= 3;
							if(str[j] == 'a') {
								part2 = 'a' + part2;
								j--;
							}
							break;
						case 'd':
							part2 = 'mod' + part2;
							j -= 3;
							break;
						case 'g':
							part2 = 'tg' + part2;
							j -= 2;
							if(str[j] == 'c') {
								part2 = 'c' + part2;
								j--;
								if(str[j] == 'a') {
									part2 = 'a' + part2;
									j--;
								}
							}
							else {
								if(str[j] == 'a') {
									part2 = 'a' + part2;
									j--;
								}
							}
							break;
						default:
							break;
					}
					k2 = j + 1;
				}
				var buf = str.split('')
				buf.splice(k2, i - k2 + 1, pastestr + '(' + part2 + ')');
				str = buf.join('');
				flag = true;
				break;
			}
		}
	}
	return str;
}

function power (str, substr, pastestr) {
	var i, j, k1, k2;
	var part1, part2;
	var flag = true;
	while (flag) {
		flag = false;
		for(i = str.length - 1; i >= 0 ; i--) {
			if(str[i] == substr) {
				part1 = '';
				j = i + 2;
				k1 = 1;
				while(k1) {
					if(str[j] == '(') {
						k1++;
					}
					if(str[j] == ')') {
						k1--;
					}
					if(k1){
						part1 += str[j];
					}
					j++;
				}
				k1 = j;
				part2 = '';
				j = i - 1;
				if(str[j] != ')') {
					while(true) {
						if(isNaN(str[j] - 0)) { break; }
						part2 = str[j] + part2;
						j--;
					}
					k2 = j + 1;
					part2 = '(' + part2 + ')';
				}
				else {
					k2 = 1;
					j--;
					while(k2) {
						if(str[j] == '(') {
							k2--;
						}
						if(str[j] == ')') {
							k2++;
						}
						if(k2){
							part2 = str[j] + part2;
						}
						j--;
					}
					part2 = '(' + part2 + ')';
					switch(str[j]) {
						case 'n':
							part2 = 'sin' + part2;
							j -= 3;
							if(str[j] == 'a') {
								part2 = 'a' + part2;
								j--;
							}
							break;
						case 's':
							part2 = 'cos' + part2;
							j -= 3;
							if(str[j] == 'a') {
								part2 = 'a' + part2;
								j--;
							}
							break;
						case 'd':
							part2 = 'mod' + part2;
							j -= 3;
							break;
						case 'g':
							part2 = 'tg' + part2;
							j -= 2;
							if(str[j] == 'c') {
								part2 = 'c' + part2;
								j--;
								if(str[j] == 'a') {
									part2 = 'a' + part2;
									j--;
								}
							}
							else {
								if(str[j] == 'a') {
									part2 = 'a' + part2;
									j--;
								}
							}
							break;
						default:
							break;
					}
					k2 = j + 1;
				}
				var buf = str.split('')
				buf.splice(k2, k1 - k2, pastestr + '(' + part2 + ',' + part1 + ')');
				str = buf.join('');
				flag = true;
				break;
			}
		}
	}
	return str;
}