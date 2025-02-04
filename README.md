# Incorrect use of $in operator with array of objects in MongoDB

This example demonstrates an incorrect use of the `$in` operator in MongoDB queries. The `$in` operator is intended to check if a field's value exists within an array of scalar values, not objects.  Using it with objects will not produce the expected results.

## Bug
The following query attempts to find documents where the `field` matches either `{ a: 1 }` or `{ a: 2 }`. However, it will not return the expected documents because of the incorrect use of `$in`.

```javascript
// Incorrect use of $in operator with an array of objects
db.collection.find( { field: { $in: [ { a: 1 }, { a: 2 } ] } } );
```

## Solution
To achieve the desired outcome, use the `$or` operator to check for multiple conditions:

```javascript
db.collection.find( { $or: [ { field: { a: 1 } }, { field: { a: 2 } } ] } );
```

This query correctly finds documents where the `field` is either `{ a: 1 }` or `{ a: 2 }`.