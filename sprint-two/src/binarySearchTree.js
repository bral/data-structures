var makeBinarySearchTree = function(value){
  var newBSTree = {};
  newBSTree.value = value;
  newBSTree.left = null;
  newBSTree.right = null;
  newBSTree.parent = null;


  newBSTree.insert = bsTreeMethods.insert;
  newBSTree.contains = bsTreeMethods.contains;
  newBSTree.depthFirstLog = bsTreeMethods.depthFirstLog;
  newBSTree.breadthFirstLog = bsTreeMethods.breadthFirstLog;
  // _.extend(newTree, bsTreeMethods);

  return newBSTree;
};


var bsTreeMethods = {};

bsTreeMethods.insert = function(value){
  var thisChild = makeBinarySearchTree(value);
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

  var search = function(node, value) {
    if (node.value === value) {
      result = true;
    } else {
      if (node.value > value) {
        search(node.left, value);
      } else {
        search(node.right, value);
      }
    }
  };

  search(this, value);

  return result;
};

bsTreeMethods.depthFirstLog = function(cb) {

  if (this.left) {
    this.left.depthFirstLog(cb);
  }

  cb(this);

  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};

bsTreeMethods.breadthFirstLog = function() {
  var queue = makeQueue();
  var current;

  queue.enqueue(this);

  while (queue.size() > 0) {
    current = queue.dequeue();
    console.log(current.value);

    if (current.left) {
      queue.enqueue(current.left)
    }

    if (current.right) {
      queue.enqueue(current.right)
    }
  }
};

























