// HOF
function forEach(elems, action) {
	for(var i = 0; i < elems.length; i++) {
		action(elems[i]);
	}
}

// HOF    
// OCP Open for extension; closed for change [ SOLID design principles]
function filter(elems, predicateFn) {
    var result = [];
   forEach(elems, function(elem) {
    if(predicateFn(elem)) {
        result.push(elem);
    }
   });
  return result;
}

function map(elems, transformFn) {
    var result = [];
    forEach(elems, function(elem) {
        result.push(transformFn(elem));
    });
   return result;
}