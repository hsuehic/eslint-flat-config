export default () => {};

// generic no-console
console.log('ddd');

// eslint:recommended constructor-super
class B {}

export class A extends B {
    constructor() {} // Would throw a ReferenceError.
}

// typescript-eslint: requiring-type-checking no-for-in-array
const regions = ['sg', 'br'];
for (let r in regions) {
}

// typescript-eslint: requiring-type-checking no-for-in-array
class MyClass {
    public log(): void {
        console.log(this);
    }
}

// typescript-eslint: @typescript-eslint/unbound-method
const instance = new MyClass();

// This logs the global scope (`window`/`global`), not the class instance
const myLog = instance.log;
myLog();
