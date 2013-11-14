var makeStack = function() {
  instance = {};
  instance.storage = {};
  instance.length = 0;

  _.extend(instance, stackMethods);
  // instance.size = stackMethods.size;
  // instance.push = stackMethods.push;
  // instance.pop = stackMethods.pop;

  return instance;
};

var stackMethods = {
  push: function(value){
    this.storage[this.length] = value;
    this.length++;
  },

  pop: function(){
    var last = storage[length - 1];
    delete storage[length - 1];
    length && length--;
    return last;
  },

  size: function(){
    console.log('stackMethod',this.length);
    return this.length;
  }
};
