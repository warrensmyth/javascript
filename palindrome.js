// Adds 'reverse'to all strings.
String.prototype.reverse = function(){
  return Array.from(this).reverse().join("");
}

// Adds "blank" to all strings.
String.prototype.blank = function() {
	return (this.length === 0 || /^\s*$/.test(this));
}

// Adds method to grab last element of an array to arrays
Array.prototype.last = function() {
	return (this.reverse()[0]);
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
  	return string.toLowerCase();
  }

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}

