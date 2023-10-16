// use ANY data type, return ANY data type, short circuiting
console.log("-----OR------------");
console.log(3 || "Jonas");
console.log("" || "Jonas");
console.log(true || 0);
console.log(undefined || null);

console.log("----------AND-----------");
console.log(0 && "Jonas");
console.log(7 || "Jonas");

console.log("Hello" && 23 && null && "Jonas");

// Nullish coalescing Operator (??)
// The Nullish coalescing (??) operator is a logical operator that returns its right -hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

const foo = null ?? "default String";
console.log(foo);

const baz = 0 ?? 42;
console.log(baz);
