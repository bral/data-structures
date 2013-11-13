var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    size++;
  };

  instance.dequeue = function(){
    size && size--;
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
