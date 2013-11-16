var makeBinarySearchTree = function(){
  var newBSTree = {};
  newBSTree.value = undefined;
  newBSTree.left = null;
  newBSTree.right = null;


  newBSTree.insert = bsTreeMethods.insert;
  newBSTree.contains = bsTreeMethods.contains;
  newBSTree.depthFirstLog = bsTreeMethods.depthFirstLog;
  // _.extend(newTree, bsTreeMethods);

  return newBSTree;
};


var bsTreeMethods = {};

bsTreeMethods.insert = function(value){
  var thisChild = makeBinarySearchTree();
  //thisChild.parent = this;
  thisChild.value = value;

  var checker = function(currentNode) {
    if (thisChild.value < currentNode.value) {
      if (currentNode.left === null) {
        currentNode.left = thisChild;
      } else {
        checker(currentNode.left);
      }
    } else {
      if (currentNode.right === null) {
        currentNode.right = thisChild;
      } else {
        checker(currentNode.right);
      }
    }
  };

  checker(this);

};

bsTreeMethods.contains = function(value){
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

bsTreeMethods.depthFirstLog = function(value) {
  // var me = this;
  // var parent = me.parent;

  for(var i = 0; i < this.children.length; i++) {
    this.children[i].parent = this.parent;

    this.parent.children.push(this.children[i]);
  }

  this.parent.children.splice(value, 1);

  this.parent = null;
};
