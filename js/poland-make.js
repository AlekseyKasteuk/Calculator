function Tree(data, leftFull, rightFull) {
	this.data = data;
	this.left = null;
	this.right = null;
	this.leftFull = leftFull;
	this.rightFull = rightFull;
}

function add(tree, data) {
	if(data[0] >= 0 && data[0] <= 9) {
		if(tree.rightFull) {
			tree.rightFull--;
			if(tree.right){
				add(tree.right, data);
			}
			else {
				tree.right = new Tree(data, 0, 0);
			}
		}
		else {
			tree.leftFull--;
			if(tree.left){
				add(tree.left, data);
			}
			else {
				tree.left = new Tree(data, 0, 0);
			}
		}
	}
	else {
		if(tree.rightFull) {
			tree.rightFull++;
			if(tree.right){
				add(tree.right, data);
			}
			else {
				if(data == '!' || data.length > 1) {
					tree.right = new Tree(data, 1, 0);
					tree.rightFull--;
				}
				else {
					tree.right = new Tree(data, 1, 1);
				}
			}
		}
		else {
			tree.leftFull++;
			if(tree.left){
				add(tree.left, data);
			}
			else {
				if(data == '!' || data.length > 1) {
					tree.left = new Tree(data, 1, 0);
					tree.leftFull--;
				}
				else {
					tree.left = new Tree(data, 1, 1);
				}
			}
		}
	}
};

function print(tree) {
	if (tree) {
		if(tree.data == '!') {
			return 'factorial(' +
				print(tree.left) + ')';
		}
		if(tree.data.length > 1 && (tree.data[0] > '9' || tree.data[0] < '0')) {
			console.log(tree);
			return tree.data + '(' + print(tree.left) + ')';
		}
		if(tree.data == '^') {
			return 'Math.pow(' + print(tree.left) + ',' + print(tree.right) + ')';
		}
		return '(' +
			print(tree.left) +
			tree.data +
			print(tree.right) +
			')';
	}
	return '';
};

function make(str) {
	var start = str.split(' ').reverse();
	var tree;
	start.forEach(function(val) {
		if(tree){
			add(tree, val);
		}
		else {
			if(val[0] >= 0 && val[0] <= 9) {
				tree = new Tree(val, 0, 0);
				return;
			}
			if(val == '!' || val.length > 1) {
				tree = new Tree(val, 1, 0);
			}
			else {
				tree = new Tree(val, 1, 1);
			}
		}
	});
	return eval(print(tree));
}