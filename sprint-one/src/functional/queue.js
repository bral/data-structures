var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var head = 0;
  var tail = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    storage[tail] = value;
    tail++;
  };

  instance.dequeue = function(){
    var first = storage[head]
    if (head < tail) {
      head++;
    }
    return first;
  };

  instance.size = function(){
    return tail - head;
  };

  return instance;
};