const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },
  
    each: function(collection, callback) {
      let i;
      for (i=0; i < collection.length; i++) {
        callback(collection[i]);
      }
      return collection
    },

    map: function(collection, callback) {
      let i;
      let newArray = []
      for (i=0; i < collection.length; i++) {
        newArray.push(callback(collection[i]));
      }
      return newArray
    },

    reduce: function(collection, callback, startingValue) {
      let total = startingValue;
      let i;
      for (i=0; i < collection.length; i++) {
        total = callback(collection[i], total)
      }
      return total
    },

    functions: function(object) {
      const isFunction = value => value && (Object.prototype.toString.call(value) === "[object Function]" || "function" === typeof value || value instanceof Function);
      let i;
      let newArray = [];
      console.log(object)
      // for (i=0, i < object.values)
      // object.values.forEach(value => {
      //   if (isFunction(value)) {
      //     newArray.push(value)
      //   }
      // });
      // console.log(newArray)

      // return newArray;
    },

    find: function(collection, predicate) {

    },

    filter: function(collection, predicate) {

    },

    size: function(collection) {
      let i;
      for (i=0; i < collection.length; i++) {}
      return i
    },

    first: function(array, number) {

    },

    last: function(array, number) {

    },
    
    compact: function(array) {

    },

    sortBy: function(array, callback) {

    },

    flatten: function(array, shallow) {

    },

    uniq: function(array, isSorted, callback) {

    },

    keys: function(object) {

    },

    values: function(object) {

    },
  }
})()

fi.libraryMethod()
