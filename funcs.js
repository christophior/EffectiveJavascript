function log(command, answer) {
	document.write(command + " // ")
	document.writeln(answer)
}

function header(args) {
	document.writeln("\n<b>" + args + "</b>")
}
// returns what's passed
function identity(x) {
	return x;
}

// returns function that can be called and return what was passed in before
function identityf(x) {
	return function () {
		return x;
	};
}

//add, sub, mul binary functions
function add(x, y) {
	return x+y;
}

function sub(x, y) {
	return x-y;
}

function mul(x, y) {
	return x*y;
}

function addf(x) {
	return function(y){
		return x + y;
	};
}

function curry(func, x) {
	return function(y){
		return func(x, y);
	};
}

function curryr(func, x) {
	return function(y){
		return func(y, x);
	};
}

function liftf(func) {
	return function(x){
		return curry(func, x);
	};
}

function twice(func) {
	return function(x){
		return curry(func, x)(x);
	};
}

function reverse(func) {
	return function(x, y){
		return curry(func, y)(x);
	};
}

function composeu(func1, func2) {
	return function(x){
		return func2(func1(x));
	};
}

function composeb(func1, func2) {
	return function(x, y, z){
		return func2(func1(x, y), z);
	};
}

function limit(func, lim) {
	return function(x, y) {
		lim -= 1;
		return lim >= 0 ? func(x, y) : undefined;
	}
}

function from(x) {
	return function () {
		return x++;
	}
}

function to(func, limit) {
	return function () {
		var result = func();
		return result < limit ? result : undefined;
	}
}

function fromTo(start, end) {
	return function () {
		return start < end ? start++ : undefined;
	}
}

function element(arr, gen) {
	return function () {
		return arr[gen()];
	}
}

function element2(arr, gen) {
	gen = gen !== undefined ? gen : from(0);
	return function () {
		var index = gen();
		return arr[index];
	}
}

function collect(gen, arr) {
	return function() {
		var value = gen();
		if (value !== undefined) {
			arr.push(value);
		}
		return value;
	}
}

function filter(gen, func) {
	return function() {
		var val = gen();
		while (val !== undefined && func(val) === false){
			val = gen();
		}
		return val;
	}
}

function concat(gen1, gen2) {
	return function() {
		var result = gen1();
		return result !== undefined ? result : gen2();
	}
}

function gensymf(sym) {
	var gen = from(1);
	return function() {
		return sym + gen();
	}
}

function fibonaccif(first, second) {
	return function () {
		var next = first;
		first = second;
		second = next + first;
		return next;
	}
}

function counter(value) {
	return {
		up: function () {return ++value;},
		down: function (){return --value;}
	}
}

function revocable(func) {
	var revoked = false;
	return {
		invoke: function(x, y) { return revoked ? undefined : func(x, y) },
		revoke: function () { revoked = true; return ''; }
	}
}

function m(value, source) {
	return {
		value: value,
		source: (typeof source === 'string') ? source : String(value)
	}
}

function addm(m1, m2) {
	return m(m1.value + m2.value, '(' + m1.source + '+' + m2.source + ')');
}

function liftm(func, str) {
	return function(m1, m2) {
		return m(func(m1.value, m2.value), '(' + m1.source + str + m2.source + ')');
	}
}

function liftm2(func, str) {
	return function(m1, m2) {
		m1 = (typeof m1 === 'number') ? m(m1) : m1;
		m2 = (typeof m2 === 'number') ? m(m2) : m2;
		return m(func(m1.value, m2.value), '(' + m1.source + str + m2.source + ')');
	}
}

function addg(num) {
	var sum = undefined;
	return num === undefined ? sum : function () {
		sum = sum === undefined ? 0 : sum;
		sum += num;
		return addg;
	};
}