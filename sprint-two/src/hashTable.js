var HashTable = function(){
  this._limit = 8;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  // There's also a '.each' method that you might find
  // handy once you're working on resizing
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var entries;

  console.log(i);

  if (this._storage.get(i) === undefined) {
    entries = this.makeLinkedList()
    entries.addToTail(v);
    this._storage.set(i, entries);
  } else {
    entries = this._storage.get(i);
    entries.addToTail(v);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(i);
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, null);
};

HashTable.prototype.makeLinkedList = function() {
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

  return list;
  };

  var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
