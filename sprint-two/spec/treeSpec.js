describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

  it("should have property named 'children' that is of type array", function() {
    expect(Array.isArray(tree.children)).toEqual(true);
  });

  it("should increase length of children array by one when addChild is invoked", function() {
    var treeLength = tree.children.length
    tree.addChild("x");
    tree.addChild("y");
    tree.addChild("z");
    expect(tree.children.length).toEqual(treeLength + 3);
  })

  it("should add a child node to a child node", function() {
    tree.addChild("child");
    tree.children[0].addChild("grand child");
    expect(tree.children[0].children.length).not.toEqual(0);
  });

  it("should return true if target value is found on target", function() {
    tree.value = 12;
    expect(tree.contains(12)).toEqual(true);
  });

  it("should return true if target value is found on a child", function() {
    tree.value = "a";
    tree.addChild("b");
    tree.addChild("c");
    expect(tree.contains("c")).toEqual(true);
  });

  it("should return true if target value is found on any decendants of target node", function() {
    tree.value = "a";
    tree.addChild("b");
    tree.addChild("c");
    tree.children[0].addChild("d")
    expect(tree.contains("d")).toEqual(true);
  });

  it("should return true if target value is found on a branch that is not the first object in the children array", function() {
    tree.value = "a";
    tree.addChild("b");
    tree.addChild("c");
    tree.children[1].addChild("d")
    expect(tree.contains("d")).toEqual(true);
  });

});