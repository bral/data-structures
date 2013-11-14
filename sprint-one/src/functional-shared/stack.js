var makeStack = function() {
  var instance = {};
  var storage = {};
  var size = 0;

  return instance;
};

var stackMethods = {
   instance.push = function(value){
    storage[size] = value;
    size++;
  };

  instance.pop = function(){
    var last = storage[size - 1];
    delete storage[size - 1];
    size && size--;
    return last;
  };

  instance.size = function(){
    return size;
  };
};
