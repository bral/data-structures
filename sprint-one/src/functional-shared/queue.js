var makeQueue = function(){
  var instance = {};

  instance.storage = {};
  instance.head = 0;
  instance.tail = 0;

  _.extend(instance, queueMethods);

  return instance;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.tail] = value;
    this.tail++;
  },

  dequeue: function(){
    var first = this.storage[this.head]
    if (this.head < this.tail) {
      this.head++;
    }
    return first;
  },

  size: function(){
    return this.tail - this.head;
  },

};
