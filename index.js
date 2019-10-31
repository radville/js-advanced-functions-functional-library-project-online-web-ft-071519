const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },
  
    each: function(collection, callback) {
      let i;
      let newCollection;
      if (collection instanceof Array) {
        newCollection = collection.slice()
      } else { 
        newCollection = Object.values(collection)
      }
      for (i=0; i < newCollection.length; i++) {
        callback(newCollection[i])      }
      return collection
    },

    map: function(collection, callback) {
      let i;
      let newArray = []
      let newCollection;
      if (collection instanceof Array) {
        newCollection = collection.slice()
      } else { 
        newCollection = Object.values(collection)
      }
      for (i=0; i < newCollection.length; i++) {
        newArray.push(callback(newCollection[i]));
      }
      return newArray
    },

    reduce: function(collection, callback, startingValue) {
      let total = startingValue;
      let i;
      if (!startingValue) {
        total = collection[0];
        collection = collection.slice(1)
      }
      for (i=0; i < collection.length; i++) {
        total = callback(total, collection[i])
      }
      return total
    },

    functions: function(object) {
      const isFunction = value => value && (Object.prototype.toString.call(value) === "[object Function]" || "function" === typeof value || value instanceof Function);
      let i;
      let newArray = [];
      // console.log(object)
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
      let size = 0;
      if (collection.length > 0) {
        for (i=0; i < collection.length; i++) {
          ++size;
      }} else {
        size = Object.keys(collection).length
      }
      return size
    },

    first: function(array, number=1) {
      if (number === 1) {
        return array.slice(0,(number))[0]
      } else {
        return array.slice(0,(number))
      }
    },

    last: function(array, number=1) {
      if (number === 1) {
        return array.slice(number * -1)[0]
      } else {
        return array.slice(number * -1)
      }
    },
    
    compact: function(array) {

    },

    sortBy: function(array, callback) {
      let newArray = array.slice();
      newArray.sort(function(a, b){return callback(a)-callback(b)});
      return newArray;
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
