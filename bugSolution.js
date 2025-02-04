```javascript
// Correct use of $or operator
db.collection.find( { $or: [ { field: { a: 1 } }, { field: { a: 2 } } ] } );
```