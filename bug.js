```javascript
// Incorrect use of $in operator with an array of objects
db.collection.find( { field: { $in: [ { a: 1 }, { a: 2 } ] } } );
```