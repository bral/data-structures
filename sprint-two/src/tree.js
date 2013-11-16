var makeTree = function(){
  var newTree = {};
  newTree.value = undefined;
  newTree.children = [];
  newTree.parent = null;

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  newTree.removeFromParent = treeMethods.removeFromParent;
  // _.extend(newTree, treeMethods);

  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  var thisChild = makeTree();
  thisChild.parent = this;
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

treeMethods.removeFromParent = function(value) {
  // var me = this;
  // var parent = me.parent;

  for(var i = 0; i < this.children.length; i++) {
    this.children[i].parent = this.parent;

    this.parent.children.push(this.children[i]);
  }

  this.parent.children.splice(value, 1);

  this.parent = null;
};
