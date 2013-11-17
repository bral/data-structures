describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree(5);
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(binarySearchTree.insert).toEqual(jasmine.any(Function));
    expect(binarySearchTree.contains).toEqual(jasmine.any(Function));
    expect(binarySearchTree.depthFirstLog).toEqual(jasmine.any(Function));
  });

  it("should insert a lower value child as the left child", function() {
    binarySearchTree.insert(3);
    expect(binarySearchTree.left.value).toEqual(3);
  });

  it("should insert a higher value child as the right child", function() {
    binarySearchTree.insert(8);
    expect(binarySearchTree.right.value).toEqual(8);
  });

    it("should recursively add a child when left is occupied", function() {
    binarySearchTree.insert(3);
    binarySearchTree.insert(2);
    expect(binarySearchTree.left.left.value).toEqual(2);
  });

  it("should recursively add a child when right is occupied", function() {
    binarySearchTree.insert(8);
    binarySearchTree.insert(9);
    expect(binarySearchTree.right.right.value).toEqual(9);
  });

  it("should return true if contains value is found in tree", function() {
    binarySearchTree.insert(3);
    binarySearchTree.insert(2);
    binarySearchTree.insert(1);
    binarySearchTree.insert(2);
    binarySearchTree.insert(8);
    binarySearchTree.insert(9);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.contains(8)).toEqual(true);
    expect(binarySearchTree.contains(6)).toEqual(true);
  });

  it("should execute callback on single node BST when depthFirstLog is called", function() {
    var result = []
    binarySearchTree.depthFirstLog(function(node) {
      result.push(node.value);
    });
    expect(result).toEqual([5]);
  });

  it("should execute callback on every BST node in depth first style when depthFirstLog is called", function() {
    binarySearchTree.insert(3);
    binarySearchTree.insert(2);
    binarySearchTree.insert(1);
    binarySearchTree.insert(2);
    binarySearchTree.insert(8);
    binarySearchTree.insert(9);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    var result = []
    binarySearchTree.depthFirstLog(function(node) {
      result.push(node.value);
    });
    expect(result).toEqual([1,2,2,3,5,6,7,8,9]);
  });

  it("should console log every in breadth first fashion when .breadthFirstLog is invoked", function() {
    binarySearchTree.insert(3);
    binarySearchTree.insert(2);
    binarySearchTree.insert(1);
    binarySearchTree.insert(2);
    binarySearchTree.insert(8);
    binarySearchTree.insert(9);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    binarySearchTree.breadthFirstLog();
  });
});
