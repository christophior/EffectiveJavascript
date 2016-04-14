header('// functions');
log("identity(3)", identity(3));
log("add(3, 4)", add(3, 4));
log("sub(3, 4)", sub(3, 4));
log("mul(3, 4)", mul(3, 4));
log("identityf(3)()", identityf(3)());
log("addf(3)(4)", addf(3)(4));

header('// curry and reverse curry');
log("curry(add, 3)(4)", curry(add, 3)(4));
log("curry(mul, 5)(6)", curry(mul, 5)(6));
log("curryr(sub, 3)(11)", curryr(sub, 3)(11));
log("curryr(sub, 3)(3)", curryr(sub, 3)(3));

header('// lift');
log("liftf(add)(3)(4)", liftf(add)(3)(4));
log("liftf(mul)(5)(6)", liftf(mul)(5)(6));

header('// inc functions');
var inc1 = addf(1);
log("inc1(5)", inc1(5));
log("inc1(inc1(5))", inc1(inc1(5)));

var inc2 = curry(add, 1);
log("inc2(5)", inc2(5));
log("inc2(inc2(5))", inc2(inc2(5)));

var inc3 = curryr(add, 1);
log("inc3(5)", inc3(5));
log("inc3(inc3(5))", inc3(inc3(5)));

var inc4 = liftf(add)(1);
log("inc4(5)", inc4(5));
log("inc4(inc4(5))", inc4(inc4(5)));

header('// twice');
log("twice(add)(11)", twice(add)(11));
log("twice(mul)(11)", twice(mul)(11));

header('// reverse');
log("reverse(sub)(3, 2)", reverse(sub)(3, 2));

header('// compose');
var doubl = twice(add),
	square = twice(mul);
log("composeu(doubl, square)(5)", composeu(doubl, square)(5));
log("composeb(add, mul)(2, 3, 7)", composeb(add, mul)(2, 3, 7));

header('// limit');
var add_ltd = limit(add, 1);
log("add_ltd(3, 4)", add_ltd(3, 4));
log("add_ltd(3, 5)", add_ltd(3, 5));

header('// from');
var index = from(0);
log("index()", index());
log("index()", index());
log("index()", index());

header('// to');
index = to(from(3), 5);
log("index()", index());
log("index()", index());
log("index()", index());

header('// fromTo');
index = fromTo(0, 3);
log("index()", index());
log("index()", index());
log("index()", index());
log("index()", index());

header('// element (ele = element([\'a\', \'b\', \'c\', \'d\'], fromTo(1, 3)))');
var ele = element(['a', 'b', 'c', 'd'], fromTo(1, 3));
log('ele()', ele());
log('ele()', ele());
log('ele()', ele());

header('// element (ele = element([\'a\', \'b\', \'c\', \'d\']))');
ele = element2(['a', 'b', 'c', 'd']);
log('ele()', ele());
log('ele()', ele());
log('ele()', ele());
log('ele()', ele());
log('ele()', ele());

header('// collect (col = collect(fromTo(0, 2), array))');
var array = [];
var col = collect(fromTo(0, 2), array);
log('col()', col());
log('col()', col());
log('col()', col());
log('array', '[' + array + ']');

header('// filter (fil = filter(fromTo(0, 5), thirds))');
var func = function third(val) {return (val % 3) === 0;}
var fil = filter(fromTo(0, 5), func);

log("fil()", fil());
log("fil()", fil());
log("fil()", fil());

header('// concat (con = concat(fromTo(0, 3), fromTo(0, 2)))');
var con = concat(fromTo(0, 3), fromTo(0, 2));
log("cont()", con());
log("cont()", con());
log("cont()", con());
log("cont()", con());
log("cont()", con());
log("cont()", con());

header('// gensymf');
var geng = gensymf('G'),
	genh = gensymf('H');

log('geng()', geng());
log('genh()', genh());
log('geng()', geng());
log('genh()', genh());

header('// fibonacci');
var fib = fibonaccif(0, 1);
log('fib()', fib());
log('fib()', fib());
log('fib()', fib());
log('fib()', fib());
log('fib()', fib());
log('fib()', fib());

header('// counter');
var object = counter(10),
	up = object.up,
	down = object.down;

log('up()', up());
log('down()', down());
log('down()', down());
log('up()', up());

header('// revoke');
var rev = revocable(add),
	add_rev = rev.invoke;
log('add_rev(3, 4)', add_rev(3, 4));
log('rev.revoke()', rev.revoke());
log('add_rev(5, 7)', add_rev(5, 7));

header('// addm');
log('addm(m(3), m(4))', JSON.stringify( addm(m(3), m(4)) ));
log('addm( m(1), m(Math.PI, "pi"))', JSON.stringify( addm( m(1), m(Math.PI, "pi")) ));

header('// liftm');
var addm1 = liftm(add, '+');
log('addm(m(3), m(4))', JSON.stringify(addm1(m(3), m(4))));
var mulm1 = liftm(mul, '*');
log('mulm(m(3), m(4)))', JSON.stringify(mulm1(m(3), m(4))));

header('// liftm modified');
var addm2 = liftm2(add, '+');
log('addm(3, 4)', JSON.stringify(addm2(3, 4)));

header('// addg');
log('addg()', addg());
log('addg(2)()', addg(2)());
log('addg(2)(7)()', addg(2)(7)());
log('addg(3)(0)(4)()', addg(3)(0)(4)());
log('addg(1)(2)(4)(8)()', addg(1)(2)(4)(8)());