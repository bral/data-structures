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
  var inputs;
  var entries = this._storage.get(i)

  if (entries === undefined) {
    inputs = [[k, v]];
    //entries.push([k, v]);
    this._storage.set(i, inputs);
  } else {
    entries.push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var entries = this._storage.get(i);

  if (entries != null) {
    if (entries.length === 1) {
      return entries[0][1];
    } else {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i][0] === k){
          return entries[i][1]
        }
      }
    }
  }

  return false;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var entries = this._storage.get(i);

  if (entries && entries.length === 1) {
    this._storage.set(i, null);
    return true;
  }

  return false;
};

/* HashTable.prototype.makeLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(key, value){
    var node = makeNode(key, value);
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
      firstValue = this.head && this.head.value[0]
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

  var makeNode = function(key, value){
  var node = {};
  node.value = [key, value];
  node.next = null;

  return node;
}; */

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you
