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
  });

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

  it("should overwrite a pre-exsiting key's value with new value", function() {
    hashTable.insert("one", 2);
    hashTable.insert("one", 3);
    expect(hashTable.retrieve("one")).toEqual(3);
  });

  it("should increase size by one for each element added", function() {
    hashTable.insert("one", 1);
    hashTable.insert("two", 2);
    hashTable.insert("three", 3);
    hashTable.insert("four", 4);
    hashTable.insert("five", 5);
    hashTable.insert("six", 6);
    expect(hashTable._size).toEqual(6);

  });

  it("should have the correct size to limit ratio", function() {
    hashTable.insert("one", 1);
    hashTable.insert("two", 2);
    hashTable.insert("three", 3);
    hashTable.insert("four", 4);
    hashTable.insert("five", 5);
    hashTable.insert("six", 6);
    expect(hashTable._size / hashTable._limit).toEqual(0.75);
  });

  it("should resize the hash table when total items inserted equals 75% of limit", function() {
    hashTable.insert("one", 1);
    hashTable.insert("two", 2);
    hashTable.insert("three", 3);
    hashTable.insert("four", 4);
    hashTable.insert("five", 5);
    hashTable.insert("six", 6);    
    hashTable.insert("seven", 7);    
    hashTable.insert("eight", 8);    
    expect(hashTable._limit).toEqual(16)
  });
});
