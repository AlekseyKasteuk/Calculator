function sin(value) {
	return Math.sin(value);
}

function cos(value) {
	return Math.cos(value);
}

function tg(value) {
	return Math.tan(value);
}

function ctg(value) {
	return 1/Math.tan(value);
}

function asin(value) {
	return Math.asin(value);
}

function acos(value) {
	return Math.acos(value);
}

function atg(value) {
	return Math.atan(value);
}

function actg(value) {
	return Math.PI / 2 - Math.atan(value);
}

function mod(value) {
	return Math.abs(value);
}

function ln(value) {
	return Math.log(value);
}

function factorial(val) {
	if(val < 0) {
		return NaN;
	}
	if(val == 0) {
		return 1;
	}
	return val * factorial(val - 1);
}