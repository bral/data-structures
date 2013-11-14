var makeQueue = function(){
  var instance = {};

  var storage = {};
  var head = 0;
  var tail = 0;

  return instance;
};

var queueMethods = {
  enqueue: function(value){
    storage[tail] = value;
    tail++;
  },

  dequeue: function(){
    var first = storage[head]
    if (head < tail) {
      head++;
    }
    return first;
  },

  size: function(){
    return tail - head;
  },

};
