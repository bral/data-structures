var Stack = function() {

  this.storage = {};
  this.length = 0;
  // Hey! Copy your code from src/prototypal/stack.js and paste it here
};

Stack.prototype.size = function(){
  return this.length;
};

Stack.prototype.push = function(value){
  this.storage[this.length] = value;
  this.length++;
};

Stack.prototype.pop = function(){
  var last = this.storage[this.length - 1];
  delete this.storage[this.length - 1];
  this.length && this.length--;
  return last;
};

