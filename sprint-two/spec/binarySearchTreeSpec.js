describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree();
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(binarySearchTree.insert).toEqual(jasmine.any(Function));
    expect(binarySearchTree.contains).toEqual(jasmine.any(Function));
    expect(binarySearchTree.depthFirstLog).toEqual(jasmine.any(Function));
  });

  it("should insert a lower value child as the left child", function() {
    binarySearchTree.value = 5;
    binarySearchTree.insert(3);
    expect(binarySearchTree.left.value).toEqual(3);
  });

  it("should insert a higher value child as the right child", function() {
    binarySearchTree.value = 5;
    binarySearchTree.insert(8);
    expect(binarySearchTree.right.value).toEqual(8);
  });

    it("should recursively add a child when left is occupied", function() {
    binarySearchTree.value = 5;
    binarySearchTree.insert(3);
    binarySearchTree.insert(2);
    expect(binarySearchTree.left.left.value).toEqual(2);
  });

  it("should recursively add a child when right is occupied", function() {
    binarySearchTree.value = 5;
    binarySearchTree.insert(8);
    binarySearchTree.insert(9);
    expect(binarySearchTree.right.right.value).toEqual(9);
  });
});
