// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = makeNode(value);
    if (this.head === null && this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    }
  };

  list.removeHead = function(){
    var firstValue;

    if (this.head === this.tail) {
      firstValue = this.head && this.head.value
      this.head = null;
      this.tail = null;
      return firstValue;
    }

    firstValue = this.head.value;
    this.head = this.head.next;
    this.head.previous = null;
    return firstValue;
  };

  list.contains = function(item){
    var node = this.head;

    if(!node) {
      return false;
    }

    while (node.next) {
      if (node.value === item) {
        return true;
      } else {
        node = node.next;
      }
    }
    return false;
  };

  list.addToHead = function(value) {
    var node = makeNode(value);

    if (this.head === null && this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.previous = node;
      node.next = this.head;
      this.head = node;
    }
  };

  list.removeFromTail = function() {
    var value;

    if (this.head === this.tail) {
      value = this.tail && this.tail.value
      this.head = null;
      this.tail = null;
      return value;
    }

    value = this.tail.value;
    this.tail = this.tail.previous;
    this.tail.next = null;
    return value;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.previous = null;
  node.next = null;

  return node;
};
