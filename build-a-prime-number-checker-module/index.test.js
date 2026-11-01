const assert = require('node:assert/strict');

const pnc = require('./index');

assert.strictEqual(
    pnc.isPrime(0),
    false
);

assert.strictEqual(
    pnc.isPrime(1),
    false
);

assert.strictEqual(
    pnc.isPrime(2),
    true
);

assert.strictEqual(
    pnc.isPrime(3),
    true
);

assert.strictEqual(
    pnc.isPrime(4),
    false
);

assert.strictEqual(
    pnc.isPrime(5),
    true
);

assert.strictEqual(
    pnc.isPrime(null),
    false
);