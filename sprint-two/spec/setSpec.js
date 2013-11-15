describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).toEqual(jasmine.any(Function));
    expect(set.contains).toEqual(jasmine.any(Function));
    expect(set.remove).toEqual(jasmine.any(Function));
  });

  it("should add a string into the set when string is passed to add function", function() {
    set.add("Hello");
    expect(set._storage["Hello"]).toEqual(true);
  });

  it("should return true when contains is called with a value that resides in set", function() {
    set.add("Hello");
    expect(set.contains("Hello")).toEqual(true);
  });

  it("should remove a value from the set on remove method invocation", function() {
    set.add("Hello");
    set.add("World");
    set.remove("Hello");
    expect(set.contains("Hello")).toEqual(false);
  });
});