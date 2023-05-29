import assert from "assert";
const add = (a: number, b: number) => a + b;

console.log('add ()\nShould add two numbers');
try {
    assert.strictEqual(add(1, 2), 3);
    console.log('SUCCESS');
} catch (error) {
    console.log('FAIL');
    console.error(error);
}