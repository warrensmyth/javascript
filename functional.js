let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
// Example: "North Dakota" -> "north-dakota"
function urlify(string) {
	return string.toLowerCase().split(/\s+/).join('-');
}
// urls: Imperative Version
function imperativeUrls(elements) {
	let urls = [];
	elements.forEach( element => {
		urls.push(urlify(element));
	});
	return urls;
}
console.log(imperativeUrls(states));

// urls: Functional Version
function functionalUrls(states) {
	return states.map( state => urlify(state));
}
console.log(functionalUrls(states));

// State URLs @ example.com
function stateUrls(states) {
	return states.map( state => "https://example.com/" + state);
}
console.log(stateUrls(functionalUrls(states)));

// singles: Imperative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(element => {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
console.log(imperativeSingles(states));

// singles: Functional version
function functionalSingles(elements) {
	return elements.filter( element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

// Dakota detector
function dakota(elements) {
	return elements.filter( element => element.includes("Dakota"));
}
console.log(dakota(states));

// Double name detector
function functionalDoubles(elements) {
	return elements.filter( element => element.split(/\s+/).length === 2);
}
console.log(functionalDoubles(states));



let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: Imperative solution.
function imperativeSum(elements) {
	let total = 0;
	elements.forEach(n => total += n);
	return total;
}
console.log(imperativeSum(numbers));

// sum: Functional solution.
function functionalSum(elements) {
	return elements.reduce((total, n) => { return total += n; });
}
console.log(functionalSum(numbers));

// lengths: Imperative solution
function imperativeLengths(elements) {
	let lengths = {};
	elements.forEach( element => lengths[element] = element.length);
	return lengths;
}
console.log(imperativeLengths(states));

// lengths: Functional solution
function functionalLengths(elements) {
	return elements.reduce((lengths,element) => {
		lengths[element]=element.length;
		return lengths;
	},{});
}
console.log(functionalLengths(states));

// products: Imperative solution
function imperativeProducts(elements) {
	let products = {};
	elements.forEach( element => products[element] = element *= 2);
	return products;
}
console.log(imperativeProducts(numbers));

// products: Functional solution
function functionalProducts(elements) {
	return elements.reduce((products, element) => {
		products[element] = element *= 2;
		return products;
	}, {});
}
console.log(functionalProducts(numbers));