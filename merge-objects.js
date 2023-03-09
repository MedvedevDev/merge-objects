const dest = { a: 1 };
const src = { b: 2 };

// It modifies the dest object
const ss = Object.assign(dest, src); // dest: {a: 1, b: 2}

const obj1 = { a: 1 };
const obj2 = { b: 2 };

// New object to merge into is created to not modify source objects
const merged = Object.assign({}, obj1, obj2); // merged: {a: 1, b: 2}

//  Conflicting properties, the last object with the property wins:
const merged2 = Object.assign({}, { a: 1 }, { a: 2 }, { a: 3 }); // merged2: {a: 3}

