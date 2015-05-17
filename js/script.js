var calculator = document.querySelector('.calculator'),
	display = document.querySelector('.display')
	displayStr = [],
	openBrackets = 0,
	state = 'empty';
var conditions = [];
var memory;

(function() {
	var wholeElements = document.querySelectorAll('span');
	[].forEach.call(wholeElements, function(v) {
		v.addEventListener('click', function() {
			var beforeState = state;
			if(display.innerText == '0' || display.innerText == 'NaN') {
				display.innerText = '';
				state = 'empty';
				conditions = [state];
				displayStr = [];
			}
			if(this.id == 'equal') {
				if(state == 'open' || state == 'unary') {
					display.innerText += 0;
				}
				while(openBrackets) { 
					display.innerText += ')'; 
					openBrackets--;
				}
				display.innerText = make(poland(display.innerText));
				console.log(display.innerText);
				var tmp = eval(display.innerText);
				display.innerText = tmp != undefined ? tmp : '';
				state = 'empty';
				conditions = [state];
				displayStr = [];
				if(display.innerText) {
					state = 'number';
					displayStr.push(display.innerText);
					conditions.push(state);
				}
				openBrackets = 0;
				return;
			}
			
			var classList = this.classList;
			var add = '';
			if(classList.contains('correct')) {
				if(!(displayStr.length)) { return; }
				var buf = displayStr.pop();
				if(buf == '(') { openBrackets-- }
					if(buf == ')') { openBrackets++ }
				display.innerText = display.innerText.slice(0, -buf.length);
				conditions.pop();
				state = conditions.pop();
				conditions.push(state);
				return;
			}
			if(classList.contains('memory')) {
				if(this.innerText == 'MS') {
					if(displayStr.join('') - 0) { memory = display.innerText; }
				}
				else {
					if(memory && state != 'close') {
						add = memory;
					}
				}

			}
			if(this.id == 'open_bracket') {
				if (state != 'number' && state != 'dot' && state != 'close'){
					openBrackets++;
					add = "(";
					state = 'open';
				}
			}
			if(this.id == 'close_bracket') {
				if(openBrackets != 0 && (state == 'number' || state == 'close' || state == 'dot' || state == 'close')) {
					if(state == 'dot') {
						display.innerText = display.innerText.slice(0, -1);
					}
					openBrackets--;
					add = ")";
					state = 'close';
				}
			}
			if(classList.contains('up_index')) {
				if(state == 'number' || state == 'dot' || state == 'close') {
					add = "^(";
					if(this.innerText.slice(-2, -1) == 'n') {
						openBrackets++;
						state = 'open';
					}
					add += this.innerText.slice(-2, -1) ==
					 'n' ? '' : this.innerText.slice(-2, -1) + ')';
				}
			}
			if(classList.contains('clear')) { 
				openBrackets = 0;
				displayStr = [];
				display.innerText = '';
				state = 'empty';
				return;
			}
			if(classList.contains('func')) {
				if(state != 'number' && state != 'dot' && state != 'close') {
					add = this.innerText + '(';
					state = 'open';
					openBrackets++;
				}
			}
			if(classList.contains('operator')) {
				if(state == 'number' || state == 'close' || state == 'dot') {
					if(state == 'dot') {
						display.innerText = display.innerText.slice(0, -1);
					}
					add = this.innerText;
					state = 'operation';
				}
				else {
					if (this.innerText == '-' || this.innerText == '+') {
						if (state == 'empty' || state == 'open') {
							add = this.innerText;
							state = 'unary';
						}
					};
				}
			}
			if(this.id == 'factorial') {
				if(state == 'number' || state == 'close' || state == 'dot') {
					if(state == 'dot') {
						display.innerText = display.innerText.slice(0, -1);
					}
					add = this.innerText;
					state = 'close';
				}
			}
			if(!classList.length && !this.id) {
				if (state != 'close') {
					if(this.innerText == '.') {
						if(state == 'dot') {
							add = '';
						}
						else {
							if(state != 'number') {
								add = '0';
							}
							state = 'dot';
							add += this.innerText;
						}
					}
					else {
						add = this.innerText;
						state = 'number';
					}
				}
			}
			display.innerText += add;
			if(add) {
				displayStr.push(add);
				conditions.push(state);
			}
		});
	});
	window.addEventListener('keydown', function(e) {
		var text = '';
		// console.log(e);
		switch(e.keyCode) {
			case 27:
				text = 'C';
				break;
			case 96: 
				text = 0;
				break;
			case 97: 
				text = 1;
				break;
			case 98: 
				text = 2;
				break;
			case 99: 
				text = 3;
				break;
			case 100: 
				text = 4;
				break;
			case 101: 
				text = 5;
				break;
			case 102:
				text = 6;
				break;
			case 103: 
				text = 7;
				break;
			case 104: 
				text = 8;
				break;
			case 105: 
				text = 9;
				break;
			case 110: 
				text = '.';
				break;
			case 191: 
				text = '.';
				break;
			case 48: 
				text = e.shiftKey ? ')' : 0;
				break;
			case 49: 
				text = e.shiftKey ? '!' : 1;
				break;
			case 50: 
				text = e.shiftKey ? '<div>x<sup>2</sup></div>' : 2;
				break;
			case 51: 
				text = e.shiftKey ? '<div>x<sup>3</sup></div>' : 3;
				break;
			case 52: 
				text = 4;
				break;
			case 53: 
				text = 5;
				break;
			case 54:
				text = e.shiftKey ? '<div>x<sup>n</sup></div>' : 6;
				break;
			case 55: 
				text = 7;
				break;
			case 56: 
				text = 8;
				break;
			case 57: 
				text = e.shiftKey ? '(' : 9;
				break;
			case 107: 
				text = '+';
				break;
			case 109: 
				text = '-';
				break;
			case 106: 
				text = '*';
				break;
			case 111: 
				text = '/';
				break;
			case 8: 
				text = '←';
				break;
			case 83:
				text = e.shiftKey ? 'asin' : 'sin';
				break;
			case 67: 
				text = e.shiftKey ? 'acos' : 'cos';
				break;
			case 84: 
				text = e.shiftKey ? 'atg' : 'tg';
				break;
			case 75: 
				text = e.shiftKey ? 'actg' : 'ctg';
				break;
			case 220: 
				text = 'mod';
				break;
			case 13: 
				text = '=';
				break;

		}
		[].forEach.call(document.querySelectorAll('span'), function(v) {
			if(v.innerHTML == text) {
				console.log(text);
				v.click();
			}
		});
	})
})()