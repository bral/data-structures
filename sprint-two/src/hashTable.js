var HashTable = function(){
  this._limit = 8;
  this._size = 0;

  // Use a limited array to store inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  // There's also a '.each' method that you might find
  // handy once you're working on resizing
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var pair;
  var entries = this._storage.get(i)

  if (entries === undefined) {
    pair = [[k, v]];
    this._storage.set(i, pair);
    this._size++;
  } else {
    for (var i = 0; i < entries.length; i++) {
      if (k === entries[i][0]) {
        entries[i][1] = v;
        return
      }
    }
    entries.push([k, v]);
    this._size++;
  }
};


  // if (entries === undefined) {
  //   inputs = [[k, v]];
  //   //entries.push([k, v]);
  //   this._storage.set(i, inputs);
  // } else {
  //   entries.push([k, v]);
  // }

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var entries = this._storage.get(i);

  if (entries != null) {
    if (entries.length === 1) {
      return entries[0][1];
    } else {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i][0] === k){
          return entries[i][1]
        }
      }
    }
  }

  return false;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var entries = this._storage.get(i);

  if (entries && entries.length === 1) {
    this._storage.set(i, null);
    return true;
  }

  return false;
};

HashTable.prototype.resize = function(newLimit) {
  var oldStorage = this._storage;
  this._limit = 2 * this._limit;
  var that = this;

  this._storage = makeLimitedArray(newLimit)
  oldStorage.each(function(bucket) {
    for (var i = 0; i < bucket.length; i++) {
      that.insert(bucket[i][0], bucket[i][1]);
    }
  })
};