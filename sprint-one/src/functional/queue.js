var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    storage[size] = value;
    size++;
  };

  instance.dequeue = function(){
    var first = storage[0]
    size && size--;
    return first;
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
