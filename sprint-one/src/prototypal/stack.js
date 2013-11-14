var makeStack = function() {
  var instance = Object.create(stackMethods);
  instance.storage = {};
  instance.length = 0;

  return instance;
};

var stackMethods = {
  push: function(value){
    this.storage[this.length] = value;
    this.length++;
  },

  pop: function(){
    var last = this.storage[this.length - 1];
    delete this.storage[this.length - 1];
    this.length && this.length--;
    return last;
  },

  size: function(){
    console.log('stackMethod',this.length);
    return this.length;
  }
};


