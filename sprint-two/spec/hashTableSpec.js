describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = new HashTable();
  });

  it("should have methods named 'insert' and 'retrieve", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
  });

  it("should be able to insert and retrieve a value", function() {
    hashTable.insert("one", 1);
    expect(hashTable.retrieve("one")).toEqual(1);
  });

  it("should be able to remove a value", function() {
    hashTable.insert("one", 1);
    hashTable.remove("one");
    expect(hashTable.retrieve("one")).toEqual(false);
  });

  it("should be able to store multiple value", function() {
    hashTable.insert("one", 1);
    hashTable.insert("twenty", 20);
    expect(hashTable.retrieve("one")).toEqual(1);
    expect(hashTable.retrieve("twenty")).toEqual(20);
  });

  it("should return undefined when remove is called with a nonexistant key", function() {
    expect(hashTable.remove("one")).toEqual(false);
  });

  it("should return false when retrieve is called on a nonexistant key", function() {
    expect(hashTable.retrieve("one")).toEqual(false);
  })
  // it("should create a linkedList when makeLinkedList is called", function() {
  //   var ll = hashTable.makeLinkedList();
  //   expect(ll.head).toEqual(null);
  // });

  // it("should add value to a pre-exsiting linkedList", function() {
  //   hashTable.insert("one", 1);
  //   hashTable.insert("one", 2);
  //   expect(hashTable.retrieve("one")).toEqual(2);
  //   expect(hashTable.retrieve("one")).toEqual(1);
  // });

  it("should handle hash function collisions", function(){
    // force the hash function to return 0
    spyOn(window, 'getIndexBelowMaxForKey').andReturn(0);
    var v1 = 'val1', v2 = 'val2';
    hashTable.insert(v1, v1);
    hashTable.insert(v2, v2);
    expect(hashTable.retrieve(v1)).toEqual(v1);
    expect(hashTable.retrieve(v2)).toEqual(v2);
  });

  // add more tests!
});
