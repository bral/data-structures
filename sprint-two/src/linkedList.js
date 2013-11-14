// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = "a";
  list.tail = "a";

  list.addToTail = function(){
  };

  list.removeHead = function(){
  };

  list.contains = function(){
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
