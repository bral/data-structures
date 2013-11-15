var makeTree = function(){
  var newTree = {};
  newTree.value = undefined;
  newTree.children = [];

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  // _.extend(newTree, treeMethods);

  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  var thisChild = makeTree();
  thisChild.value = value;
  this.children.push(thisChild);
};

treeMethods.contains = function(value){
  var result = false;

  if (this.value === value) {
    return true
  }

  for (var i = 0; i < this.children.length; i++) {
    result = this.children[i].contains(value);
    if (result) {
      return result;
    }
  }

  return result;
};
