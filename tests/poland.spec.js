describe('ReversePoland', function () {
	describe('poland', function () {
		it('should return empty string', function () {
			expect(poland('')).to.be.equal('');
		});
		it('should return 10 20 -', function () {
			expect(poland('10-20')).to.be.equal('10 20 -');
		});
		it('should return 10 20 - 10 +', function () {
			expect(poland('10-20+10')).to.be.equal('10 20 - 10 +');
		});
		it('should return 0 1 - 10 +', function () {
			expect(poland('-1+10')).to.be.equal('0 1 - 10 +');
		});
		it('should return 1 2 3 + *', function () {
			expect(poland('1*(2+3)')).to.be.equal('1 2 3 + *');
		});
		it('should return 1 2 3 10 1 + * + *', function () {
			expect(poland('1*(2+3*(10+1))')).to.be.equal('1 2 3 10 1 + * + *');
		});
		it('should return 10 20 11 * + 5 +', function () {
			expect(poland('10+20*11+5')).to.be.equal('10 20 11 * + 5 +');
		});
		it('should return 10 20 1 + ^', function () {
			expect(poland('10^(20+1)')).to.be.equal('10 20 1 + ^');
		});
		it('should return 10 20 ^', function () {
			expect(poland('10^(20)')).to.be.equal('10 20 ^');
		});
		it('should return 10 20 1 + 2 ^ ^', function () {
			expect(poland('10^(20+1)^2')).to.be.equal('10 20 1 + 2 ^ ^');
		});
		it('should return 10 20 1 + ^ 2 ^ 20 +', function () {
			expect(poland('10^(20+1)^2+20')).to.be.equal('10 20 1 + 2 ^ ^ 20 +');
		});
		it('should return 10 sin', function () {
			expect(poland('sin(10)')).to.be.equal('10 sin');
		});
		it('should return 10 actg atg cos asin', function () {
			expect(poland('asin(cos(atg(actg(10))))')).to.be.equal('10 actg atg cos asin');
		});
		it('should return 100 10 ! *', function () {
			expect(poland('100*10!')).to.be.equal('100 10 ! *');
		});
		it('should return 100 10 1 20 * + ! *', function () {
			expect(poland('100*(10+1*20)!')).to.be.equal('100 10 1 20 * + ! *');
		});
		it('should return 10.5 12.2225 +', function () {
			expect(poland('10.5+12.2225')).to.be.equal('10.5 12.2225 +');
		});
		it('should return 1 3 2 2 ^ + 1 2 3 2 ^ ^ ^ - ln +', function () {
			expect(poland('1+ln(3+2^(2)-1^(2)^(3)^(2))')).to.be.equal('1 3 2 2 ^ + 1 2 3 2 ^ ^ ^ - ln +');
		});
		it('should return 1 2 ^ sin sin sin', function () {
			expect(poland('sin(sin(sin(1^(2))))')).to.be.equal('1 2 ^ sin sin sin');
		});
	});
});

describe('Make', function () {
	it('should return 35', function () {
		expect(make('1 2 3 10 1 + * + *')).to.be.equal(35);
	});
	it('should return 36', function () {
		expect(make('2 1 1 + ^ 2 ^ 20 +')).to.be.equal(36);
	});
	it('should return 24', function () {
		expect(make('1 1 3 * + !')).to.be.equal(24);
	});
	it('should return 600', function () {
		expect(make('100 1 1 2 * + ! *')).to.be.equal(600);
	});
	it('should return 0.8414709848078965', function () {
		expect(make('1 2 ^ sin')).to.be.equal(0.8414709848078965);
	});
});