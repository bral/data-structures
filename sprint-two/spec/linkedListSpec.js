describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  // add more tests here to test the functionality of linkedList
  it("should update tail when addToTail is invoked", function() {
    linkedList.addToTail("a");
    expect(linkedList.tail.value).toEqual("a");
  })

  it("should update head when addToTail is invoked the first time", function() {
    linkedList.addToTail("a");
    expect(linkedList.head.value).toEqual("a");
  });

  it("should update tail to last added node when multiple nodes are added", function() {
    linkedList.addToTail("a");
    linkedList.addToTail("b");
    linkedList.addToTail("c");
    expect(linkedList.tail.value).toEqual("c");
  });

  it("should remove head and return value, while setting new head to next value", function() {
    linkedList.addToTail("a");
    linkedList.addToTail("b");
    linkedList.addToTail("c");
    linkedList.removeHead();
    expect(linkedList.head.value).toEqual("b");
  });

  it("should not update head when list is empty and removeHead is called", function() {
    linkedList.removeHead();
    expect(linkedList.head).toEqual(null);
  });

  it("should reset head and tail when last node in list is removed", function() {
    linkedList.addToTail("a");
    linkedList.removeHead();
    expect(linkedList.head).toEqual(null);
    expect(linkedList.tail).toEqual(null);
  });

  it("should return value when removeHead is called", function () {
    linkedList.addToTail("z");
    var result = linkedList.removeHead();
    expect(result).toEqual("z");
  });

  it("should return true when contains finds the passed in value", function () {
    linkedList.addToTail("z");
    linkedList.addToTail("Yo!");
    linkedList.addToTail(1024);
    expect(linkedList.contains("Yo!")).toEqual(true);
  });

  it("should return false when contains does not find the passed in value", function() {
    linkedList.addToTail("z");
    linkedList.addToTail("Yo!");
    linkedList.addToTail(1024);
    expect(linkedList.contains("It's here")).toEqual(false);
  });

  it("should return false when contains is passed a value on an empty list", function() {
    expect(linkedList.contains("It's here")).toEqual(false);
  });

  it("should have addToHead and removeFromTail methods", function() {
    expect(linkedList.addToHead).toEqual(jasmine.any(Function));
    expect(linkedList.removeFromTail).toEqual(jasmine.any(Function));
  });

});